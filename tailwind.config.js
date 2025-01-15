/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        text: "var(--text)",
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
        "gradient-to-b":
          "linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
