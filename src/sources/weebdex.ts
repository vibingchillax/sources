import type { Chapter, Manga, Page } from '@/utils/types';
import type { MangaContext, ChapterContext, SearchContext } from '@/utils/context';
import type { SourceChaptersOutput, SourceMangaOutput, SourcePagesOutput } from './base';
import type { Source } from '@/sources/base';
import { NotFoundError } from '@/utils/errors';

const baseUrl = 'https://api.weebdex.org';

type WManga = {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    year: number;
    language: string;
    demographic: "shounen" | "shoujo" | "josei" | "seinen" | undefined;
    status: "completed" | "ongoing" | "cancelled" | "hiatus" | undefined;
    content_rating: "safe" | "suggestive" | "erotica" | "pornographic" | undefined;
    last_chapter: string | null;

    relationships: {
        available_languages: string[];

        cover: {
            id: string;
            ext: string;         // ".jpg"
            dimensions: [number, number]; // [width, height]
        };

        tags: Array<{
            id: string;
            group: "genre" | "theme" | "format" | "content" | string;
            name: string;
        }>;
    };
}

type MangaResponse = {
    limit: number
    page: number
    total: number
    data: WManga[]
}

type ChapterResponse = {
    total: number,
    limit: number,
    page: number,
    data: Array<{
        id: string,
        created_at: string,
        updated_at: string,
        published_at: string,
        state: string,
        title: string,
        volume: string,
        chapter: string,
        language: string,
        relationships: {
            uploader: { id: string, name: string },
            groups: Array<{ id: string, name: string }>,
            stats: { replies: number, up: number },
            thread: { id: string }
        }
    }>
}

type ChapterPagesResponse = {
    id: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    state: string;
    chapter: string;
    language: string;

    node: string; // e.g. "https://s05.notdelta.xyz"

    data: Array<{
        name: string;
        dimensions: [number, number]; // [width, height]
    }>;

    // webp optimized images
    data_optimized: Array<{
        name: string;
        dimensions: [number, number];
    }>;

    relationships: {
        uploader: {
            id: string;
            name: string;
        };
        groups: Array<{
            id: string;
            name: string;
        }>;
        manga: {
            id: string;
            created_at: string;
            updated_at: string;
            title: string;
            year: number;
            language: string;
            demographic: string;
            status: string;
            content_rating: string;
            last_chapter: string;

            relationships: {
                cover: {
                    id: string;
                    ext: string;
                    dimensions: [number, number];
                };
                tags: Array<{
                    id: string;
                    group: string;
                    name: string;
                }>;
            };
        };
        stats: {
            replies: number;
            up: number;
        };
        thread: {
            id: string;
        };
    };
};


async function fetchManga(ctx: SearchContext): Promise<SourceMangaOutput> {
    const searchUrl = `${baseUrl}/manga`
    const response: MangaResponse = await ctx.proxiedFetcher(searchUrl, {
        headers: {
            "Origin": "https://weebdex.org",
            "Referer": "https://weebdex.org/"
        },
        query: {
            hasChapters: "1",
            title: ctx.titleInput
        }
    })

    const manga: Manga[] = [];
    for (const m of response.data) {
        manga.push({
            id: m.id,
            sourceId: 'weebdex',
            title: m.title,
            coverUrl: `https://srv.notdelta.xyz/covers/${m.id}/${m.relationships.cover.id}${m.relationships.cover.ext}`,
            publicationDemographic: m.demographic,
            status: m.status,
            year: m.year,
            contentRating: m.content_rating,
            originalLanguage: m.language,
            tags: m.relationships.tags.map(t => t.name),
            url: `${baseUrl}/manga/${m.id}/chapters`
        })
    }

    if (manga.length === 0) throw new NotFoundError('[Mangapill] no manga found');

    return manga;
}

async function fetchChapters(ctx: MangaContext): Promise<SourceChaptersOutput> {
    const chapters: Chapter[] = [];
    let page = 1;

    while (true) {
        const response: ChapterResponse = await ctx.proxiedFetcher(ctx.manga.url, {
            headers: {
                "Origin": "https://weebdex.org",
                "Referer": "https://weebdex.org/"
            },
            query: {
                page: page.toString()
            }
        });

        const { data, total, limit } = response;

        if (!Array.isArray(data) || data.length === 0) break;

        for (const ch of data) {
            const rel = ch.relationships ?? {};

            chapters.push({
                id: ch.id,
                sourceId: "weebdex",

                title: ch.title ?? null,
                volume: ch.volume ?? null,
                chapterNumber: ch.chapter ?? null,
                translatedLanguage: ch.language,

                scanlationGroup: rel.groups?.[0]?.name ?? null,
                uploader: rel.uploader?.name ?? null,

                url: `${baseUrl}/chapter/${ch.id}`,
                date: ch.published_at ?? ch.created_at ?? null,
            });
        }

        const totalPages = Math.ceil(total / limit);
        if (page >= totalPages) break;

        page++;
    }

    chapters.sort((a, b) => {
        const na = Number(a.chapterNumber) || 0;
        const nb = Number(b.chapterNumber) || 0;
        return nb - na;
    });

    return chapters;
}

async function fetchPages(ctx: ChapterContext): Promise<SourcePagesOutput> {
    const chapterData: ChapterPagesResponse = await ctx.proxiedFetcher(ctx.chapter.url, {
        headers: {
            "Origin": "https://weebdex.org",
            "Referer": "https://weebdex.org/"
        }
    });

    if (!chapterData || !chapterData.node) {
        throw new NotFoundError(`[WeebDex] Invalid chapter data for ${ctx.chapter.id}`);
    }

    const baseNode = chapterData.node; // example: https://s05.notdelta.xyz
    const rawPages = chapterData.data;

    if (!Array.isArray(rawPages) || rawPages.length === 0) {
        throw new NotFoundError(`[WeebDex] No pages found: ${ctx.chapter.id}`);
    }

    const pages: Page[] = rawPages.map((p, idx) => ({
        id: idx + 1,
        url: `${baseNode}/data/${chapterData.id}/${p.name}`
    }));

    return pages;
}

export const weebDexScraper: Source = {
    id: 'weebdex',
    name: 'WeebDex',
    url: baseUrl,
    rank: 31,
    flags: [],
    scrapeManga: fetchManga,
    scrapeChapters: fetchChapters,
    scrapePages: fetchPages,
};
