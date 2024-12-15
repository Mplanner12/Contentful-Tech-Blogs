import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenfield: {
          light: "#E8F5E9",
          DEFAULT: "#43A047",
          dark: "#2E7D32",
        },
      },
      fontFamily: {
        iceberg: ["Iceberg", "sans-serif"],
        "signika-negative": ['"Signika Negative"', "sans-serif"],
        "work-sans": ['"Work Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "black-future": ["var(--font-black-future)"],
      },
      backgroundImage: {
        authBackground: "url('/newauthbg.svg')",
        customgradient:
          "linear-gradient(295deg, rgba(91, 20, 111, 0.20) 8.99%, rgba(255, 0, 156, 0.20) 94.6%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
