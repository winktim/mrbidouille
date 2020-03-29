<template>
  <div
    class="select-none flex items-center font-heading w-full h-14 bid-gradient text-gray-100 shadow-2xl"
  >
    <nuxt-link
      to="/"
      class="material-icons text-2xl p-4 text-gray-300 hover:text-gray-100 transition-color-150"
      >home</nuxt-link
    >
    <nuxt-link
      to="/articles"
      class="material-icons text-2xl p-4 text-gray-300 hover:text-gray-100 transition-color-150"
      >view_list</nuxt-link
    >
    <div class="flex-grow flex h-full items-center md:mx-auto md:flex-grow-0">
      <h1 class="text-xl">Mr. Bidouille</h1>
      <img class="ml-2 mb-3" src="/images/swiss.svg" alt="Swiss Flag" />
    </div>
    <nuxt-link
      to="/about"
      class="material-icons text-2xl p-4 text-gray-300 hover:text-gray-100 transition-color-150"
      >info</nuxt-link
    >
  </div>
</template>
