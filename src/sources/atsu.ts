import { flags } from "@/entrypoint/targets";
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

const baseUrl = "https://atsu.moe";

type SearchResponse = {
  hits: {
    id: string;
    title: string;
    image: string;
  }[];
};

type ChaptersResponse = {
  mangaPage: {
    chapters: {
      id: string;
      number: number;
      title: string;
      index: number;
      createdAt: string;
    }[];
  };
};

type PagesResponse = {
  readChapter: {
    pages: {
      id: string;
      image: string;
      number: number;
    }[];
  };
};

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const url = baseUrl + "/api/search/page?query=" + ctx.titleInput;
  const response: SearchResponse = await ctx.proxiedFetcher(url);
  const mangaList: Manga[] = [];
  for (const manga of response.hits) {
    mangaList.push({
      id: manga.id,
      sourceId: "atsumoe",
      title: manga.title,
      coverUrl: baseUrl + manga.image,
      url: manga.id,
    });
  }
  return mangaList;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const response: ChaptersResponse = await ctx.proxiedFetcher(
    baseUrl + "/api/manga/page?id=" + ctx.manga.url,
  );
  const chapters: Chapter[] = [];
  for (const chapter of response.mangaPage.chapters) {
    chapters.push({
      id: chapter.id,
      sourceId: "atsumoe",
      title: chapter.title,
      chapterNumber: String(chapter.number),
      url:
        baseUrl +
        `/api/read/chapter?mangaId=${ctx.manga.url}&chapterId=${chapter.id}`,
      date: chapter.createdAt,
    });
  }
  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const pages: Page[] = [];
  const response: PagesResponse = await ctx.proxiedFetcher(ctx.chapter.url);
  for (const page of response.readChapter.pages) {
    pages.push({
      id: page.number,
      url: baseUrl + page.image,
    });
  }
  return pages;
}

export const atsuMoeScraper: Source = {
  id: "atsumoe",
  name: "Atsumaru",
  url: baseUrl,
  rank: 26,
  flags: [flags.NEEDS_REFERER_HEADER],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
