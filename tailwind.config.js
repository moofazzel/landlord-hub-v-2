/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        // "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        "lh-main": "#3555D1",
        "lh-dark": "#00082E",
        "lh-grey": "#CCCCCC",
        "lh-grey-100": "#858585",
      },
    },
  },
  plugins: [],
};
