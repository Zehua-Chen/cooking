<template>
  <NuxtLink
    class="NavLink NavLink__primary"
    :class="{ active: $route.path.includes(to) }"
    :to="to"
  >
    <slot></slot>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.NavLink {
  padding: 20px;
  color: var(--cooking-text);

  border-bottom: solid 1px transparent;
}

.NavLink__primary {
  &:hover {
    border-bottom-color: var(--cooking-primary);
  }

  &.router-link-active {
    border-bottom-color: var(--cooking-primary);
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>
