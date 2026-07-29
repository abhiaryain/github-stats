import { env } from "@/config/env";
import { Elysia } from "elysia";
import { isWhitelisted } from "@/constants/usernames";
import { renderError } from "@/view/error.view";
import { t } from "@/constants/localization";
import { RepositorySchema } from "@v1/modules/repositories/repositories.schema";
import { isExcluded } from "@v1/modules/repositories/repositories.constants";

export const repositories = new Elysia({
  prefix: "/repositories",
}).get(
  "/:username/:repository",
  async ({ params: { username = env.GITHUB_USERNAME, repository } }) => {
    const repositories = await getRepositories(params, query);
    return renderRepositories(repositories, query);
  },
  {
    params: RepositorySchema.params,
    query: RepositorySchema.query,
    beforeHandle({
      params: { username, repository },
      query: { theme = "light" },
    }) {
      if (username && !isWhitelisted(username)) {
        return renderError({
          title: t("access_denied_title"),
          subtitle: t("access_denied_subtitle"),
          theme,
        });
      }

      if (isExcluded(username, repository)) {
        return renderError({
          title: t("resource_not_found_error_title"),
          subtitle: t("resource_not_found_error_subtitle", {
            method: "GET",
            url: `/repositories/${username}/${repository}`,
          }),
          theme,
        });
      }
    },
  },
);
