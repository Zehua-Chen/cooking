<template>
  <NuxtLink class="ListItemLink" :to="to">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "styles/layers";

@layer components {
  .ListItemLink {
    display: inline-block;
    width: 100%;
    padding: 10px;
    text-decoration: none;
    color: var(--cooking-text);
  }
}
</style>

<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    default: "/404",
  },
});
</script>
