<template>
  <div
    ref="scroller"
    class="relative bg-gray-900 font-content w-screen h-screen overflow-x-hidden"
  >
    <appbar></appbar>
    <nuxt class="flex flex-col text-gray-100 min-h-content" />
    <appfooter></appfooter>
  </div>
</template>
<script>
import Appbar from '../components/appbar.vue'
import Appfooter from '../components/appfooter.vue'
import { scrollToTop } from '../assets/utils'

export default {
  components: {
    Appbar,
    Appfooter,
  },
  watch: {
    $route() {
      // make sure the page is scrolled to the top
      scrollToTop(this.$refs.scroller)
    },
  },
}
</script>
