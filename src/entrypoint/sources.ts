import type { Fetcher } from "@/fetchers/types";
import {
  flagsAllowedInFeatures,
  getTargetFeatures,
  type FeatureMap,
  type Targets,
} from "@/entrypoint/targets";
import { gatherAllSources } from "@/sources/all";
import type {
  Source,
  SourceChaptersOutput,
  SourceMangaOutput,
  SourcePagesOutput,
} from "@/sources/base";
import { hasDuplicates } from "@/utils/predicates";
import type { Chapter, Manga } from "@/utils/types";
import { makeFetcher } from "@/fetchers/common";
import {
  runAllSourcesForManga,
  runSourceForChapters,
  runSourceForManga,
  runSourceForPages,
} from "@/runner/runner";

export interface SourceMakerInput {
  fetcher: Fetcher;
  proxiedFetcher?: Fetcher;
  target: Targets;
}

export interface MangaRunAllRunnerOptions {
  titleInput: string;
}

export interface MangaRunnerOptions {
  sourceId: string;
  titleInput: string;
}

export interface ChapterRunnerOptions {
  manga: Manga;
}

export interface PageRunnerOptions {
  chapter: Chapter;
}

export interface SourceControls {
  // fetch lists of manga from all sources
  runAllForManga(
    runnerOps: MangaRunAllRunnerOptions,
  ): Promise<Record<string, SourceMangaOutput>>;
  // fetch a list of manga from a specific source
  runSourceForManga(runnerOps: MangaRunnerOptions): Promise<SourceMangaOutput>;
  // fetch chapters of a manga (source origin included)
  runSourceForChapters(
    runnerOps: ChapterRunnerOptions,
  ): Promise<SourceChaptersOutput>;
  // fetch pages of a chapter (source origin included)
  runSourceForPages(runnerOps: PageRunnerOptions): Promise<SourcePagesOutput>;

  listSources(): Source[];
}

export function getSources(features: FeatureMap, list: Source[]): Source[] {
  const sources = list.filter((v) => !v?.disabled);
  const anyDuplicateId = hasDuplicates(sources.map((v) => v.id));
  const anyDuplicateRank = hasDuplicates(sources.map((v) => v.rank));

  if (anyDuplicateId) throw new Error("Duplicate id found in sources");
  if (anyDuplicateRank) throw new Error("Duplicate rank found in sources");
  return sources.filter((s) => flagsAllowedInFeatures(features, s.flags));
}

export function makeSources(ops: SourceMakerInput): SourceControls {
  const features = getTargetFeatures(ops.target);
  const sources = [...gatherAllSources()];
  const list = getSources(features, sources);
  const fetcherOps = {
    fetcher: makeFetcher(ops.fetcher),
    proxiedFetcher: makeFetcher(ops.proxiedFetcher ?? ops.fetcher),
    features: features,
  };
  return {
    runAllForManga(runnerOps) {
      return runAllSourcesForManga(list, {
        ...fetcherOps,
        ...runnerOps,
      });
    },

    runSourceForManga(runnerOps) {
      return runSourceForManga(list, {
        ...fetcherOps,
        ...runnerOps,
      });
    },

    runSourceForChapters(runnerOps) {
      return runSourceForChapters(list, {
        ...fetcherOps,
        ...runnerOps,
      });
    },

    runSourceForPages(runnerOps) {
      return runSourceForPages(list, {
        ...fetcherOps,
        ...runnerOps,
      });
    },
    listSources() {
      return list;
    },
  };
}
