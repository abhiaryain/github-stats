import { env } from "@/config/env";
import { Elysia } from "elysia";

export const repositories = new Elysia({
  prefix: "/repositories",
}).get("/:username?", ({ params: { username = env.GITHUB_USERNAME } }) => {
  return { username };
});
