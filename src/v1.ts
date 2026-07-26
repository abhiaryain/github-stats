import { Elysia } from "elysia";
import { overview } from "@/modules/overview/overview.routes";
import { languages } from "@/modules/languages/languages.routes";
import { repositories } from "@/modules/repositories/repositories.routes";
import { env } from "@/config/env";

export const v1 = new Elysia({
  prefix: "/api/v1",
})
  .onBeforeHandle(({ params: { username } }) => {
    if (username && env.ENABLE_FOR_OTHERS_GITHUB_USERNAME === false) {
      throw new Error("This API is only for the owner of the GitHub account.");
    }
  })
  .use(overview)
  .use(languages)
  .use(repositories);
