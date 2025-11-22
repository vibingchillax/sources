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
import type { WPSearchResponse } from "@/utils/wordpress";

const baseUrl = "https://coffeemanga.ink";

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];
  const body = new URLSearchParams();
  body.append("action", "wp-manga-search-manga");
  body.append("title", ctx.titleInput);

  const response: WPSearchResponse = await ctx.proxiedFetcher(
    `${baseUrl}/wp-admin/admin-ajax.php`,
    {
      body: body.toString(),
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
          // "X-Origin": baseUrl,
          // "X-Referer": `${baseUrl}/?s=${encodeURIComponent(ctx.titleInput).replace(/%20/g, '+')}&post_type=wp-manga`
      }
    },
  );
  if (!response.success)
    throw new Error(`[CoffeeManga] error while connecting to api`);

  for (const item of response.data) {
    manga.push({
      title: item.title,
      url: item.url,
      sourceId: "coffeemanga",
    });
  }
  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const response = await ctx.proxiedFetcher(ctx.manga.url);
  const $ = cheerio.load(response);

  const chapters: Chapter[] = [];

  $(".wp-manga-chapter").each((i, el) => {
    const $el = $(el);
    const $a = $el.find("a");
    const url = $a.attr("href") || "";
    const titleText = $a.text().trim();

    const date = $el.find(".chapter-release-date i").text().trim();

    const match = titleText.match(/chapter\s*([\d.]+)/i);
    const chapterNumber = match ? match[1] : undefined;

    if (!url || chapterNumber === undefined) return;

    chapters.push({
      id: String(i),
      sourceId: "coffeemanga",
      chapterNumber,
      url,
      date,
    });
  });

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const response = await ctx.proxiedFetcher(ctx.chapter.url);
  const $ = cheerio.load(response);
  const pages: Page[] = [];

  $("div.page-break img.wp-manga-chapter-img").each((i, el) => {
    const $img = $(el);

    let src = $img.attr("data-src")?.trim() || $img.attr("src")?.trim();

    if (!src || src.startsWith("data:image/")) return;

    if (src.startsWith("//")) src = "https:" + src;

    pages.push({ id: i, url: src });
  });

  return pages;
}

export const coffeemangaScraper: Source = {
  id: "coffeemanga",
  name: "CoffeeManga",
  url: baseUrl,
  rank: 32,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
