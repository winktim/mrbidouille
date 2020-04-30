<template>
  <main>
    <section class="w-full px-6 md:px-16 lg:px-32 xl:px-56 mt-4 mb-12">
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
            v-model="langFilter"
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
            class="article-list w-full flex flex-col items-start justify-center lg:flex-row lg:flex-wrap"
          >
            <li
              v-for="(article, i) in en"
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
        </div>

        <!-- french -->
        <div>
          <input
            class="article-radio hidden"
            type="radio"
            id="french"
            name="language"
            value="french"
            v-model="langFilter"
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
            class="article-list w-full flex flex-col items-start justify-center lg:flex-row lg:flex-wrap"
          >
            <li
              v-for="(article, i) in fr"
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
        </div>
      </div>
      <div v-if="noResults" class="flex flex-col items-center">
        <h3 class="text-2xl font-bold text-bid-magenta mt-4 md:mt-8">
          No Results
        </h3>
        <span>
          Oupsiii. Is there something I should be talking about ? Drop me an
          email !
        </span>
      </div>
    </section>
    <!-- Matomo Image Tracker-->
    <img
      :src="
        `https://analytics.naito.one/matomo.php?idsite=2&amp;rec=1&amp;action_name=Articles&amp;url=https://mrbidouille.ch/articles;&amp;rand=${random}`
      "
      style="border:0"
      alt
    />
    <!-- End Matomo -->
  </main>
</template>
<script>
import ArticlePreview from '../components/articlepreview'
import { filterArticles, newestFirst } from '../assets/utils'
import articles from '../assets/articles'
import ministore from '../assets/ministore'

export default {
  head() {
    return {
      title: 'Articles - Mr. Bidouille',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "List of all articles on Mr. Bidouille's blog",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'blog,cars,tech,list,articles',
        },
      ],
    }
  },
  components: { ArticlePreview },
  data() {
    return {
      search: '',
      langFilter: 'english',
    }
  },
  computed: {
    noResults() {
      return (
        (this.langFilter === 'english' && this.en.length === 0) ||
        (this.langFilter === 'french' && this.fr.length === 0)
      )
    },
    en() {
      return newestFirst(filterArticles(articles.list.en, this.search))
    },
    fr() {
      return newestFirst(filterArticles(articles.list.fr, this.search))
    },
    random() {
      return ministore.MATOMO_SEED
    },
  },
}
</script>
