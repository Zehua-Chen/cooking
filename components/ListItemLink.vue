<template>
  <li>
    <NuxtLink
      class="p-2 rounded w-full inline-block text-black dark:text-white outline outline-0 outline-primary-500 hover:outline-1"
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
