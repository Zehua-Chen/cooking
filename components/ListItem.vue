<template>
  <li
    class="px-2 py-2 rounded w-full inline-block dark:text-white"
    :class="[variantClass]"
  >
    <slot></slot>
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
  },
  computed: {
    variantClass() {
      switch (this.variant) {
        case "plain":
          return "";
        case "button":
          return "hover:bg-gray-100 dark:hover:bg-gray-700";
      }
    },
  },
});
</script>
