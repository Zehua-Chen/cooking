<template>
  <ul>
    <TableOfContentItem v-for="node in tree" :key="node.id" :item="node" />
  </ul>
</template>

<script>
import TableOfContentItem from "./TableOfContentItem.vue";

export default {
  name: "table-of-content",
  components: { TableOfContentItem },
  props: { toc: { type: Array, required: true } },
  computed: {
    tree() {
      let i = 0;

      const groups = [];

      while (i < this.toc.length) {
        let startItem = this.toc[i++];
        let startDepth = startItem.depth;

        groups.push(startItem);

        if (i < this.toc.length && this.toc[i].depth === startDepth) {
          continue;
        }

        const subGroup = [];
        subGroup.id = i;

        while (i < this.toc.length && this.toc[i].depth !== startDepth) {
          subGroup.push(this.toc[i++]);
        }

        groups.push(subGroup);
      }

      return groups;
    }
  }
};
</script>
