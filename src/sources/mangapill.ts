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
import { NotFoundError } from "@/utils/errors";

const baseUrl = "https://mangapill.com";

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const searchUrl = `${baseUrl}/search?q=${encodeURIComponent(ctx.titleInput)}`;
  const response = await ctx.proxiedFetcher(searchUrl, { method: "GET" });

  if (!response || response.status >= 400) {
    throw new NotFoundError("[Mangapill] failed to fetch search results");
  }

  const html = (await response.text?.()) ?? response;
  const $ = cheerio.load(html);

  const manga: Manga[] = [];

  $('a[href^="/manga/"]').each((_, el) => {
    const $a = $(el);
    const title = $a.find(".font-black").text().trim();
    const url = baseUrl + ($a.attr("href") ?? "");
    const img = $a.find("img").attr("src")?.trim() ?? "";

    if (!title || !url) return;

    manga.push({
      title,
      url,
      coverUrl: img,
      sourceId: "mangapill",
    });
  });

  if (manga.length === 0) throw new NotFoundError("[Mangapill] no manga found");

  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const response = await ctx.proxiedFetcher(ctx.manga.url);
  const html = (await response.text?.()) ?? response;
  const $ = cheerio.load(html);

  const chapters: Chapter[] = [];

  $('div[data-filter-list] a[href^="/chapters/"]').each((_, el) => {
    const $a = $(el);

    const titleText = $a.text().trim();

    const url = baseUrl + ($a.attr("href") ?? "");

    const match = titleText.match(/chapter\s*(\d+(\.\d+)?)/i);
    const chapterNumber = match ? match[1] : undefined;

    const parts = ($a.attr("href") ?? "").split("/").filter(Boolean);
    const idPart = parts[1]; // "3262-10217000"
    const id = idPart ?? chapterNumber ?? titleText;

    if (!chapterNumber) return;

    chapters.push({
      id,
      chapterNumber,
      title: titleText,
      url,
      sourceId: "mangapill",
    });
  });

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const response = await ctx.proxiedFetcher(ctx.chapter.url);
  const html = (await response.text?.()) ?? response;
  const $ = cheerio.load(html);

  const pages: Page[] = [];

  $("chapter-page").each((index, el) => {
    const $page = $(el);

    const $img = $page.find("img");
    const src = $img.attr("data-src")?.trim() || $img.attr("src")?.trim();

    if (!src) return;

    const pageId = index + 1;

    pages.push({
      id: pageId,
      url: src,
    });
  });

  // pages.sort((a, b) => a.id - b.id);

  if (pages.length === 0) {
    throw new NotFoundError(
      `[Mangapill] No pages found for chapter: ${ctx.chapter.url}`,
    );
  }

  return pages;
}

export const mangaPillScraper: Source = {
  id: "mangapill",
  name: "Mangapill",
  url: baseUrl,
  rank: 30,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
