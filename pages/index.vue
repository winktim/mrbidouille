<template>
  <main>
    <div
      class="select-none pointer-events-none absolute top-0 left-0 pt-10 w-full z-10 overflow-hidden"
    >
      <div class="flex items-start">
        <img src="/images/arrow-1.svg" alt="Arrow 1" class="mt-2 ml-4" />
        <img src="/images/arrow-2.svg" alt="Arrow 2" class="ml-6" />
        <img
          src="/images/arrow-3.svg"
          alt="Arrow 3"
          class="ml-auto mt-2 mr-3"
        />
      </div>
      <div class="flex items-start -mt-8 text-center">
        <span class="rotate--8 p-2 pt-0">Home page</span>
        <span class="rotate--4 p-2">List of all articles</span>
        <span class="rotate-4 p-2 pt-0 ml-auto">About this blog</span>
      </div>
    </div>
    <section id="cover" class="relative w-full pb-8 flex justify-center">
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
        class="w-full flex flex-col items-center justify-center lg:flex-row lg:flex-wrap"
      >
        <li
          v-for="(article, i) in latestArticles"
          :key="i"
          class="max-w-full flex justify-center my-4 md:my-8 lg:mx-8"
        >
          <article-preview
            :date="article.date"
            :tags="article.tags"
            :reactions="article.reactions"
            :img="article.img"
            :title="article.title"
            :summary="article.summary"
            :link="article.link"
          ></article-preview>
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
import ArticlePreview from '../components/articlepreview'
export default {
  components: { ArticlePreview },
  computed: {
    latestArticles() {
      return [
        {
          date: '2019-03-20',
          tags: ['en', 'mod'],
          reactions: 2,
          img: '/images/test.jpg',
          title: 'Such a good article ma boi',
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
        {
          date: '2019-02-10',
          tags: ['fr'],
          reactions: 1,
          img: '/images/test.jpg',
          title: 'Another one',
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
        {
          date: '2012-12-01',
          tags: ['en', 'mod'],
          reactions: 10,
          img: '/images/test.jpg',
          title: 'And another one',
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
        {
          date: '2020-01-01',
          tags: ['en'],
          reactions: 3,
          img: '/images/test.jpg',
          title: 'The final one',
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
      ]
    },
  },
}
</script>
