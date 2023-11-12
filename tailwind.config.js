/** @type {import('tailwindcss').Config} */
/**@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap')*/
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		fontFamily:{
		    sans: [ 'Open Sans'],
		},
	},
  },
  plugins: [],
};
