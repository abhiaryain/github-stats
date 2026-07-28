import {
  themeSchema,
  usernameSchema,
  localeSchema,
} from "@/schema/common.schema";
import { CACHE_TTL } from "@/utils/cache";
import { z } from "zod";

export const WakatimeSchema = {
  params: z.object({ username: usernameSchema }),
  query: z.object({
    theme: themeSchema,
    locale: localeSchema,
    cache_ttl: z
      .number()
      .min(CACHE_TTL.WAKATIME.MIN)
      .max(CACHE_TTL.WAKATIME.MAX)
      .default(CACHE_TTL.WAKATIME.DEFAULT),
  }),
};
