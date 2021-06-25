<template>
  <li class="nav-item">
    <NuxtLink
      class="nav-link"
      v-bind:class="{ active: $route.path == to }"
      v-bind:to="to"
    >
      <slot></slot>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: ["to"]
};
</script>
