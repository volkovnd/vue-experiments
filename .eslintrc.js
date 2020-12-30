module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: require.resolve("@vue/cli-service/webpack.config.js")
      }
    }
  }
};
