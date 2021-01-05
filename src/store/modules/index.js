/** @returns {import("vuex").Module[]} */
export function loadModules() {
  const context = require.context(".", false, /^((?!index).)*\.js$/);

  return context
    .keys()
    .map(key => {
      const name = key.replace(/^\.\//, "").replace(/\.\w+$/, "", "");
      const module = context(key).default || context(key);

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
