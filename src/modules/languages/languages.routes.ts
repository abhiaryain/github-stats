import { env } from "@/config/env";
import { Elysia } from "elysia";
import { getLanguages } from "@/modules/languages/languages.service";

export const languages = new Elysia({
  prefix: "/languages",
}).get("/:username?", ({ params: { username = env.GITHUB_USERNAME } }) => {
  return getLanguages(username);
});
