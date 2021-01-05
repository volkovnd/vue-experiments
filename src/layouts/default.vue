<template>
  <div id="page">
    <PageHeader id="header">
      <img src="@/assets/logo.png" alt="" />
    </PageHeader>
    <PageNavigation id="navigation">
      <nav class="navbar-nav">
        <router-link class="nav-item nav-link" to="/">Home</router-link>
        <router-link class="nav-item nav-link" to="/catalog">Catalog</router-link>
        <router-link class="nav-item nav-link" to="/about">About</router-link>
        <router-link class="nav-item nav-link" to="/contacts">Contacts</router-link>
      </nav>
    </PageNavigation>
    <PageMain id="main">
      <slot />
    </PageMain>
    <PageFooter id="footer">
      <span>ООО "ПакСервис"</span>
    </PageFooter>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageNavigation from "@/components/PageNavigation.vue";
import PageMain from "@/components/PageMain.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    PageHeader,
    PageNavigation,
    PageMain,
    PageFooter
  }
};
</script>

<style lang="scss">
#page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
}

#footer {
  margin-top: auto;
}
</style>
