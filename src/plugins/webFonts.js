const loadWebFonts = async options => {
  const WebFont = await import("webfontloader");

  WebFont.load(options);
};

export default {
  install(Vue, options) {
    if (options) {
      loadWebFonts(options);
    }
  }
};
