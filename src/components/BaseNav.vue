<template>
  <nav
    class="nav"
    :class="{
      'flex-column': column
    }"
  >
    <slot />
  </nav>
</template>

<script>
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  }
};
</script>
