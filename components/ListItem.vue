<template>
  <component
    class="list-group-item"
    :class="[variantClass]"
    :is="component"
    v-bind="componentProps"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "plain",
      validator: variant => {
        switch (variant) {
          case "plain":
          case "button":
            return true;
          default:
            return false;
        }
      }
    },
    component: {
      type: [String, Object]
    },
    componentProps: {
      type: Object
    }
  },
  computed: {
    variantClass() {
      switch (this.variant) {
        case "plain":
          return "";
        case "button":
          return "list-group-item-action";
      }
    }
  }
};
</script>
