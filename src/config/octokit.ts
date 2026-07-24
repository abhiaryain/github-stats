import { env } from "@/config/env";
import { Octokit } from "octokit";
import { packages } from "@/utils/package";

export const octokit = new Octokit({
  userAgent: `${packages.name}/v${packages.version}`,
  auth: env.GITHUB_TOKEN,
});
