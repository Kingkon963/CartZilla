module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1600px",
    },
    extend: {
      colors: {
        primary: "#FE696A",
        secondary: "#373F50",
        secondaryDark: "#2B3445",
        lightBlue: "#F6FAFD",
      },
      spacing: {
        container: "8rem",
        containerXXL: "20.5rem",
        menu: "26rem",
        sidebar: "35rem",
        42: "10.5rem",
        "vw-25": "25vw",
        "vw-35": "35vw",
        "vw-50": "50vw",
        "vw-75": "75vw",
        "vh-25": "25vh",
        "vh-45": "45vh",
        "vh-50": "50vh",
        "vh-75": "75vh",
        maxW: "1260px",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["focus", "hover", "active"],
      padding: ["hover", "last"],
      margin: ["last"],
      borderWidth: ["last"],
    },
  },
};
