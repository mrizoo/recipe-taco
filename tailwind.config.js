/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Young Serif", "serif"],
    },
    extend: {
      backgroundColor: {
        main_pink: "#F3E5D7",
      },
      colors: {
        wenge_brown: "#5F564D",
        snow: "#FFF7FB",
        dark_raspberry:"#7A284E",
        brandy_ray:"#854632",
      },
    },
  },
  plugins: [],
};
