<template>
  <div class="grid h-40 content-center justify-center">
    <h1 class="text-3xl font-bold text-black dark:text-white">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
