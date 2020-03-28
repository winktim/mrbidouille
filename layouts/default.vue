<template>
  <div
    ref="scroller"
    class="bg-gray-900 font-content w-screen h-screen overflow-x-hidden"
  >
    <appbar></appbar>
    <main class="flex-grow text-gray-100 px-6 md:px-16 lg:px-32 xl:px-56">
      <nuxt />
    </main>
  </div>
</template>
<script>
import Appbar from '../components/appbar.vue'
import { scrollToTop } from '../assets/utils'

export default {
  components: {
    Appbar,
  },
  watch: {
    $route() {
      // make sure the page is scrolled to the top
      scrollToTop(this.$refs.scroller)
    },
  },
}
</script>
