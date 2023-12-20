<template>
  <li class="ListItem">
    <button v-if="variant === 'button'">
      <slot></slot>
    </button>
    <NuxtLink v-else-if="variant === 'link'" class="ListItem_link" :to="to">
      <slot></slot>
    </NuxtLink>
  </li>
</template>

<style lang="scss" scoped>
@use "styles/layers";
@use "styles/anchor";

@layer components {
  .ListItem {
    display: flex;
  }
  .ListItem_link {
    @extend %AnchorWithoutFocus;

    flex: 1 1 auto;
    padding: 10px;
    text-decoration: none;
    color: var(--cooking-text);
    border: solid 1px transparent;
    border-radius: 5px;

    &:hover,
    &:focus,
    &:focus-visible {
      border-color: var(--cooking-primary);
    }
  }
}
</style>

<script lang="ts" setup>
const props = defineProps({
  to: String,
  variant: {
    type: String,
    default: "plain",
    validator: (variant) => {
      switch (variant) {
        case "plain":
        case "button":
        case "link":
          return true;
        default:
          return false;
      }
    },
  },
});
</script>
