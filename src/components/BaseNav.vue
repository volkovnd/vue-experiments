<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  render: (h, { props, data, children }) =>
    h(
      "nav",
      mergeData(data, {
        staticClass: "nav",
        class: {
          "flex-column": props.column
        }
      }),
      children
    )
};
</script>
