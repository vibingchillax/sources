import type { FeatureMap } from "@/entrypoint/targets";
import type { UseableFetcher } from "@/fetchers/types";
import type { Source, SourceChaptersOutput, SourceMangaOutput, SourcePagesOutput } from "@/sources/base";
import type { ScrapeContext } from "@/utils/context";
import type { Chapter, Manga } from "@/utils/types";

export type RunAllForMangaOptions = {
    fetcher: UseableFetcher;
    proxiedFetcher: UseableFetcher;
    features: FeatureMap;
    titleInput: string;
}

export type RunForMangaOptions = {
    fetcher: UseableFetcher;
    proxiedFetcher: UseableFetcher;
    features: FeatureMap;
    titleInput: string;
    sourceId: string;
}

export type RunForChaptersOptions = {
    fetcher: UseableFetcher;
    proxiedFetcher: UseableFetcher;
    manga: Manga;
}

export type RunForPagesOptions = {
    fetcher: UseableFetcher;
    proxiedFetcher: UseableFetcher;
    chapter: Chapter;
}

export async function runAllSourcesForManga(sources: Source[], ops: RunAllForMangaOptions):
    Promise<Record<string, SourceMangaOutput>> {
    const results: Record<string, SourceMangaOutput> = {};
    const contextBase: ScrapeContext = {
        fetcher: ops.fetcher,
        proxiedFetcher: ops.proxiedFetcher
    }
    for (const src of sources) {
        try {
            results[src.id] = await src.scrapeManga({
                ...contextBase,
                titleInput: ops.titleInput
            });
        } catch (err) {
            console.warn(`Error scraping manga from ${src.id}:`, err);
        }
    }
    return results;
}

export async function runSourceForManga(sources: Source[], ops: RunForMangaOptions):
    Promise<SourceMangaOutput> {
    const contextBase: ScrapeContext = {
        fetcher: ops.fetcher,
        proxiedFetcher: ops.proxiedFetcher
    }
    const source = sources.find(s => s.id === ops.sourceId);
    if (!source) {
        throw new Error(`Source with id ${ops.sourceId} not found`);
    }
    try {
        const manga = await source.scrapeManga({
            ...contextBase,
            titleInput: ops.titleInput
        })
        return manga
    } catch (error) {
        throw error;
    }

}

export async function runSourceForChapters(sources: Source[], ops: RunForChaptersOptions):
    Promise<SourceChaptersOutput> {
    const contextBase: ScrapeContext = {
        fetcher: ops.fetcher,
        proxiedFetcher: ops.proxiedFetcher
    }

    const source = sources.find(s => s.id === ops.manga.sourceId);
    if (!source) {
        throw new Error(`Source with id ${ops.manga.sourceId} not found`);
    }
    try {
        const chapters = await source.scrapeChapters({
            ...contextBase,
            manga: ops.manga
        });
        return chapters;
    } catch (error) {
        throw error;
    }
}

export async function runSourceForPages(sources: Source[], ops: RunForPagesOptions):
    Promise<SourcePagesOutput> {
    const contextBase: ScrapeContext = {
        fetcher: ops.fetcher,
        proxiedFetcher: ops.proxiedFetcher
    }
    const src = sources.find(s => s.id === ops.chapter.sourceId);
    if (!src) {
        throw new Error(`Source ${ops.chapter.sourceId} not found.`);
    }
    return src.scrapePages({
        ...contextBase,
        chapter: ops.chapter,
    });
}