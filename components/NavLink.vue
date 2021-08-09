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
export default {
  props: ["to"]
};
</script>
