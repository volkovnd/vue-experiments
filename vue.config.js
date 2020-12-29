/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === "production" ? "/vue-experiments/" : "/",

  css: {
    sourceMap: process.env.NODE_ENV !== "production"
  },

  chainWebpack: config => {
    /** Replace app entry src from ./src/main.js to ./src/entry-client.js */
    const appEntry = config
      .entry("app")
      .values()
      .map(src => src.replace(/\.\/src\/main\.js$/, "./src/entry-client.js"));

    config
      .entry("app")
      .clear()
      .merge(appEntry);

    config.when(process.env.NODE_ENV !== "production", config => {
      /** disable perfomance hints */
      config.performance.hints(false);

      /** set devtool for vscode */
      config.devtool("source-map");
    });
  }
};
