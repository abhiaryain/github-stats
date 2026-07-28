import { env } from "@/config/env";
import { Elysia } from "elysia";
import { getLanguages } from "@v1/modules/languages/languages.service";
import { LanguageSchema } from "@v1/modules/languages/languages.schema";
import { isWhitelisted } from "@/constants/usernames";
import { renderError } from "@/view/error.view";
import { t } from "@/constants/localization";

export const languages = new Elysia({
  prefix: "/languages",
}).get(
  "/:username?",
  ({ params: { username = env.GITHUB_USERNAME }, query }) => {
    console.log(query);

    return getLanguages(username);
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
