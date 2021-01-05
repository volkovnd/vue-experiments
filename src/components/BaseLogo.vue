<template>
  <img src="@/assets/logo.png" :alt="alt" />
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
