module.exports = ({ env }) => ({
  syntax: "postcss-scss",
  plugins: [
    require("postcss-flexbugs-fixes")(),
    require("postcss-preset-env")({
      autoprefixer: {
        grid: env === "production"
      }
    })
  ]
});
