---
to: src/layouts/<%= h.changeCase.kebab(name) %>.vue
---
<template>
  <div id="<%= h.changeCase.kebab(name) %>">

  </div>
</template>

<script>
export default {
  name: "<%= h.changeCase.pascal(name) %>Layout"
};
</script>

<style lang="scss">
@import "@/design";
</style>
