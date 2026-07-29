import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const GITHUB_USERNAME_REGEX = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

export const env = createEnv({
  server: {
    PORT: z.coerce.number().int().min(1).max(65535).default(3000),
    NODE_ENV: z
      .enum(["development", "test", "staging", "production"])
      .default("development"),
    GITHUB_TOKEN: z
      .string({
        message: "Environment variable GITHUB_TOKEN must be a string.",
      })
      .trim()
      .min(1, {
        message:
          "GITHUB_TOKEN is required and cannot be empty. Please provide a valid GitHub token.",
      })
      .startsWith("github_pat_", {
        message: "GITHUB_TOKEN must be a valid GitHub personal access token.",
      }),
    GITHUB_USERNAME: z
      .string()
      .trim()
      .toLowerCase()
      .min(1)
      .regex(GITHUB_USERNAME_REGEX, { error: "Invalid Github username" }),
    WAKATIME_USERNAME: z
      .string()
      .trim()
      .toLowerCase()
      .min(1)
      .regex(GITHUB_USERNAME_REGEX, { error: "Invalid Wakatime username" }),
    CACHE_DURATION: z.coerce.number().min(1).max(86400).default(60), // 1 minute to 1 day
    ERROR_CACHE_DURATION: z.coerce.number().min(1).max(86400).default(60), // 1 minute to 1 day
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
