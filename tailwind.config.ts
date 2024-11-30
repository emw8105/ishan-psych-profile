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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "off-white": "#FDF6F0",
        charcoal: "#2D2D2D",
        "rose-gold": "#C27BA0",
        "deep-navy": "#203A4C",
        taupe: "#C8B8A6",
        olive: "#556B2F",
      },
    },
  },
  plugins: [],
} satisfies Config;
