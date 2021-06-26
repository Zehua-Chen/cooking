<template>
  <div class="list-group">
    <a
      class="list-group-item list-group-item-action"
      v-for="node in toc"
      :key="node.id"
      :class="{ 'ps-4': node.depth === 3 }"
      :href="`#${node.id}`"
    >
      {{ node.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "table-of-content",
  props: { toc: { type: Array, required: true } }
};

export function makeTree(toc) {
  let i = 0;

  const groups = [];

  while (i < toc.length) {
    let startItem = toc[i++];
    let startDepth = startItem.depth;

    groups.push(startItem);

    if (i < toc.length && toc[i].depth === startDepth) {
      continue;
    }

    const subGroup = [];
    subGroup.id = i;

    while (i < toc.length && toc[i].depth !== startDepth) {
      subGroup.push(toc[i++]);
    }

    groups.push(subGroup);
  }

  return groups;
}
</script>
