<template>
  <footer class="w-full border-solid border-gray-800 border-t">
    <p
      class="mx-auto px-8 my-10 text-gray-500 text-center flex flex-wrap justify-center"
    >
      <span>&copy; 2020 Mr. Bidouille - All rights reserved.</span>
      <span class="mx-1">I am not a professional.</span>
      <span>
        No garanty is given for the information I provide, use it at your own
        risk.
      </span>
      <span class="ml-1"
        >Contact: <hiddenmail class="text-bid-pink"></hiddenmail
      ></span>
    </p>
  </footer>
</template>
<script>
import Hiddenmail from './hiddenmail'
export default {
  components: {
    Hiddenmail,
  },
}
</script>
