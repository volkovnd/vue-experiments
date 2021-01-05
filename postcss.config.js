module.exports = ({ env }) => ({
  syntax: "postcss-scss",
  plugins: [
    require("postcss-preset-env")({
      autoprefixer: {
        grid: env === "production"
      }
    })
  ]
});
