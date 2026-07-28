import {
  themeSchema,
  usernameSchema,
  localeSchema,
} from "@/schema/common.schema";
import { CACHE_TTL } from "@/utils/cache";
import { z } from "zod";

export const OverviewSchema = {
  params: z.object({ username: usernameSchema.optional() }),
  query: z.object({
    theme: themeSchema,
    locale: localeSchema,
    cache_ttl: z
      .number()
      .min(CACHE_TTL.OVERVIEW.MIN)
      .max(CACHE_TTL.OVERVIEW.MAX)
      .default(CACHE_TTL.OVERVIEW.DEFAULT),
  }),
};
