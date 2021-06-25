<template>
  <div>
    <li v-if="item.text">
      <a :href="`#${item.id}`">{{ item.text }}</a>
    </li>
    <TableOfContent v-else :toc="item" />
  </div>
</template>

<script>
import TableOfContent from "./TableOfContent.vue";

export default {
  name: "table-of-content-item",
  props: ["item"],
  components: { TableOfContent },
  computed: {
    isObject() {
      console.log(this.item instanceof Object);
      return this.item instanceof Object;
    },
    isArray() {
      return this.item instanceof Array;
    }
  }
};
</script>
