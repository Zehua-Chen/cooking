<template>
  <button
    class="rounded-full text-white inline-flex items-center"
    :class="[fontClasses, colorClasses, spaceClasses]"
    v-bind="$attrs"
  >
    <span v-if="active" class="material-symbols-outlined"> check_circle </span>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  small: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
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
