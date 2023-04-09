<template>
  <nav class="Navbar">
    <NavLink to="/">{{ home }}</NavLink>
    <slot></slot>
  </nav>
</template>

<style lang="scss" scoped>
.Navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>

<script lang="ts" setup>
import NavLink from "components/NavLink.vue";

export interface NavbarProps {
  home: string;
}

withDefaults(defineProps<NavbarProps>(), { home: "Home" });
</script>
