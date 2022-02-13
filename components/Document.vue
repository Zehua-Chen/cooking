<template>
  <Container class="flex flex-row">
    <slot />
    <div>
      <div class="mr-7 w-80 top-0 sticky hidden md:block">
        <slot name="toc" />
        <slot name="options" />
      </div>
    </div>

    <article class="grow">
      <slot name="content"></slot>
    </article>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "components/Container.vue";

export default Vue.extend({
  components: { Container },
});
</script>
