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
        schoolbell: '"Schoolbell", serif',
        luckiestGuy: '"Luckiest Guy", serif',
        leagueSpartan: '"League Spartan", sans-serif',
        Poppins: '"Poppins", sans-serif',
      },
      boxShadow: {
        box: "5px 3px 5px 5px #00000030",
      },      
    },
  },
  plugins: [],
} satisfies Config;
