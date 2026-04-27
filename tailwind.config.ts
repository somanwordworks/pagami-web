import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B2A4A",
        gold: "#B8902A",
        "gold-light": "#D4A847",
        parchment: "#FEFCF7",
        "parchment-2": "#F5F0E4",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        "cormorant-sc": ["Cormorant SC", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
