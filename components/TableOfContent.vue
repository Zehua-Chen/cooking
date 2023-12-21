<template>
  <List>
    <ListItem
      v-for="node in flatToc"
      :key="node.id"
      :class="{ TableOfContent_item__indented: node.depth === 3 }"
      variant="link"
      :to="to(node.id)"
    >
      {{ node.text }}
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

export interface TableOfContentProps {
  toc: TocLink[];
}

function to(id: string): string {
  return `#${id}`;
}

function getFlatToc(toc: TocLink[]): TocLink[] {
  return toc.reduce((flatToc, toc) => {
    flatToc.push(toc);
    flatToc.push(...(toc.children ?? []));
    return flatToc;
  }, [] as TocLink[]);
}

const props = defineProps<TableOfContentProps>();

const flatToc = computed(() => getFlatToc(props.toc));
</script>
