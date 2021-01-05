function importComponents() {
  const context = require.context("@/components", false, /Base[\w-]+\.vue$/);

  return context
    .keys()
    .map(key => {
      const componentName = key.replace(/^\.\//, "").replace(/\.vue$/, "");
      const componentOptions = context(key).default || context(key);

      return {
        [componentName]: componentOptions
      };
    })
    .reduce((components, currentComponent) => ({
      ...components,
      ...currentComponent
    }));
}

const install = Vue => {
  const components = importComponents();

  for (const component in components) {
    Vue.component(component, components[component]);
  }
};

export default {
  install
};
