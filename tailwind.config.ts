import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
       "black": "#292B32",
       "gray":"#F7F7F8",
       "dark-slide":"#3B3E47",
       "spot-bg":"#18282A"

      },
      colors:{
        "light-gray":"#525965",
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;
