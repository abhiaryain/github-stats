import { env } from "@/config/env";
import { LOCALES } from "@/constants/localization";
import { ALL_THEMES } from "@/constants/theme";
import { getUsernames } from "@/constants/usernames";
import { z } from "zod";

export const usernameSchema = z.enum([env.GITHUB_USERNAME, ...getUsernames()]);

export const themeSchema = z
  .enum(ALL_THEMES, "${theme} is not valid")
  .default("light");

export const localeSchema = z
  .enum(LOCALES, `Invalid locale value possible values are ${LOCALES}`)
  .default("en");

export const hideSchema = z
  .stringbool({
    truthy: ["true"],
    falsy: ["false"],
    case: "sensitive",
  })
  .default(false);
