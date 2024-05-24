/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ink': "url('./src/assets/Tinta 5.png')",
      },
      fontFamily: {
        'montserrat': ['"Montserrat"'],
        'jura': ['Rubik']
      }
    },
  },
  plugins: [],
}
