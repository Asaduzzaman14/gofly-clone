module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f69c3b",
          secondary: "#27a2dc",
          accent: "#11468F",
          neutral: "#1A1A40",
          "base-100": "#ffffff",

        },
      },


    ],
  },
  plugins: [require("daisyui")],
}