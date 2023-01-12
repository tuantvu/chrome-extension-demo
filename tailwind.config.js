/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "t-green600": "#53B779",
        "t-neutrals300": "#E7E7E7",
        "t-neutrals500": "#949494",
        "t-purple200": "#F3E0EC",
        "t-purple600": "#803663",
      },
    },
  },
  plugins: [],
};
