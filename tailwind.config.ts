import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#080808",
          900: "#101010",
          800: "#181818",
          700: "#242424",
        },
        paper: {
          50: "#F5F5F2",
          100: "#ECEAE4",
          200: "#DDD9D0",
        },
        muted: "#A1A1A1",
        champagne: {
          DEFAULT: "#C5A46D",
          600: "#B08E54",
          400: "#D4BA8A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wide-ish": "0.01em",
      },
      maxWidth: {
        content: "72rem",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
