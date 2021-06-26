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
</script>
