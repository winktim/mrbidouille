<template>
  <div class="fixed w-full bottom-0 text-gray-100 z-20">
    <div
      class="absolute z-bottom bottom-0 mb-12 left-0 bg-bid-magenta rounded-r-md flex shadow-lg"
    >
      <a
        href="#sub-form"
        class="material-icons p-5 md:p-4"
        @click="openWithJS($event)"
        >email</a
      >
    </div>
    <div
      id="sub-form"
      :class="
        [
          'w-full',
          'md:w-150',
          'md:rounded-r-md',
          'md:shadow-lg',
          'overflow-hidden',
          'bg-gray-850',
          'target:block',
        ].concat(showSubForm ? ['block'] : ['hidden'])
      "
    >
      <div class="flex bg-bid-magenta items-center">
        <i class="material-icons mx-4">email</i>
        <h2 class="text-xl">Email subscription</h2>
        <a
          href="#"
          class="material-icons ml-auto p-4 text-xl"
          @click="closeWithJS($event)"
          >close</a
        >
      </div>
      <form
        method="post"
        action="https://newsletter.infomaniak.com/external/submit"
        class="w-full px-8 pb-4 flex flex-col"
        target="_blank"
        @submit="showSubForm = false"
      >
        <input type="email" name="email" class="hidden" />
        <input
          type="hidden"
          name="key"
          value="eyJpdiI6IjFCZjlVd1RTYVd2Q3hQcVd4U3NvdWMwdk9ObFpzVXo2TzVJaGVESW5jYzA9IiwidmFsdWUiOiJXRVVPMVh6aVBNVk9WUWxRcW5uaDNzRFZFMnJsd0RLc0ZoblYxVzdheWprPSIsIm1hYyI6ImQwY2JjMWNiNDM5MTg1NTQwMjM1NTVhYzk3NGNkOGY3ZWY3YmYyZmJjYzU0Mjc1YTBhOGIxMGQ4YmNlNzRiNWUifQ=="
        />
        <input type="hidden" name="webform_id" value="7487" />

        <span class="text-center my-2"
          >Get notified when a new article is posted !</span
        >
        <input
          type="email"
          name="inf[1]"
          placeholder="Email"
          required
          class="p-2 bg-transparent border-solid border-2 border-gray-800 focus:border-gray-600 transition-border-100 rounded-md"
        />
        <span class="text-sm text-gray-400 py-2">
          Your email address is only used to send you the new blog posts.
          Seriously. You can unsubscribe at any time using the link included in
          every email.
        </span>
        <input
          type="submit"
          name=""
          value="Subscribe"
          class="bg-bid-magenta p-2 text-center rounded-md shadow"
        />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSubForm: false,
    }
  },
  methods: {
    openWithJS(event) {
      event.preventDefault()
      this.showSubForm = true
      return false
    },
    closeWithJS(event) {
      event.preventDefault()
      this.showSubForm = false
      return false
    },
  },
}
</script>
