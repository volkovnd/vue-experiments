---
to: src/views/<%= h.changeCase.kebab(name) %>.vue
---
<template>
  <div id="<%= h.changeCase.kebab(name) %>" class="container">
    <h1><%= h.changeCase.title(name) %></h1>
  </div>
</template>

<script>
export default {
  name: "<%= h.changeCase.pascal(name) %>"
}
</script>

<style lang="scss">
@import "@/design";
</style>
