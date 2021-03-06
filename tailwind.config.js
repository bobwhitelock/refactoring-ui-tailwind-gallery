module.exports = {
  theme: {
    linearGradients: theme => ({
      colors: theme("colors"),
    }),
    radialGradients: theme => ({
      colors: theme("colors"),
    }),
    conicGradients: theme => ({
      colors: theme("colors"),
    }),
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")()],
}
