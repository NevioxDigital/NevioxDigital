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
          lblack: "#141414",
        },
        fontFamily: {
          title: ["Bruno Ace SC", "cursive"],
          body: ["Chathura", "sans-serif"],
        },
  },
    
  plugins: [],
}
