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

const baseUrl = "https://mangakakalot.to";

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const url =
    `${baseUrl}/ajax/manga/search-suggest?keyword=` +
    encodeURIComponent(ctx.titleInput);

  const response = await ctx.proxiedFetcher(url);
  const $ = cheerio.load(response);

  $("a.ss-item").each((_, el) => {
    const $el = $(el);

    const title = $el.find(".manga-name").text().trim();
    const href = $el.attr("href");
    if (!title || !href) return;
    const parts = href.split("-");
    const mangaId = parts[parts.length - 1];
    const coverUrl = $el.find(".manga-poster-img").attr("src")?.trim();

    manga.push({
      id: mangaId,
      title,
      url: href.startsWith("http") ? href : baseUrl + href,
      coverUrl,
      sourceId: "mangakakalot",
    });
  });

  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  // manga URL looks like: https://mangakakalot.to/dragon-ball-163
  // id = last segment after last dash

  const url = `${baseUrl}/ajax/manga/list-chapter-volume?id=${ctx.manga.id}`;
  const response = await ctx.proxiedFetcher(url);
  const $ = cheerio.load(response);

  const chapters: Chapter[] = [];

  $("#list-chapter-en .item").each((_, el) => {
    const titleEl = $(el).find(".chapter-name");
    const href = titleEl.attr("href");
    if (!href) return;

    const title = titleEl.text().trim();
    const date = $(el).find(".item-time").text().trim();

    const match = title.match(/Chapter\s+(\d+(\.\d+)?)/i);
    const chapterNumber = match ? match[1] : undefined;

    const parts = href.split("/").filter(Boolean);
    const chapterId = parts[parts.length - 1];

    chapters.push({
      id: chapterId,
      sourceId: "mangakakalot",
      title,
      chapterNumber,
      url: href.startsWith("http") ? href : baseUrl + href,
      date,
    });
  });

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const pages: Page[] = [];

  const pageHtml = await ctx.proxiedFetcher(ctx.chapter.url);
  const $page = cheerio.load(pageHtml);

  let readingId = $page("#reading").attr("data-reading-id");

  if (!readingId) {
    throw new Error("[MangaKakalot] Failed to get chapter ID");
  }

  const imagesUrl = `${baseUrl}/ajax/manga/images?id=${encodeURIComponent(
    readingId,
  )}&type=chap`;

  const response = await ctx.proxiedFetcher(imagesUrl);
  const $ = cheerio.load(response);

  $(".card-wrap").each((index, el) => {
    const src = $(el).attr("data-url");
    if (!src) return;

    pages.push({
      id: index,
      url: src,
    });
  });

  return pages;
}

export const mangakakalotScraper: Source = {
  id: "mangakakalot",
  name: "Mangakakalot.to",
  url: baseUrl,
  rank: 45,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
