import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090B",
        "bg-secondary": "#101115",
        "bg-panel": "#15161B",
        "bg-panel-hover": "#1A1B22",
        "accent-red": "#C72C46",
        "accent-red-hover": "#E05269",
        "accent-crimson": "#8A172D",
        "text-primary": "#F3F2F2",
        "text-secondary": "#92939B",
        "text-muted": "#5C5D66",
        "border-subtle": "#292A31",
        "border-accent": "rgba(199, 44, 70, 0.4)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "crimson-glow": "0 0 25px -5px rgba(199, 44, 70, 0.35)",
        "crimson-glow-lg": "0 0 45px -5px rgba(199, 44, 70, 0.5)",
        "panel-subtle": "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
        "grid-move": "gridMove 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
