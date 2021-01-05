<template>
  <a :href="href"><slot /></a>
</template>

<script>
import filterPhoneNumber from "@/utils/filter-phone-number";

export default {
  computed: {
    slotContent() {
      return this.$slots.default[0].text;
    },
    href() {
      return `tel:${filterPhoneNumber(this.slotContent)}`;
    }
  }
};
</script>
