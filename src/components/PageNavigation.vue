<template>
  <div id="nav" class="navbar navbar-expand-md">
    <div class="container">
      <div
        class="navbar-collapse collapse"
        :class="{
          show: !collapsed
        }"
      >
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/catalog">Catalog</router-link>
          <router-link class="nav-item nav-link" to="/about">About</router-link>
          <router-link class="nav-item nav-link" to="/contacts">Contacts</router-link>
        </div>
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
