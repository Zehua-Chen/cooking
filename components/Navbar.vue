<template>
  <nav class="navbar navbar-expand-lg" :class="navbarColor">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">{{ home }}</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <slot></slot>
        </ul>
      </div>
    </div>
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
