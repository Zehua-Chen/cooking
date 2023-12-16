<template>
  <List>
    <ListItem
      v-for="node in toc"
      :key="node.id"
      :class="{ TableOfContent_item__indented: node.depth === 3 }"
    >
      <ListItemLink :to="to(node.id)">
        {{ node.text }}
      </ListItemLink>
    </ListItem>
  </List>
</template>

<style lang="scss" scoped>
@use "styles/layers";

@layer components {
  .TableOfContent_item__indented {
    padding-left: 20px;
  }
}
</style>

<script lang="ts" setup>
import { TocLink } from "@nuxt/content/dist/runtime/types";
import List from "./List.vue";
import ListItem from "./ListItem.vue";
import ListItemLink from "./ListItemLink.vue";

export interface TableOfContentProps {
  toc: TocLink[];
}

function to(id: string): string {
  return `#${id}`;
}

defineProps<TableOfContentProps>();
</script>
