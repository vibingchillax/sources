import type {
  Source,
  SourceChaptersOutput,
  SourceMangaOutput,
  SourcePagesOutput,
} from "./base";
import type {
  ChapterContext,
  MangaContext,
  SearchContext,
} from "@/utils/context";
import type { Chapter, Manga, Page } from "@/utils/types";
import * as cheerio from "cheerio";
import { NotFoundError } from "@/utils/errors";

const baseUrl = "https://mangamob.com";

type ApiResponse = {
  status: boolean;
  html: string;
};

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];
  const response: ApiResponse = await ctx.proxiedFetcher(
    baseUrl + "/ajax/manga/search/suggest",
    {
      query: {
        keyword: ctx.titleInput,
      },
    },
  );
  if (!response.status)
    throw new Error("[MangaMob] error while searching manga");
  const $ = cheerio.load(response.html);
  const items = $("a.nav-item");
  items.each((i, el) => {
    if (i === items.length - 1) return;
    const href = $(el).attr("href");
    if (!href) return;
    const img = $(el).find("img.manga-poster-img").attr("src");
    const title = $(el).find("h3.manga-name").text().trim();

    manga.push({
      sourceId: "mangamob",
      title: title,
      coverUrl: img,
      url: baseUrl + href,
    });
  });
  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const chapters: Chapter[] = [];
  const response = await ctx.proxiedFetcher(ctx.manga.url);
  const $ = cheerio.load(response);

  const mangaId = $("a.rl-item[data-manga-id]").attr("data-manga-id");

  if (!mangaId)
    throw new Error("[MangaMob] Can't find mangaId for chapters list");
  const chaptersResponse = await ctx.proxiedFetcher(
    baseUrl + `/get/chapters/?manga_id=${mangaId}`,
  );

  for (const ch of chaptersResponse.chapters) {
    chapters.push({
      id: ch.id,
      sourceId: "mangamob",
      url: baseUrl + `/chapter/en/${ch.chapter_slug}`,
    });
  }

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const pages: Page[] = [];
  const response = await ctx.proxiedFetcher(ctx.chapter.url);
  const $ = cheerio.load(response);

  const images = $("#chapter-images img.lazy");

  if (!images.length) {
    throw new NotFoundError("[MangaMob] No images found for chapter");
  }

  images.each((i, el) => {
    const url = $(el).attr("data-src");

    if (url) {
      pages.push({
        id: i,
        url,
      });
    }
  });

  return pages;
}

export const mangaMobScraper: Source = {
  id: "mangamob",
  name: "MangaMob",
  url: baseUrl,
  rank: 46,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
