<template>
  <NuxtLink
    class="p-5 text-black dark:text-white border-solid border-b border-primary-600/0 hover:border-primary-600"
    :class="{ active: $route.path.includes(to) }"
    :to="to"
  >
    <slot></slot>
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
