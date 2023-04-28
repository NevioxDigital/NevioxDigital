/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
        colors:{
          gold: "#D4AF37",
          black: "#141414",
          lblack: "#202020",
          white: "#DEDEDE",
        },
        fontFamily: {
          title: ["Bruno Ace SC", "cursive"],
          body: ["Chathura", "sans-serif"],
        },
  },
    
  plugins: [],
}
