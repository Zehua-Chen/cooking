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

<script>
export default {
  props: {
    home: {
      type: String,
      default: "Home"
    }
  },
  computed: {
    navbarColor() {
      return {
        "navbar-light": this.$colorMode.value === "light",
        "bg-light": this.$colorMode.value === "light",
        "navbar-dark": this.$colorMode.value === "dark",
        "bg-dark": this.$colorMode.value === "dark"
      };
    }
  }
};
</script>
