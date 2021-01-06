<template>
  <a :href="href"><slot /></a>
</template>

<script>
import filterEmailAddress from "@/utils/filter-email-address";

export default {
  computed: {
    slotContent() {
      return this.$slots.default[0].text;
    },
    href() {
      return `mailto:${filterEmailAddress(this.slotContent)}`;
    }
  }
};
</script>
