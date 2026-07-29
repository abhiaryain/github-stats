import { Elysia } from "elysia";
import { overview } from "@v1/modules/overview/overview.routes";
import { languages } from "@v1/modules/languages/languages.routes";
import { repositories } from "@v1/modules/repositories/repositories.routes";
import { wakatime } from "@v1/modules/wakatime/wakatime.routes";
import { gist } from "./modules/gist/gist.routes";
import { env } from "@/config/env";
import { z } from "zod";

export const v1 = new Elysia({
  prefix: "/api/v1",
})
  .guard({
    query: z.object({
      cache_ttl: z.coerce.number().min(1).max(86400).default(60),
    }),
  })
  .onRequest(({ set }) => {
    set.headers["content-type"] = "image/svg+xml";
  })
  .onBeforeHandle(({ set, query: { cache_ttl } }) => {
    const hello = 10;
    if (env.NODE_ENV === "development" || cache_ttl < 1) {
      set.headers["cache-control"] =
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0";
      set.headers["pragma"] = "no-cache";
      set.headers["expires"] = "0";
    } else {
      set.headers["cache-control"] =
        `max-age=${cache_ttl}, s-maxage=${cache_ttl}, stale-while-revalidate=${cache_ttl * 2}`;
    }
  })
  .use(overview)
  .use(repositories)
  .use(languages)
  .use(wakatime)
  .use(gist);
