<template>
  <article>
    <h1>{{ page.title }}</h1>
    <div>
      <ul>
        <li v-for="heading in page.toc" :key="heading.id">
          <a :href="`#${heading.id}`">{{ heading.text }}</a>
        </li>
      </ul>
    </div>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
class IDGenerationContext {
  mapping = {};
  nextID = 0;

  id(heading) {
    if (!this.mapping[heading]) {
      this.mapping[heading] = this.nextID++;
    }

    return this.mapping[heading];
  }
}

function traverse(node, context) {
  if (node.type === "element" && node.tag === "h1") {
    node.props.id = `${Math.random()}`;
    console.log(node.children);
    //   return;
  }

  if (node.children) {
    for (let child of node.children) {
      traverse(child);
    }
  }
}

function generateIDs(page) {
  traverse(page.body, new IDGenerationContext());
  return page;
}

export default {
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = await $content("recipes/", slug).fetch();

    return {
      page
    };
  }
};
</script>
