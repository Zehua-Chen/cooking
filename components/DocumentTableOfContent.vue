<template>
  <!--
    https://developer.mozilla.org/en-US/docs/Web/CSS/position
    The element is positioned according to the normal flow of the document, and
    then offset relative to its nearest scrolling ancestor and containing block
    (nearest block-level ancestor)
  -->
  <div class="mr-7 hidden md:block">
    <TableOfContent class="w-80 top-0 sticky" :toc="toc" />
  </div>
</template>

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
