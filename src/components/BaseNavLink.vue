<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  render: (h, { data, children }) =>
    h(
      "BaseLink",
      mergeData(data, {
        staticClass: "nav-item nav-link"
      }),
      children
    )
};
</script>
