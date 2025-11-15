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

const baseUrl = "https://demonicscans.org";

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const response = await ctx.proxiedFetcher(
    `${baseUrl}/search.php?manga=${encodeURIComponent(ctx.titleInput)}`,
  );
  const $ = cheerio.load(response);

  $("a > li.flex.flex-row").each((_, el) => {
    const $el = $(el);
    const parent = $el.parent("a");

    const title = $el.find("div.flex-col > div:first-child").text().trim();
    const url = parent.attr("href");
    if (!title || !url) return;

    const coverUrl = $el.find("img.search-thumb").attr("src")?.trim();

    // const viewsText = $el
    //   .find("div.flex-col > div:nth-child(2)")
    //   .text()
    //   .trim();
    // const views = parseInt(viewsText.replace(/\D/g, ""), 10);

    manga.push({
      title,
      url: url.startsWith("http") ? url : baseUrl + url,
      coverUrl,
      sourceId: "demonicscans",
      year: undefined,
    });
  });

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

  $("#chapters-list li a.chplinks").each((_, el) => {
    const $el = $(el);

    const titleText = $el.text().trim();
    const url = $el.attr("href");
    if (!url) return;

    const date = $el.find("span").text().trim();

    const match = titleText.match(/Chapter\s+(\d+(\.\d+)?)/i);
    const chapterNumber = match ? match[1] : undefined;

    const parts = url.split("/").filter(Boolean);
    const chapterId = parts[parts.length - 1];

    chapters.push({
      id: chapterId,
      sourceId: "demonicscans",
      title: titleText,
      chapterNumber,
      url: url.startsWith("http") ? url : baseUrl + url,
      date,
    });
  });

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const pages: Page[] = [];

  const response = await ctx.proxiedFetcher(ctx.chapter.url);
  const $ = cheerio.load(response);

  $("img.imgholder").each((index, el) => {
    const $el = $(el);

    let src = $el.attr("src");
    if (!src) return;

    if (src.startsWith("/")) src = baseUrl + src;
    if (src.startsWith("//")) src = "https:" + src;

    pages.push({
      id: index,
      url: src,
    });
  });

  return pages;
}

export const demonicScansScraper: Source = {
  id: "demonicscans",
  name: "Demonic Scans (MangaDemon)",
  url: baseUrl,
  rank: 44,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
