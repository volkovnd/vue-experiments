<template>
  <img src="@/assets/logo.png" :alt="alt" class="logo" />
</template>

<script>
import appConfig from "@/app.config";

export default {
  props: {
    alt: {
      type: String,
      default: appConfig.title
    }
  }
};
</script>

<style lang="scss">
@import "@/design";

.logo {
  max-width: 100%;
  height: auto;
}
</style>
