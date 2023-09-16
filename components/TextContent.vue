<template>
  <component :is="component" class="TextContent">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
@use "styles/responsive" as *;
@use "styles/layers";

@layer components {
  .TextContent {
    width: 100%;
    padding: 0 20px;

    @media screen and (min-width: $tablet-min) {
      margin-left: auto;
      margin-right: auto;
    }

    @media screen and (min-width: $tablet-min) {
      max-width: 640px;
    }

    @media screen and (min-width: 1024px) {
      max-width: 1024px;
    }
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
