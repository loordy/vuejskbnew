<template>
  <div class="entry-content" v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'element',
  data () {
    return {
      hi: ''
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.$store.getters.getElementByCODE(this.$route.params.id).DETAIL_TEXT, { sanitize: true })
    }
  }
}
</script>

<style scoped>

</style>
