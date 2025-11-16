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

const baseUrl = "https://www.taadd.com";

const limit = pLimit(10);

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const response: any[][] = JSON.parse(
    await ctx.proxiedFetcher(`${baseUrl}/search/ajax`, {
      method: "GET",
      query: {
        term: ctx.titleInput,
      },
      // headers: {
      //   'X-Origin': baseUrl,
      //   'X-Referer': baseUrl,
      // }
    }),
  );

  if (!response.length)
    throw new Error(`[Taadd] error while connecting to api`);

  for (const item of response) {
    manga.push({
      title: item[1],
      coverUrl: item[0],
      url: baseUrl + `/book/` + encodeURI(item[2]) + ".html",
      author: [item[4]],
      sourceId: "taadd",
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

  $("div.chapter_list table tr").each((_, tr) => {
    const $tds = $(tr).find("td");
    if ($tds.length < 2) return;

    const $link = $tds.eq(0).find("a");
    const $date = $tds.eq(1).find("a");

    const url = $link.attr("href");
    if (!url) return;

    const title = $link.text().trim();
    const date = $date.text().trim();

    // /chapter/OnePieceVolTBECh1165/18200565/
    const parts = url.split("/").filter(Boolean);
    const chapterId = parts[parts.length - 1];

    const match = title.match(/Ch\.?(\d+(\.\d+)?)/i);
    const chapterNumber = match ? match[1] : undefined;

    chapters.push({
      id: chapterId,
      sourceId: "taadd",
      chapterNumber,
      url: url.startsWith("http") ? url : baseUrl + url,
      date,
      title,
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

  $("select#page option").each((_, el) => {
    const rel = $(el).attr("value");
    if (rel) pageUrls.push(rel.startsWith("http") ? rel : baseUrl + rel);
  });

  if (pageUrls.length === 0) {
    pageUrls.push(rootUrl);
  }

  const tasks = Array.from(new Set(pageUrls)).map((url, index) =>
    limit(async () => {
      const html = await ctx.proxiedFetcher(url);
      const $$ = cheerio.load(html);

      const pageImages: string[] = [];

      $$("td img#comicpic").each((_, img) => {
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

export const taaddScraper: Source = {
  id: "taadd",
  name: "Taadd",
  url: baseUrl,
  rank: 42,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
