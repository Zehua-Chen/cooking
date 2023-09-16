<template>
  <TextContent class="Document">
    <slot />
    <div>
      <div class="Document_toc">
        <slot name="toc" />
        <slot name="options" />
      </div>
    </div>

    <article class="Document_content">
      <slot name="content"></slot>
    </article>
  </TextContent>
</template>

<style lang="scss" scoped>
@use "styles/layers";

@layer components {
  .Document {
    display: flex;
    flex-direction: row;
  }

  .Document_toc {
    display: none;
    position: sticky;
    top: 0;
    margin-top: 10px;
    width: 320px;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .Document_content {
    flex-grow: 1;
  }
}
</style>

<script lang="ts" setup>
import TextContent from "components/TextContent.vue";
</script>
