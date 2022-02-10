<template>
  <li>
    <NuxtLink
      class="px-2 py-2 rounded w-full inline-block dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      :to="to"
    >
      <slot />
    </NuxtLink>
  </li>
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
