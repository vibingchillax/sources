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

const baseUrl = "https://www.tenmanga.com";

const limit = pLimit(10);

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const response: any[][] = JSON.parse(
    await ctx.proxiedFetcher(`${baseUrl}/search/ajax`, {
      method: "GET",
      query: {
        wd: ctx.titleInput,
      },
      // headers: {
      //   'X-Origin': baseUrl,
      //   'X-Referer': baseUrl,
      // }
    }),
  );

  if (!response.length)
    throw new Error(`[TenManga] error while connecting to api`);

  for (const item of response) {
    manga.push({
      title: item[1],
      coverUrl: item[0],
      url: item[2],
      author: [item[4]],
      sourceId: "tenmanga",
    });
  }
  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const response = await ctx.proxiedFetcher(ctx.manga.url);
  const $ = cheerio.load(response);
  console.log(response);

  const chapters = getChapters($);
  return chapters;
}

function getChapters($: cheerio.CheerioAPI): Chapter[] {
  const chapters: Chapter[] = [];

  $("div.chp-item > a").each((_, el) => {
    const $a = $(el);

    const url = $a.attr("href") || "";
    if (!url) return;

    const title = $a.find(".chp-idx").text().trim();
    const date = $a.find(".chp-time").text().trim();

    const match = title.match(/(\d+(\.\d+)?)/);
    const chapterNumber = match ? match[1] : undefined;

    const parts = url.split("/").filter(Boolean);
    const chapterId = parts[parts.length - 1];

    chapters.push({
      id: chapterId,
      sourceId: "tenmanga",
      chapterNumber,
      url,
      date,
      title,
    });
  });

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const rootUrl = ctx.chapter.url;
  const pages: Page[] = [];
  // const visited = new Set<string>();

  const response = await ctx.proxiedFetcher(rootUrl);
  const $ = cheerio.load(response);

  const pageUrls: string[] = [];

  const selector =
    'div.option-item > div.option-list.chp-selection-list[option_name="page_head"] > div.option-item-trigger.chp-page-trigger.chp-selection-item';

  $(selector).each((_, el) => {
    const val = $(el).attr("option_val");
    if (val) pageUrls.push(val);
  });

  // fallback affiliate sites layout
  // if (pageUrls.length === 0) {
  //     $('select.sl-page option').each((_, el) => {
  //         const rel = $(el).attr('value');
  //         if (rel) pageUrls.push(rel.startsWith('http') ? rel : baseUrl + rel);
  //     });
  // }

  if (pageUrls.length === 0) {
    pageUrls.push(rootUrl);
  }

  const tasks = pageUrls.map((url, index) =>
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

  results
    .sort((a, b) => a.index - b.index)
    .forEach(({ pageImages }) => {
      for (const src of pageImages) {
        pages.push({
          id: pages.length,
          url: src,
        });
      }
    });

  return pages;
}

export const tenMangaScraper: Source = {
  id: "tenmanga",
  name: "TenManga",
  url: baseUrl,
  rank: 41,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
