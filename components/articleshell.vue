<template>
  <main class="flex-grow text-gray-100">
    <article class="px-6 md:px-16 lg:px-32 xl:px-56">
      <section>
        <h2 v-text="title"></h2>
        <p>Mr. Bidouille - {{ date }}</p>
        <ul>
          <li v-for="(tag, i) of tags" :key="i" v-text="tag"></li>
        </ul>
      </section>
      <!-- article content -->
      <section><slot /></section>
      <section>COMMENTS</section>
    </article>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: `${this.title} - Mr. Bidouille`,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.summary,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [...this.tags, 'tech', 'cars', 'bidouille'].join(','),
        },
      ],
    }
  },
  props: {
    date: String,
    tags: {
      type: Array,
      default: () => [],
    },
    reactions: Number,
    img: String,
    title: String,
    summary: String,
    link: String,
  },
}
</script>
