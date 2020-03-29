<template>
  <div
    ref="scroller"
    class="relative bg-gray-900 font-content w-screen h-screen overflow-x-hidden"
  >
    <appbar></appbar>
    <nuxt />
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
