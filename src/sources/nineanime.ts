import * as cheerio from 'cheerio';
import type { Chapter, Manga, Page } from '@/utils/types';
import type { MangaContext, ChapterContext, SearchContext } from '@/utils/context';
import type { SourceChaptersOutput, SourceMangaOutput, SourcePagesOutput } from './base';
import type { Source } from '@/sources/base';
import { flags } from '@/entrypoint/targets';
import pLimit from 'p-limit';

const baseUrl = "https://www.nineanime.com";

const limit = pLimit(10);

type SearchResponse = {
  id: string
  name: string
  alternative?: string | null //split ;
  lang_code?: string | null
  publish_year?: string | null
  author: string | null
  artist: string | null
  intro?: string | null
  tag?: any | null
  cover: string
  url: string
  category_list: string[]

}

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];

  const response: SearchResponse[] = await ctx.proxiedFetcher(`${baseUrl}/ajax/search`, {
    method: "GET",
    // headers: {
    //     "X-Origin": baseUrl,
    //     "X-Referer": baseUrl + '/'
    // }
    query: {
      term: ctx.titleInput
    }
  })

  if (!response.length) throw new Error(`[NineAnime] error while connecting to api`);

  for (const item of response) {
    manga.push({
      id: item.id,
      title: item.name,
      altTitles: item.alternative ?
        [Object.fromEntries(item.alternative.split(';')
          .map(t => t.trim()).map((t, i) => [String(i), t]))] : undefined,
      originalLanguage: item.lang_code ?? undefined,
      year: parseInt(item.publish_year ?? '0') || undefined,
      author: [item.author ?? ''].filter(Boolean),
      artist: [item.artist ?? ''].filter(Boolean),
      description: item.intro ?? undefined,
      coverUrl: item.cover,
      tags: item.category_list,
      url: baseUrl + item.url,
      sourceId: 'nineanime',
    })
  }
  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
  const response = await ctx.proxiedFetcher(ctx.manga.url);
  const $ = cheerio.load(response);
  console.log(response)

  const chapters = getChapters($);
  return chapters;
}

function getChapters($: cheerio.CheerioAPI): Chapter[] {
  const chapterItems = $('ul.detail-chlist > li').toArray();

  return chapterItems.map(li => {
    const $li = $(li);
    const $a = $li.find('a');
    const url = $a.attr('href') || '';
    const titleText = $a.attr('title')?.trim() || $a.text().trim();

    // Try to extract chapter number from title
    const match = titleText.match(/Ch(?:apter)?\.?\s*(\d+(\.\d+)?)/i);
    const chapterNumber = match ? match[1] : undefined;

    const date = $li.find('span.time').text().trim();
    // const isNew = $li.find('span.new').length > 0;

    if (!url) return null;

    const parts = url.split('/').filter(Boolean);
    const chapterIdStr = parts[parts.length - 1];
    const chapterId = chapterIdStr.replace(/[^\d]/g, '');

    return {
      id: chapterId,
      sourceId: 'nineanime',
      chapterNumber,
      url: baseUrl + url, // ensure full URL
      date,
    } satisfies Chapter;
  }).filter(Boolean) as Chapter[];
}


async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const rootUrl = ctx.chapter.url;
  const pages: Page[] = [];
  const visited = new Set<string>();

  const response = await ctx.proxiedFetcher(rootUrl);
  const $ = cheerio.load(response);

  const pageUrls: string[] = [];

  $('select.sl-page option').each((_, el) => {
    const rel = $(el).attr('value');
    if (!rel) return;

    const abs = rel.startsWith('http') ? rel : baseUrl + rel;
    pageUrls.push(abs);
  });

  if (pageUrls.length === 0) {
    pageUrls.push(rootUrl);
  }

  await Promise.all(pageUrls.map(url => limit(async () =>{
    if (visited.has(url)) return;
    visited.add(url);

    const html = await ctx.proxiedFetcher(url);
    const $$ = cheerio.load(html);

    $$('#viewer .pic_box img.manga_pic').each((_, img) => {
      let src = $$(img).attr('src')?.trim();
      if (!src) return;
      if (src.startsWith('//')) src = 'https:' + src;
      if (src.startsWith('data:image')) return;

      pages.push({
        id: pages.length,
        url: src
      });
    });
  })));

  return pages;
}


export const nineAnimeScraper: Source = {
  id: 'nineanime',
  name: 'NineAnime',
  url: baseUrl,
  rank: 39,
  flags: [flags.NEEDS_REFERER_HEADER],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages
};
