import { Elysia } from "elysia";
import { v1 } from "@/v1/v1";
import { env } from "@/config/env";
import { renderError } from "@/view/error.view";
import { t } from "@/constants/localization";
import { localeSchema, themeSchema } from "@/schema/common.schema";
import { z } from "zod";

const health = {
  success: true,
  status: "Running",
};

const app = new Elysia()
  .get("/", () => health)
  .get("/health", () => health)
  .guard({
    query: z.object({
      theme: themeSchema,
      locale: localeSchema,
    }),
  })
  .onError(({ code, error, query: { theme = "light" }, request }) => {
    // const headers = getHeaders(env.ERROR_CACHE_DURATION);
    // for (const key in headers) {
    //   set.headers[key] = headers[key];
    // }

    switch (code) {
      case "UNKNOWN":
        return renderError({
          title: t("something_went_wrong"),
          subtitle: t("unknown_error_subtitle"),
          theme,
        });
      case "INTERNAL_SERVER_ERROR":
        return renderError({
          title: t("internal_server_error_title"),
          subtitle: t("internal_server_error_subtitle"),
          theme,
        });
      case "PARSE":
        return renderError({
          title: t("parse_error_title"),
          subtitle: t("parse_error_subtitle"),
          theme,
        });
      case "NOT_FOUND":
        return renderError({
          title: "Resource not found",
          subtitle: `The requested resource '${request.method} ${request.url}' could not be found`,
          theme,
        });
      case "VALIDATION":
        return renderError({
          title: code,
          subtitle: JSON.parse(error.message).message,
          theme,
        });
      default:
        return renderError({
          title: "Something went wrong",
          subtitle: "Please try again later",
          theme,
        });
    }

    // if (error instanceof Error) {
    //   return renderError({
    //     title: error.message,
    //     subtitle: error.message,
    //     theme,
    //   });
    // }
  })
  .use(v1);

if (env.NODE_ENV === "development") {
  app.listen(env.PORT, (server) => {
    console.log(
      `Server is running at http://${server?.hostname}:${server?.port}`,
    );
  });
}

export default app;
