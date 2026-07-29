import {
  themeSchema,
  usernameSchema,
  localeSchema,
  hideSchema,
} from "@/schema/common.schema";
import { CACHE_TTL } from "@/utils/cache";
import { z } from "zod";

export const OverviewSchema = {
  params: z.object({ username: usernameSchema.optional() }),
  query: z.object({
    hide_stars: hideSchema,
    hide_commits: hideSchema,
    hide_issues: hideSchema,
    hide_pull_requests: hideSchema,
    hide_contributions: hideSchema,
    hide_reviews: hideSchema,
    hide_discussions_started: hideSchema,
    hide_discussions_answered: hideSchema,
    hide_merged_pull_requests: hideSchema,
    hide_merged_pull_request_percentages: hideSchema,
    theme: themeSchema,
    locale: localeSchema,
    cache_ttl: z
      .number()
      .min(CACHE_TTL.OVERVIEW.MIN)
      .max(CACHE_TTL.OVERVIEW.MAX)
      .default(CACHE_TTL.OVERVIEW.DEFAULT),
  }),
};


export type OverviewParams = z.infer<(typeof OverviewSchema)["params"]>;

export type OverviewQuery = z.infer<(typeof OverviewSchema)["query"]>;