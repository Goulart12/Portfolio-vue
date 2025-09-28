module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // permite alternar tema escuro por classe
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#64748b",
        accent: "#38bdf8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
