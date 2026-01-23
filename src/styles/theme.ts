export const theme = {
  colors: {
    bg: "#100e1a",
    text: "#ffffff",
    muted: "#666666",
    border: "rgba(0,0,0,0.12)",
    cardBg: "#ffffff",
    subtleBg: "rgba(0,0,0,0.03)",
    link: "#111111",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "32px",
    8: "40px",
    9: "56px",
    10: "72px",
  },
  radius: {
    md: "14px",
    lg: "18px",
    pill: "999px",
  },
  typography: {
    font: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Apple SD Gothic Neo", "Noto Sans KR", Arial, sans-serif`,
    mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
} as const;

export type AppTheme = typeof theme;
