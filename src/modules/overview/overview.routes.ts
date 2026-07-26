import { env } from "@/config/env";
import { Elysia } from "elysia";
import { getOverview } from "@/modules/overview/overview.service";

export const overview = new Elysia({
  prefix: "/overview",
}).get("/:username?", ({ params: { username = env.GITHUB_USERNAME } }) => {
  return getOverview(username);
});
