module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        480: "480px",
        635: "635px",
      },
      minWidth: {
        311: "311px",
        50: "50px",
      },
      minHeight: {
        35: "35px",
        auto: "auto",
      },
      width: {
        35: "35px",
        18: "18px",
      },
      height: {
        18: "18px",
      },
      textColor: {
        darkblue: "#3b3f5c",
        headingLink: "#4361ee",
      },
      backgroundColor: {
        headingLink: "#4361ee",
        imagebackground: "#060818",
      },
      backgroundImage: (theme) => ({
        sideImage:
          "url('https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png')",
      }),
      backgroundSize: {
        75: "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
