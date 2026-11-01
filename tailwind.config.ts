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
        veil: {
          900: "#090A0F",
          800: "#0F111A",
          700: "#1A1D2B",
          600: "#24283B",
          accent: "#00F0FF",
          emerald: "#10B981",
          purple: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
