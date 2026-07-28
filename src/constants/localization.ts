import { env } from "@/config/env";
import i18next from "i18next";

i18next.init({
  lng: "en",
  fallbackLng: "en",
  debug: env.NODE_ENV === "development",
  resources: {
    en: {
      translation: {
        something_went_wrong: "Something went wrong",
        unknown_error_title: "Unknown error",
        unknown_error_subtitle: "An unknown error occurred",
        internal_server_error_title: "Internal server error",
        internal_server_error_subtitle: "An internal server error occurred",
        parse_error_title: "Invalid request",
        parse_error_subtitle: "The request could not be parsed",
        resource_not_found_error_title: "Resource not found",
        resource_not_found_error_subtitle: `The requested resource '{method} {url}' could not be found`,
        access_denied_title: "Access denied",
        access_denied_subtitle:
          "This username isn't permitted to use this instance. Please deploy your own instance.",
      },
    },
  },
});

export const t = i18next.t.bind(i18next);

export const LOCALES = i18next.languages;
