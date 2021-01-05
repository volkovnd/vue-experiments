<template>
  <div id="page">
    <PageHeader id="header">
      <div class="row justify-between align-center">
        <div class="col-auto">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="col-auto">
          <BasePhone>8 (495) 664-54-33</BasePhone>
        </div>
      </div>
    </PageHeader>
    <PageNavigation id="navigation">
      <BaseNav class="navbar-nav">
        <BaseNavLink href="/">Home</BaseNavLink>
        <BaseNavLink href="/catalog">Catalog</BaseNavLink>
        <BaseNavLink href="/about">About</BaseNavLink>
        <BaseNavLink href="/contacts">Contacts</BaseNavLink>
      </BaseNav>
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
