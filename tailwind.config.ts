import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      maxWidth: {
        content: "1200px",
        wide: "1400px"
      },
      colors: {
        qcsv: {
          primary: "#0E7C86",
          secondary: "#1F3A4D",
          accent: "#C9801A",
          ink: "#0B0F14"
        }
      },
      boxShadow: {
        card: "0 10px 40px rgba(11,15,20,.07)",
        glow: "none"
      },
      borderRadius: {
        qcsv: "28px"
      }
    }
  },
  plugins: []
};

export default config;
