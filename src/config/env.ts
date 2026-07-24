import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import { GITHUB_USERNAME_REGEX } from "@/constants/constants";

export const env = createEnv({
  server: {
    PORT: z.coerce.number().int().min(1).max(65535).default(3000),
    NODE_ENV: z
      .enum(["development", "test", "staging", "production"])
      .default("development"),
    GITHUB_TOKEN: z.string().trim().min(1),
    GITHUB_USERNAME: z
      .string()
      .trim()
      .toLowerCase()
      .min(1)
      .regex(GITHUB_USERNAME_REGEX, { error: "Invalid Github username" }),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
