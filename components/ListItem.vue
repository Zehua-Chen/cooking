<template>
  <li>
    <component
      class="px-2 py-2 rounded w-full inline-block"
      :class="[variantClass]"
      :is="component"
      v-bind="componentProps"
    >
      <slot></slot>
    </component>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    variant: {
      type: String,
      default: "plain",
      validator: (variant) => {
        switch (variant) {
          case "plain":
          case "button":
            return true;
          default:
            return false;
        }
      },
    },
    component: {
      type: [String, Object],
      required: true,
    },
    componentProps: {
      type: Object,
    },
  },
  computed: {
    variantClass() {
      switch (this.variant) {
        case "plain":
          return "";
        case "button":
          return "hover:bg-slate-100";
      }
    },
  },
});
</script>
