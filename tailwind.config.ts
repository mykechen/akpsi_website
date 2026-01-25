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
        // Cloud-inspired light theme
        primary: {
          DEFAULT: "#ffffff",
          light: "#f8fafc",    // Subtle off-white for cards
          dark: "#f1f5f9",     // Slightly darker for backgrounds
        },
        secondary: {
          DEFAULT: "#1e293b",  // Deep slate for text
          light: "#0f172a",    // Headings
          dark: "#475569",     // Muted text
        },
        accent: {
          DEFAULT: "#2563eb",  // Professional blue
          light: "#3b82f6",    // Hover states
          dark: "#1d4ed8",     // Active states
        },
        // Semantic colors for cloud theme
        cloud: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
        },
      },
      fontFamily: {
        display: ["var(--font-dm-serif-display)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      // Premium spacing scale
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      // Refined animation system
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'micro': '200ms',
        'standard': '400ms',
        'macro': '700ms',
      },
      // Shadow system for depth
      boxShadow: {
        'cloud': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'cloud-lg': '0 10px 40px -4px rgba(0, 0, 0, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.04)',
        'cloud-hover': '0 20px 50px -8px rgba(37, 99, 235, 0.15), 0 8px 24px -8px rgba(0, 0, 0, 0.06)',
      },
      // Border radius for cloud aesthetic
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
