<template>
  <div class="page">
    <Navbar home="烹饪">
      <NavLink to="/recipes">食谱</NavLink>
      <NavLink to="/knowledge">知识</NavLink>
    </Navbar>
    <Nuxt class="page-content" />
    <footer class="bottom-bar border-top surface">
      Made with Love by Zehua Chen
    </footer>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.bottom-bar {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script lang="ts">
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import NavLink from "../components/NavLink.vue";

export default Vue.extend({
  components: { Navbar, NavLink },
  head() {
    return {
      title: "烹饪",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true
        },
        {
          href:
            "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
          rel: "stylesheet"
        }
        // {
        //   href:
        //     "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        //   rel: "stylesheet",
        //   integrity:
        //     "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        //   crossorigin: "anonymous"
        // }
      ],
      script: [
        {
          src:
            "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
          crossorigin: "anonymous"
        }
      ]
    };
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
});
</script>
