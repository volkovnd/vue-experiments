module.exports = ({ env }) => ({
  plugins: [
    require("postcss-preset-env")({
      autoprefixer: {
        grid: env === "production"
      }
    })
  ]
});
