/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBackground: "#020713",
        boxColor:"rgba(0 ,167 ,220,0.2 )"
      },
       backgroundImage: { 
        'title-gradient': 'radial-gradient(95.56% 189.72% at 15.27% 42.47%, #0000FF 0%, #FF0000 50%, #FFFF00 100%)' 
      },
       
    },
  },
  plugins: [],
};
