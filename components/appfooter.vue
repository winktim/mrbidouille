<template>
  <footer class="w-full flex justify-center">
    <p
      class="mx-6 md:mx-16 lg:mx-32 xl:mx-56 py-10 w-full border-solid border-gray-800 border-t text-gray-500 text-center flex flex-wrap justify-center"
    >
      <span>&copy; 2020 Mr. Bidouille - All rights reserved.</span>
      <span class="mx-1">I am not a professional.</span>
      <span>
        No guaranty is given for the information I provide, use it at your own
        risk.
      </span>
      <span class="ml-1"
        >Contact: <hiddenmail class="nice-link"></hiddenmail
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
