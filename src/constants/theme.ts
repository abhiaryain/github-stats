const THEME = {
  light: {
    title_color: "#2f80ed",
    icon_color: "#4c71f2",
    text_color: "#434d58",
    bg_color: "#fffefe",
    border_color: "#e4e2e2",
  },
  dark: {
    title_color: "#ffffff",
    icon_color: "#79ff97",
    text_color: "#9f9f9f",
    bg_color: "#151515",
    border_color: "#e4e2e2",
  },
} as const;

export type Theme = keyof typeof THEME;

export const getTheme = (theme: Theme) => THEME[theme];

export const ALL_THEMES = Object.keys(THEME) as Theme[];
