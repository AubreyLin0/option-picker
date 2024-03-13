/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "madimi-one": "Madimi One",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(45deg,transparent 45%,hsla(48,20%,90%,1) 45%,hsla(48,20%,90%,1) 55%,transparent 0)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: ".03em .03em 0 hsla(230,40%,50%,1)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
