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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1120px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1300px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "640px",
        md: "768x",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        "lh-main": "#3555D1",
        "lh-dark": "#00082E",
        "lh-dark2": "#2E2E2E",
        "lh-grey": "#CCCCCC",
        "lh-grey-100": "#858585",
        "lh-grey-200": "#ececec",
      },
      fontFamily: {
        rampart: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
