<template>
  <h1 class="PageTitle">
    {{ title }}
  </h1>
</template>

<style lang="scss">
.PageTitle {
  text-align: center;

  font-size: 30px;
  font-weight: 700;
  padding: 70px 0;
}
</style>

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
