import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        cream: "#FAF6F1",
        ink: "#1C1815",
        "ink-soft": "#3E3830",
        muted: "#6B6459",
        line: "#E8E1D8",
        accent: {
          DEFAULT: "#B85C74",
          deep: "#8F3E54",
          soft: "#F4E3E8",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
