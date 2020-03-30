<template>
  <nuxt-link :to="link" class="max-w-full w-150" :aria-label="title">
    <article class="w-full">
      <div class="flex items-center justify-between">
        <span v-text="date"></span>
        <ul class="flex">
          <li
            class="bg-gray-800 rounded-full py-1 px-4 mx-1 leading-tight"
            v-for="(tag, i) in tags"
            v-text="tag"
            :key="i"
          ></li>
        </ul>
        <span class="text-right"> {{ reactions }} reactions</span>
      </div>
      <div
        class="bg-cover w-full h-50 my-2 rounded-md"
        :style="`background-image: url(${img});`"
      ></div>
      <h3 class="text-2xl font-bold text-bid-magenta" v-text="title"></h3>
      <p v-text="summary"></p>
    </article>
  </nuxt-link>
</template>
<script>
export default {
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
