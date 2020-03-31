<template>
  <main>
    <section class="w-full px-6 md:px-16 lg:px-32 xl:px-56 mt-4">
      <h2 class="text-center text-2xl">All articles</h2>
      <p class="text-center">
        Filter articles by written language.<br />
        Most articles are available in both languages
      </p>

      <!-- clever css hack to display a div based on the radio selected as well as style the relevant label -->
      <!-- buttons for switching language are relocated at the top of this div -->
      <div class="relative mt-4 pt-16">
        <div class="flex justify-center">
          <label
            for="search"
            class="flex items-center border-solid border-gray-100 border-b w-150 max-w-full"
          >
            <i class="material-icons text-xl">search</i>

            <input
              class="p-4 lg:p-2 bg-transparent flex-grow"
              type="text"
              name="search"
              id="search"
              placeholder="Search in the pile"
              v-model.trim="search"
            />
            <noscript>(The search feature requires JavaScript)</noscript>
            <i
              :class="[
                'cursor-pointer',
                'material-icons',
                'text-xl',
                search === '' ? 'hidden' : 'block',
              ]"
              @click="search = ''"
              >backspace</i
            >
          </label>
        </div>
        <!-- english -->
        <div>
          <input
            class="article-radio hidden"
            type="radio"
            id="english"
            name="language"
            value="english"
            checked
          />
          <div
            class="article-label absolute top-0 left-0 w-1/2 flex justify-end"
          >
            <label
              class="max-w-full text-center bg-gray-800 text-xl font-bold py-2 w-full md:w-auto md:px-20 rounded-l-md cursor-pointer hover:lighten-10 select-none"
              for="english"
              >English</label
            >
          </div>
          <ul
            class="article-list w-full flex flex-col items-center justify-center lg:flex-row lg:flex-wrap"
          >
            <li
              v-for="(article, i) in en"
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
        </div>

        <!-- french -->
        <div>
          <input
            class="article-radio hidden"
            type="radio"
            id="french"
            name="language"
            value="french"
          />
          <div
            class="article-label absolute top-0 right-0 w-1/2 flex justify-start"
          >
            <label
              class="text-center bg-gray-800 text-xl font-bold py-2 w-full md:w-auto md:px-20 rounded-r-md cursor-pointer hover:lighten-10 select-none"
              for="french"
              >Français</label
            >
          </div>
          <ul
            class="article-list w-full flex flex-col items-center justify-center lg:flex-row lg:flex-wrap"
          >
            <li
              v-for="(article, i) in fr"
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
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import ArticlePreview from '../components/articlepreview'
import { filterArticles } from '../assets/utils'

export default {
  components: { ArticlePreview },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    en() {
      const allEn = [
        {
          date: '2019-10-02',
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
          tags: ['en'],
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
          title: 'One another',
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
      ]

      return filterArticles(allEn, this.search)
    },
    fr() {
      const allFr = [
        {
          date: '2012-01-20',
          tags: ['fr', 'mod'],
          reactions: 14,
          img: '/images/test.jpg',
          title: 'A dieu ça va le chalet ou bien',
          summary: 'Ah ouais quand même faut un peu changer cte merde là...',
          link: '/en/test',
        },
        {
          date: '2019-02-10',
          tags: ['fr'],
          reactions: 1,
          img: '/images/test.jpg',
          title: 'A de dieu ça chleingue',
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
        {
          date: '2012-12-01',
          tags: ['fr', 'mod'],
          reactions: 10,
          img: '/images/test.jpg',
          title: 'Regarde moi ce bobet',
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
        {
          date: '2020-01-01',
          tags: ['fr'],
          reactions: 3,
          img: '/images/test.jpg',
          title: "Mais c'que ça peut roiller",
          summary:
            "This is the beginning of a the article, you won't believe what...",
          link: '/en/test',
        },
      ]

      return filterArticles(allFr, this.search)
    },
  },
}
</script>
