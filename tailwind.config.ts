import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
