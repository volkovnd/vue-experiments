<template>
  <div id="app">
    <component :is="layoutComponent" :key="layoutComponent.name || layoutComponent.__filename">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
    </component>
  </div>
</template>

<script>
import appConfig from "@/app.config";

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
  },
  metaInfo: {
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
    htmlAttrs: {
      lang: "ru"
    }
  }
};
</script>

<style lang="scss">
@import "@/design";
@import "~bootstrap/scss/bootstrap";
@import "~animate.css/animate.css";

.fade-enter-active {
  animation: fadeInDown;
}

.fade-leave-active {
  animation: fadeOutDown;
}

.fade-enter-active,
.fade-leave-active {
  animation-duration: 0.25s;
}
</style>
