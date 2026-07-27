import { env } from "@/config/env";
import i18next from "i18next";

i18next.init({
  lng: "en",
  fallbackLng: "en",
  debug: env.NODE_ENV === "development",
  resources: {
    en: {
      translation: {
        access_denied_title: "Access denied",
        access_denied_subtitle:
          "This username isn't permitted to use this instance. Please deploy your own instance.",
      },
    },
  },
});

export const t = i18next.t.bind(i18next);

export const LOCALES = i18next.languages;
