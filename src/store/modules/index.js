/** @returns {import("vuex").Module[]} */
export function loadModules(context) {
  return context
    .keys()
    .map(key => {
      const name = key.replace(/^\.\//, "").replace(/\.\w+$/, "", "");
      const module = context(key);

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

export default () => {
  loadModules(require.context(".", false, /^((?!index).)*\.js$/));
};
