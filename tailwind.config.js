/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // daisyui: {
  //   themes: ["night"],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00CF5D",

          secondary: "#7D919B",

          accent: "#EB6B47",

          neutral: "#23282F",

          "base-100": "#111A28",

          info: "#0092D6",

          success: "#6CB288",

          warning: "#DAAD58",

          error: "#AB3D30",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
