import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
        wide: "1400px",
      },
      colors: {
        qcsv: {
          primary: "#0EA5E9",
          secondary: "#6366F1",
          accent: "#10B981",
          ink: "#070B14",
        },
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,.35)",
        glow: "0 0 35px rgba(14,165,233,.25)",
      },
      borderRadius: {
        qcsv: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
