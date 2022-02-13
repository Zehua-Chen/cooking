<template>
  <TableOfContent class="mr-7 sidebar toc md:none" :toc="toc" />
</template>

<style lang="scss" scoped>
.toc {
  width: 250px;

  @media only screen and (max-width: 760px) {
    display: none;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import TableOfContent from "./TableOfContent.vue";

export default Vue.extend({
  components: { TableOfContent },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
});
</script>
