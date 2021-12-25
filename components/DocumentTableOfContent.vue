<template>
  <div class="me-4 pe-5 d-none d-md-block">
    <TableOfContent class="pt-4 sidebar toc" :toc="toc" />
  </div>
</template>

<style lang="scss" scoped>
.toc {
  width: 250px;
  margin: 32px;

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
      required: true
    }
  }
});
</script>
