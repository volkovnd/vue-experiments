<template>
  <div id="app">
    <component :is="layoutComponent" :key="layoutComponent.name || layoutComponent.__filename">
      <router-view :key="$route.fullPath" />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentLayout: null
    };
  },
  computed: {
    layoutComponent() {
      return this.currentLayout || require("@/layouts/default.vue").default;
    }
  }
};
</script>

<style lang="scss">
@import "@/design";
@import "~bootstrap/scss/bootstrap";
</style>
