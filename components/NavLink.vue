<template>
  <NuxtLink class="NavLink NavLink__primary" :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "assets/css/link" as *;

.NavLink {
  padding: 20px;
  color: var(--cooking-text);

  border-bottom: solid 1px transparent;
}

.NavLink__primary {
  &.router-link-active {
    border-bottom-color: var(--cooking-primary-active);
  }

  &:hover {
    border-bottom-color: var(--cooking-primary);
  }
}
</style>

<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
