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
        primary: {
          DEFAULT: "#0a0a0a",
          light: "#1a1a1a",
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          light: "#ffffff",
          dark: "#e5e5e5",
        },
        accent: {
          DEFAULT: "#3b82f6",
          light: "#76B3FF",
          dark: "#1C55D1",
        },
      },
      fontFamily: {
        display: ["var(--font-dm-serif-display)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
