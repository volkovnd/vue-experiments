<template>
  <div id="app">
    <div id="header">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
