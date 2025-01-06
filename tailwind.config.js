/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "light-coffee": "#C89F94",
        "read-story": "rgba(162, 95, 75, 0.2)",
      },
      textColor: { "custom-rgba": "rgba(29, 31, 46, 0.7)" },

      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },

      animation: {
        slideDown: "slideDown 1s ease-in-out",
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
