<template>
  <component
    class="rounded-full text-white inline-flex items-center"
    :is="component"
    :class="[fontClasses, colorClasses, spaceClasses]"
    v-bind="$attrs"
  >
    <span class="material-symbols-outlined" aria-hidden="true" v-if="active">
      check_circle
    </span>
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { Component } from "vue";

export interface TagProps {
  small?: boolean;
  active?: boolean;
  component?: string | Component;
}

const props = withDefaults(defineProps<TagProps>(), {
  small: false,
  active: false,
  component: "button",
});

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
    },
  ],
});

const fontClasses = computed(() => ({
  "text-base": !props.small,
  "text-xs": props.small,
}));

const spaceClasses = computed(() => ({
  "p-3": !props.small,
  "p-1": props.small,
}));

const colorClasses = computed(() => ({
  "bg-primary-700": !props.active,
  "bg-primary-500": props.active,
}));
</script>
