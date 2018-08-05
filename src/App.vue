<template>
  <div id="app">
    <div class="main">
      <Top></Top>
      <router-view/>
    </div>
    <Sidebar/>
    <bottom></bottom>
  </div>
</template>
<script>
import Top from './components/common/top'
import bottom from './components/common/bottom'
import Sidebar from './components/common/Sidebar'
import NotebookList from './components/common/NotebookList'
import PrevTreeList from './components/common/modals/PrevTreeList'
export default {
  name: 'App',
  components: {
    PrevTreeList,
    NotebookList,
    Top,
    Sidebar,
    bottom
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
  @import 'assets/css/all.css';
  @import 'assets/css/fontawesome.css';
  @import 'assets/css/knowledgebase.css';
</style>
