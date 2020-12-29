<template>
  <div class="relative bg-gray-900 font-content w-full">
    <appbar id="top"></appbar>
    <div
      :class="
        [
          'select-none',
          'pointer-events-none',
          'absolute top-0',
          'left-0',
          'pt-10',
          'w-full',
          'z-10',
          'overflow-hidden',
          'text-gray-100',
          'transition-opacity-200',
        ].concat(isIndex ? 'opacity-1' : 'opacity-0')
      "
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
    <nuxt class="flex flex-col text-gray-100 min-h-content" />
    <subscribe-form></subscribe-form>
    <appfooter></appfooter>
  </div>
</template>
<script>
import Appbar from '../components/appbar.vue'
import Appfooter from '../components/appfooter.vue'
import SubscribeForm from '../components/subscribeform.vue'
import ministore from '../assets/ministore'

export default {
  components: {
    Appbar,
    Appfooter,
    SubscribeForm,
  },
  watch: {
    $route() {
      // update matomo seed on wach page navigation
      ministore.MATOMO_SEED = Math.random()
    },
  },
  computed: {
    isIndex() {
      return this.$route.name === 'index'
    },
  },
  beforeMount() {
    // hyvor config
    window.HYVOR_TALK_WEBSITE = 408

    // hyvor comment count reciever
    window.hyvorComments = {
      asked: [],
      recieved: {},
    }

    window.hyvorTalkCommentCount = {
      receiveData: (data) => {
        window.hyvorComments.recieved = {
          ...window.hyvorComments.recieved,
          ...data,
        }
      },
    }
  },
  mounted() {
    // look for scrolling
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame

      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame)
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params)
        })
      }
    }

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), {
      passive: true,
    })

    // Update scroll position for first time
    storeScroll()
  },
}
</script>
