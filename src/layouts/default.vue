<template>
  <div id="page">
    <PageHeader />
    <PageNavigation />
    <div id="main">
      <slot />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageNavigation from "@/components/PageNavigation.vue";

export default {
  name: "DefaultLayout",
  components: {
    PageHeader,
    PageNavigation
  }
};
</script>
