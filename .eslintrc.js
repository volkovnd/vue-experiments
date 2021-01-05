const confusingBrowserGlobals = require("confusing-browser-globals");

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
    "plugin:promise/recommended",
    "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-restricted-globals": ["error"].concat(confusingBrowserGlobals)
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: require.resolve("@vue/cli-service/webpack.config.js")
      }
    }
  }
};
