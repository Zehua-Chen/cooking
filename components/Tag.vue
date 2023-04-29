<template>
  <component
    class="Tag Tag__primary"
    :is="component"
    :class="classes"
    v-bind="$attrs"
  >
    <span class="material-symbols-outlined" aria-hidden="true" v-if="active">
      check_circle
    </span>
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.Tag {
  border-radius: 50vh;
  display: inline-flex;
  align-items: center;
}

.Tag__interactive {
  cursor: pointer;
}

.Tag__big {
  font-size: 16px;
  padding: 15px;
}

.Tag__small {
  font-size: 12px;
  padding: 5px;
}

.Tag__primary {
  color: var(--cooking-primary-text);
  background: var(--cooking-primary);
}
.Tag__primaryActive {
  background: var(--cooking-primary-active);
}
</style>

<script lang="ts" setup>
export interface TagProps {
  small?: boolean;
  active?: boolean;
  component?: any;
}

const INTERACTIVE_COMPONENTS = new Set(["a", "button"]);

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

const classes = computed(() => ({
  Tag__big: !props.small,
  Tag__small: props.small,
  Tag__primaryActive: props.active,
  Tag__interactive: INTERACTIVE_COMPONENTS.has(props.component),
}));
</script>
