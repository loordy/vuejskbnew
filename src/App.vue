<template>
  <div id="app">
    <div class="main">
      <Top></Top>
      <router-view/>
    </div>
    <Sidebar/>
  </div>
</template>
<script>
import Top from './components/common/top'
import Sidebar from './components/common/Sidebar'
import fbSection from './components/pages/section'
export default {
  name: 'App',
  components: {
    fbSection,
    Top,
    Sidebar
  },
  data () {
    return {
      detailArticle: false
    }
  },
  methods: {
    detailArticleModalMethod (event) {
      this.detailArticle = !this.detailArticle
    }
  },
  mounted () {
    console.log('mounted app.vue')
    this.$store.dispatch('installEntity')
    this.$store.dispatch('setElements')
    this.$store.dispatch('setSections')
    this.$router.push({path: `/`})
  }
}

</script>

<style>
  @import './components/css/all.css';
  @import './components/css/fontawesome.css';
  @import './components/css/knowledgebase.css';
</style>
