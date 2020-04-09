<template>
  <main class="flex-grow text-gray-100">
    <article>
      <section>
        <div
          class="bg-cover bg-center bg-no-repeat w-full h-50 md:h-76 lg:h-100"
          :style="`background-image: url(${img});`"
        ></div>
        <h2
          class="text-center text-2xl lg:text-3xl font-bold mt-8"
          v-text="title"
        ></h2>
        <ul
          class="flashy-pills-list flex flex-wrap items-center justify-center"
        >
          <li
            class="flashy-pill uppercase text-sm font-bold border-solid border-gray-800 border-2 rounded-full px-4 py-1 m-1"
            v-for="(tag, i) in tags"
            v-text="tag"
            :key="i"
          ></li>
        </ul>
        <p class="text-center text-gray-400 my-2">Mr. Bidouille - {{ date }}</p>
      </section>
      <!-- article content -->
      <section class="px-6 md:px-16 lg:px-32 xl:px-0 xl:mx-auto xl:w-300">
        <slot />
        <!-- comments -->
        <div id="hyvor-talk-view">
          Reading and writing comments requires JavaScript
        </div>
        <script
          async
          type="text/javascript"
          src="https://talk.hyvor.com/web-api/embed"
        ></script>
      </section>
    </article>
    <!-- Matomo Image Tracker-->
    <img
      :src="
        `https://analytics.naito.one/matomo.php?idsite=2&amp;rec=1&amp;action_name=${title}&amp;url=https://mrbidouille.ch${link}&amp;rand=${random}`
      "
      style="border:0"
      alt
    />
    <!-- End Matomo -->
  </main>
</template>
<script>
import ministore from '../assets/ministore'
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
    img: String,
    title: String,
    summary: String,
    link: String,
    hyvorId: Number,
  },
  beforeMount() {
    // write or overwrite the global config
    window.HYVOR_TALK_CONFIG = {
      url: 'https://mrbidouille.ch' + this.link,
      id: this.hyvorId,
    }
  },
  computed: {
    random() {
      return ministore.MATOMO_SEED
    },
  },
}
</script>
