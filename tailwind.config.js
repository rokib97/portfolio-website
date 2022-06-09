/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00CF5D",

          secondary: "#ce7548",

          accent: "#a8fff0",

          neutral: "#18222A",

          "base-100": "#111A28",

          info: "#2D7CEB",

          success: "#22874D",

          warning: "#E98820",

          error: "#EE728B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
