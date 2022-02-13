<template>
  <li
    class="rounded dark:text-white text-black dark:text-white border-solid border border-primary-500/0 hover:border-primary-500"
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
