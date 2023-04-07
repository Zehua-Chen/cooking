<template>
  <component :is="component" class="container px-4 sm:mx-auto">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { Component } from "vue";

export interface ContainerProps {
  component?: string | Component;
}

withDefaults(defineProps<ContainerProps>(), {
  component: "div",
});
</script>
