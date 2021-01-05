<template>
  <router-link :to="routerLinkTo" class="nav-item nav-link" v-bind="$attrs" v-on="$listeners"
    ><slot
  /></router-link>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: ""
    },
    to: {
      type: Object,
      default: null
    }
  },
  computed: {
    routerLinkTo() {
      return this.href ? this.href : this.to;
    }
  }
};
</script>
