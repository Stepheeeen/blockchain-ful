import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"], // Add DM Sans as the default sans font
      },
      colors: {
        background: "var(--background)", // Custom background color variable
        foreground: "var(--foreground)", // Custom foreground color variable
      },
    },
  },
  plugins: [],
};

export default config;