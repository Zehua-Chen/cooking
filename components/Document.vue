<template>
  <TextContent class="Document">
    <slot />
    <div class="Document_toc">
      <slot name="toc" />
      <slot name="options" />
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
    position: relative;
    display: flex;
    flex-direction: row;
    // make sure the table of content is not full height; otherwise sticky
    // does not work
    align-items: flex-start;
  }

  .Document_toc {
    flex: 0 1 auto;
    position: sticky;
    top: 0;
    padding-top: 10px;
    padding-right: 20px;
    min-width: 240px;

    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .Document_content {
    flex: 1 1 auto;
  }
}
</style>

<script lang="ts" setup>
import TextContent from "components/TextContent.vue";
</script>
