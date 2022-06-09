/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13ccd6",

          secondary: "#dd061c",

          accent: "#dbea8f",

          neutral: "#202932",

          "base-100": "#ECE8F2",

          info: "#5B95EC",

          success: "#36E2CB",

          warning: "#EB9514",

          error: "#DE3543",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
