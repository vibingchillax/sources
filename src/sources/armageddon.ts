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

const baseUrl = "https://www.silentquill.net";

type Response = {
  series: {
    all: {
      ID: number;
      post_image: string;
      post_title: string;
      post_genres: string;
      post_status: string;
      post_link: string;
    }[];
  }[];
};

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];
  const body = new URLSearchParams();
  body.append("action", "ts_ac_do_search");
  body.append("ts_ac_query", ctx.titleInput);

  const response: Response = await ctx
    .proxiedFetcher(`${baseUrl}/wp-admin/admin-ajax.php`, {
      body: body.toString(),
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        //     "X-Origin": baseUrl,
        //     "X-Referer": `${baseUrl}/?s=${encodeURIComponent(ctx.titleInput).replace(/%20/g, '+')}&post_type=wp-manga`
      }
    })
    .then((r) => JSON.parse(r));

  if (!response.series[0].all.length)
    throw new Error(`[Armageddon] error while connecting to api`);

  const data = response.series[0].all;

  for (const item of data) {
    manga.push({
      id: String(item.ID),
      coverUrl: item.post_image,
      title: item.post_title,
      tags: item.post_genres.split(", "),
      //   status: item.post_status,
      url: item.post_link,
      sourceId: "armageddon",
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
  const chapterItems = $("#chapterlist li").toArray();

  return chapterItems
    .map((li, index) => {
      const $li = $(li);
      const $a = $li.find("a");
      const url = $a.attr("href")?.trim() ?? "";

      const chapterNumAttr = $li.attr("data-num");
      const chapterNumText = $li.find(".chapternum").text().trim();
      const chapterNumber =
        chapterNumAttr ||
        (chapterNumText.match(/chapter\s*(\d+(\.\d+)?)/i)?.[1] ?? "");

      const date = $li.find(".chapterdate").text().trim() || undefined;

      if (!url || !chapterNumber) return null;

      const parts = url.split("/").filter(Boolean);
      const chapterIdStr = parts[parts.length - 1];
      const chapterId = chapterIdStr.replace(/[^\d.]/g, "") || String(index);

      return {
        id: chapterId,
        sourceId: "armageddon",
        chapterNumber,
        title: `Chapter ${chapterNumber}`,
        url,
        date,
      } satisfies Chapter;
    })
    .filter(Boolean) as Chapter[];
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const response = await ctx.proxiedFetcher(ctx.chapter.url);
  const $ = cheerio.load(response);
  const pages: Page[] = [];

  const noscriptHtml = $("#readerarea noscript").html();
  if (!noscriptHtml) return pages;

  const $$ = cheerio.load(noscriptHtml);

  $$("img").each((i, el) => {
    const $img = $$(el);
    let src = $img.attr("data-src")?.trim() || $img.attr("src")?.trim();
    if (!src || src.startsWith("data:image/")) return;

    if (src.startsWith("//")) src = "https:" + src;

    pages.push({ id: i, url: src });
  });

  return pages;
}

export const armageddonScraper: Source = {
  id: "armageddon",
  name: "Armageddon (silentquill)",
  url: baseUrl,
  rank: 35,
  flags: [flags.NEEDS_REFERER_HEADER],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages,
};
