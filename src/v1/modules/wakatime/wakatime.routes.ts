import { env } from "@/config/env";
import { renderError } from "@/view/error.view";
import { Elysia } from "elysia";
import { t } from "@/constants/localization";
import { WakatimeSchema } from "@v1/modules/wakatime/wakatime.schema";

export const wakatime = new Elysia({
  prefix: "/wakatime",
}).get(
  "/:username?",
  ({ params: { username = env.GITHUB_USERNAME } }) => {
    return { username };
  },
  {
    params: WakatimeSchema.params,
    query: WakatimeSchema.query,
    beforeHandle({ params: { username }, query: { theme } }) {
      if (username && (isBlacklisted(username) || isUnknown(username))) {
        return renderError({
          title: t("access_denied_title"),
          subtitle: t("access_denied_subtitle"),
          theme,
        });
      }
    },
  },
);
