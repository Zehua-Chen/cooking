<template>
  <List>
    <ListItem
      v-for="node in toc"
      :key="node.id"
      :class="{ 'pl-4': node.depth === 3 }"
    >
      <ListItemLink :to="to(node.id)">
        {{ node.text }}
      </ListItemLink>
    </ListItem>
  </List>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import List from "./List.vue";
import ListItem from "./ListItem.vue";
import ListItemLink from "./ListItemLink.vue";

export default defineComponent({
  name: "table-of-content",
  components: { List, ListItem, ListItemLink },
  props: { toc: { type: Array, required: true } },
  methods: {
    to(id: string): string {
      return `#${id}`;
    },
  },
});
</script>
