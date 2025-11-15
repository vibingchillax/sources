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

const baseUrl = "https://www.zazamanga.com/";

type SearchResponse = {
  comic_id: number;
  source: string | null;
  name: string;
  author: string | null;
  artist: string | null;
  status: string;
  kind: string;
  detail: string;
  imageUrl: string;
}[];

type ChapterResponse = {
  chapters: {
    chapterId: string;
    name: string;
    url: string;
  }[];
};

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const response: SearchResponse = await ctx.proxiedFetcher(
    `${baseUrl}manga/searching`,
    {
      query: {
        s: ctx.titleInput,
      },
    },
  );

  if (!response) throw new Error(`[ZazaManga] error while connecting to api`);

  for (const item of response) {
    manga.push({
      id: String(item.comic_id),
      title: item.name,
      description: item.detail,
      author: item.author?.split(","),
      artist: item.artist?.split(","),
      tags: item.kind.split(","),
      coverUrl: item.imageUrl,
      url: `${baseUrl}Comic/Services/ComicService.asmx/ProcessChapterList?comicId=${item.comic_id}`,
      sourceId: "zazamanga",
    });
  }
  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const response: ChapterResponse = await ctx.proxiedFetcher(ctx.manga.url);

  const chapters: Chapter[] = [];

  // $('.wp-manga-chapter').each((i, el) => {
  //     const $el = $(el);
  //     const $a = $el.find('a');
  //     const url = $a.attr('href') || '';
  //     const titleText = $a.text().trim();

  //     const date = $el.find('.chapter-release-date i').text().trim();

  //     const match = titleText.match(/chapter\s*([\d.]+)/i);
  //     const chapterNumber = match ? match[1] : undefined;

  //     if (!url || chapterNumber === undefined) return;

  //     chapters.push({
  //         id: String(i),
  //         sourceId: 'coffeemanga',
  //         chapterNumber,
  //         url,
  //         date
  //     });
  // });

  for (const ch of response.chapters) {
    const match = ch.url.match(/chapter-(\d+)/);

    const chapter = match ? match[1] : null;

    chapters.push({
      id: ch.chapterId,
      title: ch.name,
      chapterNumber: chapter,
      sourceId: "zazamanga",
      url: `${baseUrl}manga${ch.url}`,
    });
  }

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

export const zazaMangaScraper: Source = {
  id: "zazamanga",
  name: "ZazaManga",
  url: baseUrl,
  rank: 34,
  flags: [flags.NEEDS_REFERER_HEADER],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
