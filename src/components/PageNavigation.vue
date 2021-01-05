<template>
  <div class="navbar navbar-expand-md navbar-dark bg-dark py-2">
    <div class="container">
      <button type="button" class="navbar-toggler" @click="toggle()">
        <span class="navbar-toggler-icon"></span>
      </button>
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
  },
  beforeMount() {
    this.$root.$router.beforeEach((from, to, next) => {
      this.hide();

      next();
    });
  },
  methods: {
    toggle() {
      if (this.collapsed) {
        this.show();
      } else {
        this.hide();
      }
    },
    show() {
      this.collapsed = false;
    },
    hide() {
      this.collapsed = true;
    }
  }
};
</script>
