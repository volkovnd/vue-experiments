<template>
  <img src="@/assets/logo.png" :alt="alt" />
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: "App Logo"
    }
  }
};
</script>
