<template>
  <List>
    <ListItem
      component="a"
      variant="button"
      v-for="node in toc"
      :componentProps="{ href: `#${node.id}` }"
      :key="node.id"
      :class="{ 'ms-4': node.depth === 3 }"
    >
      {{ node.text }}
    </ListItem>
  </List>
</template>

<script>
import List from "./List.vue";
import ListItem from "./ListItem.vue";

export default {
  name: "table-of-content",
  components: { List, ListItem },
  props: { toc: { type: Array, required: true } }
};
</script>
