<template>
  <div id="page">
    <div id="header">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div id="nav">
      <router-link to="/">Главная</router-link>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>
