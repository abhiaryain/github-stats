import { env } from "@/config/env";
import { Elysia } from "elysia";

export const repositories = new Elysia({
  prefix: "/repositories",
}).get(
  "/:username/:repository",
  ({ params: { username = env.GITHUB_USERNAME, repository } }) => {
    console.log(repository);

    return { username };
  },
);
