import { env } from "@/config/env";
import { Elysia } from "elysia";
import { getOverview } from "@v1/modules/overview/overview.service";
import { OverviewSchema } from "./overview.schema";
import { isWhitelisted } from "@/constants/usernames";
import { renderError } from "@/view/error.view";
import { t } from "@/constants/localization";
import { renderOverview } from "./overview.view";

export const overview = new Elysia({
  prefix: "/overview",
}).get(
  "/:username?",
  ({ params: { username = env.GITHUB_USERNAME } }) => {
    const overview = getOverview(params, query);
    return renderOverview(overview, query);
  },
  {
    params: OverviewSchema.params,
    query: OverviewSchema.query,
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
