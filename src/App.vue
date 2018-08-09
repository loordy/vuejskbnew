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
import NotebookList from './components/common/notebook/NotebookList'
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
  computed: {},
  created () {
    console.log('lol')
    this.$store.dispatch('start')
    this.$store.dispatch('setUsers')
    this.$store.dispatch('setBases')
  },
  mounted () {
    console.log('hi')
    this.$router.push('/')
  }
}

</script>

<style>
  @import 'assets/css/all.css';
  @import 'assets/css/fontawesome.css';
  @import 'assets/css/knowledgebase.css';
  @import 'assets/css/vueWysiwyg.css';
</style>
