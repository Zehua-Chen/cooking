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
