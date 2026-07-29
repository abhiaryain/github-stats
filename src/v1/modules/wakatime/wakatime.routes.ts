import { env } from "@/config/env";
import { renderError } from "@/view/error.view";
import { Elysia } from "elysia";
import { t } from "@/constants/localization";
import { WakatimeSchema } from "@v1/modules/wakatime/wakatime.schema";
import { isWhitelisted } from "@v1/modules/wakatime//wakatime.constants";

export const wakatime = new Elysia({
  prefix: "/wakatime",
}).get(
  "/:username?",
  async ({ params, query }) => {
    const wakatime = await getWakatime(params, query);
    return renderWakatime(wakatime, query);
  },
  {
    params: WakatimeSchema.params,
    query: WakatimeSchema.query,
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
