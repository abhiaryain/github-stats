import type { Configuration } from "lint-staged";

const config: Configuration = {
  "!(*.{ts,tsx})": "prettier --write --ignore-unknown",
  "*.{ts,tsx}": ["eslint --fix --max-warnings 0", "prettier --write"],
};

export default config;
