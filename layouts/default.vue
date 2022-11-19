<template>
  <div class="flex flex-col min-h-screen">
    <Navbar home="烹饪">
      <NavLink to="/recipes">食谱</NavLink>
      <NavLink to="/knowledge">知识</NavLink>
    </Navbar>
    <div class="grow">
      <slot />
    </div>

    <Container>
      <footer
        class="grid content-center justify-center mt-3 h-20 border-primary-400 border-t dark:text-white"
      >
        Made with Love by Zehua Chen
      </footer>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import NavLink from "../components/NavLink.vue";
import Container from "components/Container.vue";

export default defineComponent({
  components: { Container, Navbar, NavLink },
  head() {
    return {
      title: "烹饪",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
          rel: "stylesheet",
        },
      ],
      script: [],
    };
  },
  computed: {
    navbarColor() {
      return {
        "navbar-light": this.$colorMode.value === "light",
        "bg-light": this.$colorMode.value === "light",
        "navbar-dark": this.$colorMode.value === "dark",
        "bg-dark": this.$colorMode.value === "dark",
      };
    },
  },
});
</script>
