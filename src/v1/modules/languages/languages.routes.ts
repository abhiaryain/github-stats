import { env } from "@/config/env";
import { Elysia } from "elysia";
import { getLanguages } from "@v1/modules/languages/languages.service";
import { LanguageSchema } from "@v1/modules/languages/languages.schema";
import { isWhitelisted } from "@/constants/usernames";
import { renderError } from "@/view/error.view";
import { t } from "@/constants/localization";
import { renderLanguages } from "./languages.view";

export const languages = new Elysia({
  prefix: "/languages",
}).get(
  "/:username?",
  async ({ params, query }) => {
    params.username = params.username || env.GITHUB_USERNAME;
    query.theme = query.theme || env.THEME;
    const languages = await getLanguages(params, query);
    return renderLanguages(languages, query);
  },
  {
    params: LanguageSchema.params,
    query: LanguageSchema.query,
    beforeHandle({ params: { username }, query: { theme } }) {
      if (username && !isWhitelisted(username)) {
        return renderError({
          title: t("access_denied_title"),
          subtitle: t("access_denied_subtitle"),
          theme,
        });
      }
    },
  },
);
