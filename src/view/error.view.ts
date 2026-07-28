import { getTheme, Theme } from "@/constants/theme";
import { encodeHTML } from "@/utils/encode-html";

const ERROR_CARD_LENGTH = 576.5;

type ErrorViewProps = {
  title: string;
  subtitle: string;
  theme: Theme;
};

export const renderError = ({ title, subtitle, theme }: ErrorViewProps) => {
  const { title_color, text_color, bg_color, border_color } = getTheme(theme);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${ERROR_CARD_LENGTH}" height="120" viewBox="0 0 ${ERROR_CARD_LENGTH} 120" fill="${bg_color}">
      <style>
      .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${title_color} }
      .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${text_color} }
      .gray { fill: #858585 }
      </style>
      <rect x="0.5" y="0.5" width="${ERROR_CARD_LENGTH - 1}" height="99%" rx="4.5" fill="${bg_color}" stroke="${border_color}"/>
      <text x="25" y="45" class="text">${encodeHTML(title)}</text>
      <text data-testid="message" x="25" y="55" class="text small">
        <tspan x="25" dy="18">${subtitle}</tspan>
      </text>
    </svg>
    `;
};
