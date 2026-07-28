import { Elysia } from "elysia";
import { overview } from "@v1/modules/overview/overview.routes";
import { languages } from "@v1/modules/languages/languages.routes";
import { repositories } from "@v1/modules/repositories/repositories.routes";
// import { env } from "@/config/env";
import { wakatime } from "@v1/modules/wakatime/wakatime.routes";
import { gist } from "./modules/gist/gist.routes";

// function getHeaders(cache_ttl: number): HTTPHeaders {
//   const headers: HTTPHeaders = {};
//   headers["content-type"] = "image/svg+xml";
//   if (env.NODE_ENV === "development" || cache_ttl < 1) {
//     headers["cache-control"] =
//       "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0";
//     headers["pragma"] = "no-cache";
//     headers["expires"] = "0";
//   } else {
//     headers["cache-control"] =
//       `max-age=${cache_ttl}, s-maxage=${cache_ttl}, stale-while-revalidate=${cache_ttl * 2}`;
//   }
//   return headers;
// }

export const v1 = new Elysia({
  prefix: "/api/v1",
})
  // .onRequest(({ set, query: { cache_ttl } }) => {
  //   const headers = getHeaders(cache_ttl ?? env.CACHE_DURATION);
  //   for (const key in headers) {
  //     set.headers[key] = headers[key];
  //   }
  // })

  .onRequest(({ set }) => {
    set.headers["content-type"] = "image/svg+xml";
  })
  .use(overview)
  .use(repositories)
  .use(languages)
  .use(wakatime)
  .use(gist);
