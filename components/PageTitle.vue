<template>
  <div class="grid h-40 content-center justify-center">
    <h1 class="text-3xl font-bold dark:text-white">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
