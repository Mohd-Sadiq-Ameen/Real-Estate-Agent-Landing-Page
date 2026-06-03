import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        gold: "#C9A84C",
        navy: {
          dark: "#0F1923",
          DEFAULT: "#1A2B3C",
        },
      },
    },
  },
  plugins: [],
};

export default config;
