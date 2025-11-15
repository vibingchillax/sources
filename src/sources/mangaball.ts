import * as cheerio from "cheerio";
import type { Chapter, Manga, Page } from "@/utils/types";
import type {
  MangaContext,
  ChapterContext,
  SearchContext,
  ScrapeContext,
} from "@/utils/context";
import type {
  SourceChaptersOutput,
  SourceMangaOutput,
  SourcePagesOutput,
} from "./base";
import type { Source } from "@/sources/base";
import { NotFoundError } from "@/utils/errors";
import { makeCookieHeader, parseSetCookie } from "@/utils/cookie";

const baseUrl = "https://mangaball.net";

type MangaResponse = {
  data: {
    manga: {
      img: string;
      title: string;
      status: string;
      url: string;
    }[];
  };
};

type ChapterResponse = {
  ALL_CHAPTERS: {
    number_float: number;
    title: string;
    translations: {
      id: string;
      name: string;
      language: string;
      group: {
        name: string;
      };
      date: string;
      volume: number;
      url: string;
    }[];
  }[];
};

async function getSession(ctx: ScrapeContext) {
  const csrfResponse = await ctx.proxiedFetcher.full<string>(baseUrl, {
    method: "GET",
    readHeaders: ["Set-Cookie"],
  });

  const $ = cheerio.load(csrfResponse.body);
  const csrfToken = $('meta[name="csrf-token"]').attr("content");
  if (!csrfToken) throw new Error("[MangaBall] Failed to get csrf token");
  const cookie = parseSetCookie(csrfResponse.headers.get("Set-Cookie") || "");
  const phpSession = cookie.PHPSESSID?.value;
  if (!phpSession)
    throw new Error("[MangaBall] Failed to get PHPSESSID cookie");
  const cookieHeader = makeCookieHeader({
    PHPSESSID: phpSession,
  });
  return {
    token: csrfToken,
    cookie: cookieHeader,
  };
}

function extractChapterImages(script: string): string[] | null {
  const re = /chapterImages\s*=\s*JSON\.parse\(`([\s\S]*?)`\)/;
  const match = script.match(re);
  if (!match || !match[1]) return null;

  try {
    // The JSON.parse content is inside a template string
    return JSON.parse(match[1]);
  } catch (err) {
    console.error("Failed to parse chapterImages JSON", err);
    return null;
  }
}

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const searchUrl = `${baseUrl}/api/v1/smart-search/search`;
  const session = await getSession(ctx);

  const response: MangaResponse = await ctx.proxiedFetcher(searchUrl, {
    method: "POST",
    body: {
      search_input: ctx.titleInput,
    },
    headers: {
      cookie: session.cookie,
      "X-Origin": baseUrl,
      "X-Referer": baseUrl,
      "X-X-CSRF-TOKEN": session.token,
    },
  });

  if (!response.data.manga || response.data.manga.length === 0) {
    throw new NotFoundError("[MangaBall] failed to fetch search results");
  }

  const manga: Manga[] = [];

  for (const data of response.data.manga) {
    const titles = data.title.split("/");

    const altTitles = Object.fromEntries(
      titles.slice(1).map((t, i) => [String(i), t.trim()]),
    );

    const titleSlug = data.url.split("/")[2];
    const mangaId = titleSlug.split("-").pop();
    manga.push({
      id: mangaId,
      sourceId: "mangaball",
      title: titles[0].trim(),
      altTitles: [altTitles], //yo what i dont remember writing altTitles like this
      coverUrl: data.img,
      url: baseUrl + "/api/v1/chapter/chapter-listing-by-title-id/",
    });
  }

  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const session = await getSession(ctx);
  const response: ChapterResponse = await ctx.proxiedFetcher(ctx.manga.url, {
    method: "POST",
    body: {
      title_id: ctx.manga.id,
    },
    headers: {
      cookie: session.cookie,
      "X-Origin": baseUrl,
      "X-Referer": baseUrl,
      "X-X-CSRF-TOKEN": session.token,
    },
  });

  const chapters: Chapter[] = [];
  for (const chapter of response.ALL_CHAPTERS) {
    for (const translation of chapter.translations) {
      chapters.push({
        id: translation.id,
        sourceId: "mangaball",
        title: translation.name,
        volume: String(translation.volume),
        chapterNumber: String(chapter.number_float),
        translatedLanguage: translation.language,
        scanlationGroup: translation.group.name,
        url: translation.url,
        date: translation.date,
      });
    }
  }

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const response = await ctx.proxiedFetcher(ctx.chapter.url);
  const html =
    typeof response.text === "function" ? await response.text() : response;
  const $ = cheerio.load(html);

  const pages: Page[] = [];
  let found = false;

  $("script").each((_, el) => {
    const scriptContent = $(el).html();
    if (!scriptContent) return;

    const urls = extractChapterImages(scriptContent);
    if (urls?.length) {
      urls.forEach((url, i) => pages.push({ id: i + 1, url }));
      found = true;
    }
  });

  if (!found || pages.length === 0) {
    throw new NotFoundError(
      `[MangaBall] No pages found for chapter: ${ctx.chapter.url}`,
    );
  }

  return pages;
}

export const mangaBallScraper: Source = {
  id: "mangaball",
  name: "MangaBall",
  url: baseUrl,
  rank: 38,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
