<template>
  <NuxtLink
    class="navbar-item"
    :class="{ active: $route.path.includes(to) }"
    :to="to"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
      wrong: false
    }
  }
});
</script>
