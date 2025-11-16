import * as cheerio from "cheerio";
import type { Chapter, Manga, Page } from "@/utils/types";
import type {
  MangaContext,
  ChapterContext,
  SearchContext,
} from "@/utils/context";
import type {
  SourceChaptersOutput,
  SourceMangaOutput,
  SourcePagesOutput,
} from "./base";
import type { Source } from "@/sources/base";
import pLimit from "p-limit";

const baseUrl = "https://www.niadd.com";

const limit = pLimit(10);

type SearchResponse = {
  id: string;
  name: string;
  alternative?: string | null; //split ;
  lang_code?: string | null;
  publish_year?: string | null;
  author: string | null;
  artist: string | null;
  intro?: string | null;
  tag?: any | null;
  cover: string;
  url: string;
  category_list: string[];
};

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const response: SearchResponse[] = await ctx.proxiedFetcher(
    `${baseUrl}/ajax/search`,
    {
      method: "GET",
      // headers: {
      //     "X-Origin": baseUrl,
      //     "X-Referer": baseUrl + '/'
      // }
      query: {
        term: ctx.titleInput,
      },
    },
  );

  if (!response.length)
    throw new Error(`[Niadd] error while connecting to api`);

  for (const item of response) {
    manga.push({
      id: item.id,
      title: item.name,
      altTitles: item.alternative
        ? [
            Object.fromEntries(
              item.alternative
                .split(";")
                .map((t) => t.trim())
                .map((t, i) => [String(i), t]),
            ),
          ]
        : undefined,
      originalLanguage: item.lang_code ?? undefined,
      year: parseInt(item.publish_year ?? "0") || undefined,
      author: [item.author ?? ""].filter(Boolean),
      artist: [item.artist ?? ""].filter(Boolean),
      description: item.intro ?? undefined,
      coverUrl: item.cover,
      tags: item.category_list,
      url: baseUrl + `/original/${item.id}/chapters.html`,
      sourceId: "niadd",
    });
  }
  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const response = await ctx.proxiedFetcher(ctx.manga.url);
  const $ = cheerio.load(response);

  const chapters = getChapters($);
  return chapters;
}

function getChapters($: cheerio.CheerioAPI): Chapter[] {
  const chapters: Chapter[] = [];

  $("ul.chapter-list a.hover-underline").each((_, el) => {
    const $a = $(el);
    const url = $a.attr("href") || "";
    const titleText = $a.attr("title")?.trim() || $a.text().trim();

    // Try to extract chapter number from title
    const match = titleText.match(/Chapter\s*(\d+(\.\d+)?)/i);
    const chapterNumber = match ? match[1] : undefined;

    const date = $a.find("span.chp-time").text().trim();

    if (!url) return;

    const parts = url.split("/").filter(Boolean);
    const chapterIdStr = parts[parts.length - 1];
    const chapterId = chapterIdStr.replace(/[^\d]/g, "");

    chapters.push({
      id: chapterId,
      sourceId: "niadd",
      chapterNumber,
      url: url.startsWith("http") ? url : baseUrl + url,
      date,
      title: titleText,
    });
  });

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const rootUrl = ctx.chapter.url;
  const pages: Page[] = [];

  const response = await ctx.proxiedFetcher(rootUrl);
  const $ = cheerio.load(response);

  const pageUrls: string[] = [];

  $("select.sl-page option").each((_, el) => {
    const rel = $(el).attr("value");
    if (!rel) return;

    const abs = rel.startsWith("http") ? rel : baseUrl + rel;
    pageUrls.push(abs);
  });

  if (pageUrls.length === 0) {
    pageUrls.push(rootUrl);
  }

  const tasks = Array.from(new Set(pageUrls)).map((url, index) =>
    limit(async () => {
      const html = await ctx.proxiedFetcher(url);
      const $$ = cheerio.load(html);

      const pageImages: string[] = [];

      $$("#viewer .pic_box img.manga_pic").each((_, img) => {
        let src = $$(img).attr("src")?.trim();
        if (!src) return;

        if (src.startsWith("//")) src = "https:" + src;
        if (src.startsWith("data:image")) return;

        pageImages.push(src);
      });

      return { index, pageImages };
    }),
  );

  const results = await Promise.all(tasks);

  let id = 0;

  results
    .sort((a, b) => a.index - b.index)
    .forEach(({ pageImages }) => {
      for (const src of pageImages) {
        pages.push({
          id: id++,
          url: src,
        });
      }
    });

  return pages;
}

export const niaddScraper: Source = {
  id: "niadd",
  name: "Niadd",
  url: baseUrl,
  rank: 40,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
