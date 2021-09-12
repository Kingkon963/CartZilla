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
        menu: "26rem",
        sidebar: "35rem",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["focus", "hover", "active"],
      padding: ["hover", "last"],
      borderWidth: ["last"],
    },
  },
};
