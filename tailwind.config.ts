import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#111111",
        "ink-soft": "#3A3A3A",
        muted: "#6B6B6B",
        line: "#E6E6E6",
        // błękit z okładki (przyciski) i karmin z makiety (akcenty tekstowe)
        sky: { DEFAULT: "#3AA8DD", deep: "#2B93C7" },
        crimson: { DEFAULT: "#A3224F", soft: "#F6E4EB" },
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1120px" },
    },
  },
  plugins: [],
};

export default config;
