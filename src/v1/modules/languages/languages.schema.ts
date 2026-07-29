import {
  themeSchema,
  usernameSchema,
  localeSchema,
} from "@/schema/common.schema";
import { CACHE_TTL } from "@/utils/cache";
import { z } from "zod";

export const LanguageSchema = {
  params: z.object({ username: usernameSchema.optional() }),
  query: z.object({
    theme: themeSchema,
    locale: localeSchema,
    layout: z
      .enum(["normal", "compact", "donut", "donut-vertical", "pie"])
      .default("normal"),
    stats_format: z.enum(["bytes", "percentages"]).default("percentages"),
    cache_ttl: z
      .number()
      .min(CACHE_TTL.LANGUAGE.MIN)
      .max(CACHE_TTL.LANGUAGE.MAX)
      .default(CACHE_TTL.LANGUAGE.DEFAULT),
  }),
};

export type LanguageParams = z.infer<(typeof LanguageSchema)["params"]>;

export type LanguageQuery = z.infer<(typeof LanguageSchema)["query"]>;