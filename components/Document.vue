<template>
  <div class="container d-flex">
    <div class="me-4 pe-5 border-end d-none d-md-block">
      <TableOfContent class="pt-4 sticky-top toc" :toc="document.toc" />
    </div>
    <div class="container pt-4">
      <nuxt-content :document="document" />
    </div>
  </div>
</template>

<style scoped>
.toc {
  width: 250px;
}
</style>

<script>
import TableOfContent from "./TableOfContent.vue";

export default {
  components: { TableOfContent },
  props: {
    document: {
      type: Object,
      required: true
    }
  }
};
</script>
