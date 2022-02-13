<template>
  <Container class="flex flex-row grow">
    <slot />
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "components/Container.vue";

export default Vue.extend({
  components: { Container },
});
</script>
