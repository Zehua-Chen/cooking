<template>
  <NuxtLink class="p-2 w-full inline-block text-black dark:text-white" :to="to">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>
