<template>
  <main>
    <section
      id="cover"
      class="relative bg-cover w-full pb-8 flex justify-center"
    >
      <div
        id="cover-gradient"
        class="absolute top-0 left-0 w-full h-full"
      ></div>
      <div class="w-2/3 md:w-1/2 xl:w-1/3 font-bold z-10 flex flex-col mt-20">
        <h2 class="w-full text-xl">
          Tech and Hack blog about real cars and simulated ones, coming to you
          from the cheesy mountains of Switzerland
        </h2>
        <span class="w-full text-right">- by an amateur</span>
      </div>
    </section>

    <section class="px-6 md:px-16 lg:px-32 xl:px-56 my-4">
      <h2 class="text-center text-2xl">Latest articles</h2>
      <ul
        class="w-full flex flex-col items-start justify-center lg:flex-row lg:flex-wrap"
      >
        <li
          v-for="(article, i) in latestArticles"
          :key="i"
          class="max-w-full flex justify-center my-4 md:my-8 lg:mx-8"
        >
          <article-preview
            :date="article.date"
            :tags="article.tags"
            :img="article.img"
            :title="article.title"
            :summary="article.summary"
            :link="article.link"
            :hyvorId="article.hyvorId"
          ></article-preview>
        </li>
      </ul>
    </section>
    <!-- Matomo Image Tracker-->
    <img
      :src="
        `https://analytics.naito.one/matomo.php?idsite=2&amp;rec=1&amp;action_name=Index&amp;url=https://mrbidouille.ch/&amp;rand=${random}`
      "
      style="border:0"
      alt
    />
    <!-- End Matomo -->
  </main>
</template>
<script>
import ArticlePreview from '../components/articlepreview'
import { newestFirst } from '../assets/utils'
import articles from '../assets/articles'
import ministore from '../assets/ministore'

export default {
  head() {
    return {
      title: 'Mr. Bidouille',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tech and Hack blog about real cars and simulated ones, coming to you from the cheesy mountains of Switzerland',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'blog,cars,tech,bidouille,switzerland',
        },
      ],
    }
  },
  components: { ArticlePreview },
  computed: {
    latestArticles() {
      return newestFirst(articles.list.en.concat(articles.list.fr)).slice(0, 5)
    },
    random() {
      return ministore.MATOMO_SEED
    },
  },
}
</script>
