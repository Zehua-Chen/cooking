<template>
  <nav class="flex flex-row justify-start">
    <NavLink to="/">{{ home }}</NavLink>
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import NavLink from "components/NavLink.vue";

export default Vue.extend({
  components: { NavLink },
  props: {
    home: {
      type: String,
      default: "Home",
    },
  },
  computed: {
    navbarColor() {
      const { value: colorMode } = this.$colorMode;

      return {
        "navbar-light": colorMode === "light",
        "bg-light": colorMode === "light",
        "navbar-dark": colorMode === "dark",
        "bg-dark": colorMode === "dark",
      };
    },
  },
});
</script>
