<template>
  <figure :title="alt">
    <a :href="src"><img :src="src" :alt="alt"/></a>
    <span v-text="description"></span>
  </figure>
</template>
<script>
export default {
  props: {
    src: String,
    alt: String,
    description: String,
  },
}
</script>
