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
import { flags } from "@/entrypoint/targets";

const baseUrl = "https://todaymanga.com";

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const response = await ctx.proxiedFetcher(
    `${baseUrl}/search?q=${encodeURIComponent(ctx.titleInput)}`,
  );
  const $ = cheerio.load(response);

  $("ul.series > li.flex-item").each((_, el) => {
    const $el = $(el);

    const titleEl = $el.find(".series-caption .title a");
    const title = titleEl.text().trim();
    const url = titleEl.attr("href");
    if (!title || !url) return;

    const coverUrl = $el.find("picture img").attr("src")?.trim();

    const date = $el.find(".list-stats li.text-muted span").text().trim();
    // const views = $el.find("picture .label-view-count span").text().trim();

    manga.push({
      title,
      url: url.startsWith("http")
        ? url + "/chapter-list"
        : baseUrl + url + "/chapter-list",
      coverUrl,
      sourceId: "todaymanga",
      year: date ? parseInt(date.split("-")[0]) : undefined,
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

  $("ul.chapters-list > li").each((_, el) => {
    const $el = $(el);

    const $link = $el.find("h5.headline a");
    const titleText = $link.text().trim();
    const url = $link.attr("href");
    if (!url) return;

    const $date = $el.find("p.subtitle span.text-muted");
    const date = $date.text().trim();

    const match = titleText.match(/Chapter\s+(\d+(\.\d+)?)/i);
    const chapterNumber = match ? match[1] : undefined;

    const parts = url.split("/").filter(Boolean);
    const chapterId = parts[parts.length - 1];

    chapters.push({
      id: chapterId,
      sourceId: "todaymanga",
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

  $("div.chapter-content img").each((index, el) => {
    const $el = $(el);

    let src = $el.attr("data-src") || $el.attr("src");
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

export const todayMangaScraper: Source = {
  id: "todaymanga",
  name: "TodayManga",
  url: baseUrl,
  rank: 43,
  flags: [flags.NEEDS_REFERER_HEADER],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
