<template>
  <li>
    <NuxtLink class="p-2 w-full inline-block" :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>
