<template>
  <figure :title="alt" class="w-full">
    <a class="w-full h-full" :href="src"
      ><img class="w-full" :src="finalSrc" :alt="alt"
    /></a>
    <span v-text="description"></span>
  </figure>
</template>
<script>
import { insertInArray } from '../assets/utils'
export default {
  props: {
    src: String,
    alt: String,
    description: String,
  },
  data() {
    return {
      // replace extension by png
      // add placeholder subfolder
      finalSrc: insertInArray(
        this.src
          .replace(/\.(\w){3,4}$/g, '.png')
          .split('/')
          .reverse(),
        1,
        'placeholder'
      )
        .reverse()
        .join('/'),
    }
  },
  mounted() {
    setTimeout(() => {
      this.finalSrc = this.src
    }, 0)
  },
}
</script>
