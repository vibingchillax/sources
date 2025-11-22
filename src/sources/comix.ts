import type { UseableFetcher } from "@/fetchers/types";
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

const baseUrl = "https://comix.to";

type ComixManga = {
  manga_id: number;
  hash_id: string;
  title: string;
  alt_titles: string[];
  synopsis: string;
  slug: string;
  poster: {
    small: string;
    medium: string;
    large: string;
  };
  original_language: string;
  status: string;
  year: number;
};

type ComixChapter = {
  chapter_id: number;
  number: number;
  name: string;
  language: string;
  volume: number;
  created_at: number;
  updated_at: number;
  scanlation_group: {
    name: string;
  } | null;
};

type Response<T> = {
  status: number;
  result: {
    items: T[];
    pagination: {
      count: number;
      total: number;
    };
  };
};

async function paginatedFetch<T>(
  fetcher: UseableFetcher,
  url: string,
  query: Record<string, any>,
  extractItems: (json: any) => T[],
): Promise<T[]> {
  let page = 1;
  const all: T[] = [];

  while (true) {
    const json = await fetcher(url, {
      query: { ...query, page: String(page) },
    });

    const items = extractItems(json) ?? [];
    all.push(...items);

    const total = json.result?.pagination?.total ?? 0;
    const soFar = all.length;

    if (soFar >= total || items.length === 0) break;

    page++;
  }

  return all;
}

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const response: Response<ComixManga> = await ctx.proxiedFetcher(
    baseUrl + "/api/v2/manga",
    {
      query: {
        keyword: ctx.titleInput,
        "order[relevance]": "desc",
        limit: "100",
      },
    },
  );

  const mangas: Manga[] = response.result.items.map((m) => ({
    id: String(m.manga_id),
    sourceId: "comix",
    title: m.title,
    altTitles: m.alt_titles?.map((t) => ({ "??": t })) ?? [],
    description: m.synopsis,
    year: m.year,
    originalLanguage: m.original_language,
    coverUrl: m.poster?.large ?? m.poster?.medium ?? m.poster?.small ?? null,
    url: `${baseUrl}/api/v2/manga/${m.hash_id}/chapters`,
  }));

  return mangas;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const chaptersRaw = await paginatedFetch<ComixChapter>(
    ctx.proxiedFetcher,
    ctx.manga.url,
    {
      "order[number]": "desc",
      "order[volume]": "desc",
      limit: 100,
    },
    (json) => json.result?.items || [],
  );

  const chapters: Chapter[] = chaptersRaw.map((ch) => ({
    id: String(ch.chapter_id),
    sourceId: "comix",
    volume: String(ch.volume),
    chapterNumber: String(ch.number),
    title: ch.name,
    url: `${baseUrl}/api/v2/chapters/${ch.chapter_id}`,
    date: String(ch.updated_at),
    scanlationGroup: ch.scanlation_group?.name,
  }));

  return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const data = await ctx.proxiedFetcher(ctx.chapter.url);
  const images = data.result?.images || [];

  const pages: Page[] = images.map((src: string, i: number) => ({
    id: i,
    url: src,
  }));

  return pages;
}

export const comixScraper: Source = {
  id: "comix",
  name: "Comix.to",
  url: baseUrl,
  rank: 47,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
