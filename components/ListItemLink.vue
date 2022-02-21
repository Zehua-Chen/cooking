<template>
  <NuxtLink class="p-2 w-full inline-block text-black dark:text-white" :to="to">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>
