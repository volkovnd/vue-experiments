<template>
  <div id="page">
    <PageHeader id="header">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">
          <BaseLogo />
        </div>
        <div class="col-auto">
          <div class="text-right">
            <BasePhoneLink>8 (495) 664-54-33</BasePhoneLink>
            <div class="address">Московская обл., г. Пушкино, ул. Грибоедова 7</div>
          </div>
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
      <div>ООО "ПакСервис"</div>
      <div>Адрес: 141207, Московская обл., г. Пушкино, ул. Грибоедова, д. 7</div>
      <div><BasePhoneLink>Тел.: 8 (495) 664-54-33</BasePhoneLink></div>
      <div><BaseMailLink>E-Mail: pakservis@list.ru</BaseMailLink></div>
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
