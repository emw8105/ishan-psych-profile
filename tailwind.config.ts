import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "sky-blue": "#A3D9F5",
        "soft-peach": "#FFD8C2",
        "cloud-white": "#FDFCFB",
        "gentle-gray": "#E8E9EB",
        "calm-charcoal": "#45474F",
        "off-white": "#F7F7F7",
        "deep-coral": "#E57373",
        "temp-1": "#333745",
        "temp-2": "#131B23",
      },
    },
  },
  plugins: [],
} satisfies Config;
