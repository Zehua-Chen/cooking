<template>
  <div class="document">
    <div class="me-4 pe-5 border-end d-none d-md-block">
      <TableOfContent class="pt-4 sidebar toc" :toc="document.toc" />
    </div>
    <div class="container pt-4">
      <article>
        <nuxt-content :document="document" />
      </article>
    </div>
  </div>
</template>

<style scoped>
.document {
  display: flex;
  flex-grow: 1;
}

.toc {
  width: 250px;
  margin: 32px;
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
