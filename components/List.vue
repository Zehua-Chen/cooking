<template>
  <ul class="List">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
@use "styles/layers";

@layer components {
  .List {
    list-style: none;
    padding: 0;
  }
}
</style>
