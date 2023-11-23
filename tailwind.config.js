/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        SoftMagenta: "hsl(300, 69%, 71%)"
      },
      fontFamily: {
        'Poppins': ['Poppins', "sans-serif"]
      }
    },
  },
  plugins: [],
}

