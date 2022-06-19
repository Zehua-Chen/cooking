<template>
  <button
    class="rounded-full text-white"
    :class="[fontClasses, colorClasses, spaceClasses]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fontClasses(): any {
      return {
        "text-base": !this.small,
        "text-xs": this.small,
      };
    },
    spaceClasses(): any {
      return {
        "p-3": !this.small,
        "p-1": this.small,
      };
    },
    colorClasses(): any {
      return {
        "bg-primary-700": !this.active,
        "bg-primary-500": this.active,
      };
    },
  },
});
</script>
