<template>
  <ul>
    <span v-for="node in tree" :key="node.id">
      <li v-if="node.text">
        <a :href="`#${node.id}`">{{ node.text }}</a>
      </li>
      <table-of-content v-else :tree="node" />
    </span>
  </ul>
</template>

<script>
export default {
  name: "table-of-content",
  props: { tree: { type: Array, required: true } }
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
