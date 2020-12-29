export function loadModules() {
  const requireModule = require.context(".", false, /^((?!index|\.unit\.).)*\.js$/);

  return requireModule
    .keys()
    .map(key => {
      const name = key.replace(/^\.\//, "").replace(/\.\w+$/, "", "");
      const module = requireModule(key);

      module.namespaced = module.namespaced || true;

      return {
        [name]: module
      };
    })
    .reduce(
      (modules, module) => ({
        ...modules,

        ...module
      }),
      {}
    );
}
