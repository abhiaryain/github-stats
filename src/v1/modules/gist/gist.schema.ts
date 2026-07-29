import { z } from "zod";
import { colorSchema, hideSchema, localeSchema, themeSchema } from "@/schema/common.schema";
import { CACHE_TTL } from "@/utils/cache";

export const GistSchema = {
  params: z.object({
    gist_id: z.string().min(1),
  }),
  query: z.object({
    title_color: colorSchema,
    icon_color: colorSchema,
    text_color: colorSchema,
    bg_color: colorSchema,
    border_color: colorSchema,
    border_radius: z.number().min(0).max(100).default(0),
    hide_border: hideSchema,
    theme: themeSchema,
    hide_owner: hideSchema,
    locale: localeSchema,
    cache_ttl: z
      .number()
      .min(CACHE_TTL.GIST.MIN)
      .max(CACHE_TTL.GIST.MAX)
      .default(CACHE_TTL.GIST.DEFAULT),
  }),
};

export type GistParams = z.infer<(typeof GistSchema)["params"]>;

export type GistQuery = z.infer<(typeof GistSchema)["query"]>;
