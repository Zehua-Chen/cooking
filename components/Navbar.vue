<template>
  <nav class="navbar">
    <NuxtLink
      class="navbar-item"
      :class="{ active: $route.path == '/' }"
      to="/"
      >{{ home }}</NuxtLink
    >
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    home: {
      type: String,
      default: "Home"
    }
  },
  computed: {
    navbarColor() {
      const { value: colorMode } = this.$colorMode;

      return {
        "navbar-light": colorMode === "light",
        "bg-light": colorMode === "light",
        "navbar-dark": colorMode === "dark",
        "bg-dark": colorMode === "dark"
      };
    }
  }
});
</script>
