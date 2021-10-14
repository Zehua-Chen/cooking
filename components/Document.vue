<template>
  <div class="document">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.document {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
</style>

<script>
export default {};
</script>
