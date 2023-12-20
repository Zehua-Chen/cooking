<template>
  <li class="NavLink">
    <NuxtLink class="NavLink_link__primary" :to="to">
      <slot></slot>
    </NuxtLink>
  </li>
</template>

<style lang="scss" scoped>
@use "assets/css/link" as *;
@use "styles/layers";
@use "styles/anchor";

@layer components {
  .NavLink {
    all: unset;
    display: inline-block;
  }

  %NavLink_link {
    @extend %AnchorWithoutFocus;

    display: inline-block;
    padding: 20px;
    color: var(--cooking-text);

    border-bottom: solid 1px transparent;
    text-decoration: none;
  }

  .NavLink_link__primary {
    @extend %NavLink_link;

    &.router-link-active {
      border-bottom-color: var(--cooking-primary-active);
    }

    &:hover,
    &:focus,
    &:focus-visible {
      border-bottom-color: var(--cooking-primary);
    }
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
