/** @type {import('tailwindcss').Config} */
export default {
	
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/global-styles.css"
  ],
  theme: {
    colors: {
			redDefault: "#932A2A",
			blackDefault: "#16100C",
			golden: "#DD9E55",
			white: "#FFF",
			default: "#16100C",
      gray: "#6D6D6D"
		  },
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"'],
        'jura': ['"Jura"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
