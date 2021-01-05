<template>
  <div class="navbar navbar-expand-md navbar-dark bg-dark py-2">
    <div class="container">
      <div
        class="navbar-collapse collapse"
        :class="{
          show: !collapsed
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNavigation",
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
