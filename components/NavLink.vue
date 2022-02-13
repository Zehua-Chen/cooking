<template>
  <NuxtLink
    class="p-5 text-black dark:text-white border-solid border-primary-600 hover:border-b"
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
