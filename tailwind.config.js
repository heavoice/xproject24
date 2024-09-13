/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" },
        },
      },
      screens: {
        xs: { min: "320px", max: "639px" },
      },
      fontSize: {
        "2xs": "0.625rem",
        "4xs": "0.500rem",
      },
      animation: {
        "spin-slow": "spin 1s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
