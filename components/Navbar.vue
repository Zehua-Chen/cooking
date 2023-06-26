<template>
  <TextContent class="Navbar" component="nav">
    <ul class="Navbar_list">
      <NavLink to="/">{{ home }}</NavLink>
      <slot></slot>
    </ul>
  </TextContent>
</template>

<style lang="scss" scoped>
.Navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.Navbar_list {
  all: unset;
}
</style>

<script lang="ts" setup>
import TextContent from "components/TextContent.vue";
import NavLink from "components/NavLink.vue";

export interface NavbarProps {
  home: string;
}

withDefaults(defineProps<NavbarProps>(), { home: "Home" });
</script>
