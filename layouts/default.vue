<template>
  <div class="page">
    <Navbar home="烹饪">
      <NavLink to="/">主页</NavLink>
      <NavLink to="/recipes">食谱</NavLink>
      <NavLink to="/knowledge">知识</NavLink>
    </Navbar>
    <Nuxt class="page-content" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex-grow: 1;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import NavLink from "../components/NavLink.vue";

export default {
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
};
</script>
