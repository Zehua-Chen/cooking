<template>
  <component :is="component" class="container px-4 sm:mx-auto">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
export interface ContainerProps {
  component?: any;
}

withDefaults(defineProps<ContainerProps>(), {
  component: "div",
});
</script>
