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
        "magazine-gray": "rgba(29, 31, 46, 0.7)",
        "contacts-gray": "rgba(210, 210, 213, 0.1)",
      },
      textColor: {
        "custom-rgba": "rgba(29, 31, 46, 0.7)",
      },

      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
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
