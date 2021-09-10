module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FE696A",
        secondary: "#373F50",
      },
      spacing: {
        container: "20.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
