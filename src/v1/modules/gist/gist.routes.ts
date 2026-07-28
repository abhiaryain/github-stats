import Elysia from "elysia";
import { GistSchema } from "@v1/modules/gist/gist.schema";
// import { getGist } from "./gist.service";
import { isWhitelisted } from "@v1/modules/gist/gist.constants";
import { renderError } from "@/view/error.view";
import { t } from "@/constants/localization";

export const gist = new Elysia({
  prefix: "/gist",
}).get(
  "/:gist_id",
  async ({ params: { gist_id } }) => {
    console.log(gist_id);

    // const gist = await getGist(gist_id);
    // return renderGist(gist);
  },
  {
    params: GistSchema.params,
    query: GistSchema.query,
    beforeHandle({ params: { gist_id }, query: { theme } }) {
      if (!isWhitelisted(gist_id)) {
        return renderError({
          title: t("access_denied_title"),
          subtitle: t("access_denied_subtitle"),
          theme,
        });
      }
    },
  },
);
