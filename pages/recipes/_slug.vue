<template>
  <div>
    <Commandbar>
      <NuxtLink class="command" to="/recipes">Back</NuxtLink>
    </Commandbar>
    <Document>
      <DocumentTableOfContent :toc="page.toc" />

      <article class="container pt-4">
        <h1>{{ page.title }}</h1>
        <div v-if="page.ingredients">
          <h2>材料</h2>
          <table>
            <thead>
              <th>材料</th>
              <th>量</th>
              <th>其他</th>
            </thead>
            <tbody>
              <tr v-for="ingredient in page.ingredients" :key="ingredient.name">
                <td>{{ ingredient.name }}</td>
                <td>{{ quantity(ingredient) }}</td>
                <td>{{ ingredient.notes ? ingredient.notes : "" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nuxt-content :document="page" />
      </article>
    </Document>
  </div>
</template>

<script>
import Commandbar from "../../components/Commandbar.vue";
import Document from "../../components/Document.vue";
import DocumentTableOfContent from "../../components/DocumentTableOfContent.vue";

export default {
  components: { Commandbar, Document, DocumentTableOfContent },
  methods: {
    quantity(ingredient) {
      if (ingredient.quantity && ingredient.unit) {
        return `${ingredient.quantity} (${ingredient.unit})`;
      }

      if (ingredient.quantity) {
        return `${ingredient.quantity}`;
      }

      return "";
    }
  },
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = await $content("recipes/", slug).fetch();

    return {
      page
    };
  }
};
</script>
