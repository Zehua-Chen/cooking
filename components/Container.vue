<template>
  <component :is="component" class="Container">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.Container {
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 640px) {
    max-width: 640px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
}
</style>

<script lang="ts" setup>
export interface ContainerProps {
  component?: any;
}

withDefaults(defineProps<ContainerProps>(), {
  component: "div",
});
</script>
