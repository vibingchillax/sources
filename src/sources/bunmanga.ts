import * as cheerio from 'cheerio';
import type { Chapter, Manga, Page } from '@/utils/types';
import type { MangaContext, ChapterContext, SearchContext } from '@/utils/context';
import type { SourceChaptersOutput, SourceMangaOutput, SourcePagesOutput } from './base';
import type { Source } from '@/sources/base';
import type { WPSearchResponse } from '@/utils/wordpress';

const baseUrl = "https://bunmanga.com";

async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
  const manga: Manga[] = [];
  const formData = new FormData();
  formData.append('action', 'wp-manga-search-manga');
  formData.append('title', ctx.titleInput);

  const response: WPSearchResponse = await ctx.proxiedFetcher(`${baseUrl}/wp-admin/admin-ajax.php`, {
    body: formData,
    method: "POST",
    headers: {
        "X-Origin": baseUrl,
        "X-Referer": baseUrl + '/'
    }
  })
  if (!response.success) throw new Error(`[ManhuaHot] error while connecting to api`);

  for (const item of response.data) {
    manga.push({
      title: item.title,
      url: item.url,
      sourceId: 'bunmanga',
    })
  }
  return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
    const response = await ctx.proxiedFetcher(ctx.manga.url + 'ajax/chapters', {
        method: "POST"
    });
    const $ = cheerio.load(response);

    const chapters = getChapters($);
    return chapters;
}

function getChapters($: cheerio.CheerioAPI): Chapter[] {
    // Select all chapter <li> items in the chapter list
    const chapterItems = $('.wp-manga-chapter').toArray();

    console.log(chapterItems)

    return chapterItems.map((li) => {
        const $li = $(li);
        const $a = $li.find('a');
        const url = $a.attr('href') || '';

        const titleText = $a.text().trim();

        const match = titleText.match(/chap(?:ter)?\s*(\d+(\.\d+)?)/i);
        const chapterNumber = match ? match[1] : undefined;

        const date = $li.find('.chapter-release-date i').text().trim();

        if (!url) return null;

        const parts = url.split('/').filter(Boolean);
        const chapterIdStr = parts[parts.length - 1];
        const chapterId = chapterIdStr.replace(/[^\d]/g, '');

        return {
            id: chapterId,
            sourceId: 'bunmanga',
            chapterNumber,
            url,
            date
        } satisfies Chapter;
    }).filter(Boolean) as Chapter[];
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
  const response = await ctx.proxiedFetcher(ctx.chapter.url);
  const $ = cheerio.load(response);
  const pages: Page[] = [];

  $('div.page-break img.wp-manga-chapter-img').each((i, el) => {
    const $img = $(el);

    let src =
      $img.attr('data-src')?.trim() ||
      $img.attr('src')?.trim();

    if (!src || src.startsWith('data:image/')) return;

    if (src.startsWith('//')) src = 'https:' + src;

    pages.push({ id: i, url: src });
  });


  return pages;
}

export const bunMangaScraper: Source = {
  id: 'bunmanga',
  name: 'BunManga',
  url: baseUrl,
  rank: 36,
  flags: [],
  scrapeManga: fetchManga,
  scrapeChapters: fetchChapters,
  scrapePages: fetchPages
};
