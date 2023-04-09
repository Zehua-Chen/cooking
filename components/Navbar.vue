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

<script lang="ts">
import { defineComponent } from "vue";
import NavLink from "components/NavLink.vue";

export default defineComponent({
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
