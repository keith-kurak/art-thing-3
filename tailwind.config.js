const colors = require("./constants/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#111111",
        tint: colors.tint,
        "tint-2": colors.tint2,
        "tint-3": colors.tint3,
        "tint-4": colors.tint4,
        "tint-5": colors.tint5,
        "shade-0": "#ffffff",
        "shade-1": "#f5f5f5",
        "shade-2": "#CDCDCD",
        "shade-3": "#B8B8B8",
      },
    },
  },
  plugins: [require("nativewind/dist/tailwind/safe-area").safeArea],
  presets: [require("nativewind/preset")],
};
