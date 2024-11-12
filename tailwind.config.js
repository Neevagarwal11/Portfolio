/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your project structure
  ],

  theme: {
    extend: {
      screens:{
        '4xl':"2560px",
      },
    },
  },
  plugins: [],
}
