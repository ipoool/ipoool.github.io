module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container-1": {
          width: "1000px",
          maxWidth: "100%",
        },
        ".container-2": {
          width: "800px",
          maxWidth: "100%",
        },
      });
    },
  ],
};
