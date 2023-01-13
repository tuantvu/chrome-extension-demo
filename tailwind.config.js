/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "t-blue600": "#0055B2",
        "t-green600": "#53B779",
        "t-neutrals200": "#F5F5F5",
        "t-neutrals300": "#E7E7E7",
        "t-neutrals500": "#949494",
        "t-neutrals600": "#666666",
        "t-neutrals700": "#3B3B3B",
        "t-orange": "#D64E3E",
        "t-purple200": "#F3E0EC",
        "t-purple600": "#803663",
        "t-red600": "#EC6555",
      },
    },
  },
  plugins: [],
};
