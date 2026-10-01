/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      screens: {
        "5xs": "256px",
        "4xs": "320px",
        "3xs": "448px",
        "2xs": "576px",
        xs: "640px",
        sm: "768px",
        md: "896px",
        lg: "1024px",
        xl: "1152px",
        "2xl": "1280px",
        "3xl": "1440px",
        "4xl": "1536px",
        "5xl": "1680px",
        "6xl": "1740px",
        "7xl": "1920px",
        "8xl": "2560px",
        "9xl": "3840px",
      },
      colors: {
        textPrimary: "#58595B",
        textSecondary: "#231F20",
        lightCyan: "#CFFFFF",
        moreLightCyan:"#EDFFFF",
        skyBlue: "#5BA8FF",
        royalBlue:"#020088",
        buttonCyan:"#2CDDF3",
        lightGray:"#4F4F64",
        cornFlowerBlue:"#6384FF",
        aquaBlue:"#2CDDF3"
      },
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
      },
    },
  }
}

