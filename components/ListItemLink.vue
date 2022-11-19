<template>
  <NuxtLink class="p-2 w-full inline-block text-black dark:text-white" :to="to">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    default: "/404",
  },
});
</script>
