const defaultWebFontsConfig = {
  google: {
    families: ["Open Sans:300,400,600,700:cyrillic,latin"]
  }
};

const loadWebFonts = async () => {
  const WebFont = await import("webfontloader");

  WebFont.load(defaultWebFontsConfig);
};

export default () => {
  loadWebFonts();
};
