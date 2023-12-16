<template>
  <li class="ListItem" :class="[variantClass]">
    <slot></slot>
  </li>
</template>

<style lang="scss" scoped>
@use "styles/layers";

@layer components {
  .ListItem {
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    border-color: transparent;
  }

  .ListItem__button {
    &:hover {
      border-color: var(--cooking-primary);
    }
  }
}
</style>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    default: "plain",
    validator: (variant) => {
      switch (variant) {
        case "plain":
        case "button":
          return true;
        default:
          return false;
      }
    },
  },
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "plain":
      return "";
    case "button":
      return "ListItem__button";
  }
});
</script>
