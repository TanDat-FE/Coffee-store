/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#C89F94",
      },
      width: {
        74: "300px",
      },
      height: {
        87: "350px",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
