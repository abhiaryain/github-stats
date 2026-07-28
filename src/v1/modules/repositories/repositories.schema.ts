import {
  themeSchema,
  usernameSchema,
  localeSchema,
} from "@/schema/common.schema";
import { CACHE_TTL } from "@/utils/cache";
import { z } from "zod";

export const RepositorySchema = {
  params: z.object({ username: usernameSchema }),
  query: z.object({
    theme: themeSchema,
    locale: localeSchema,
    cache_ttl: z
      .number()
      .min(CACHE_TTL.REPOSITORY.MIN)
      .max(CACHE_TTL.REPOSITORY.MAX)
      .default(CACHE_TTL.REPOSITORY.DEFAULT),
  }),
};
