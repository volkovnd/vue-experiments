---
to: src/components/<%= h.changeCase.kebab(name) %>.vue
---
<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "<%= h.changeCase.pascal(name) %>"
}
</script>
