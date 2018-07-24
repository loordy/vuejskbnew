<template>
  <div id="app">
    <div class="main">
    <Top></Top>
    <!--<div>
      <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </div>-->
    <router-view/>
    </div>
    <Sidebar/>
  </div>
</template>

<script>
import Top from './components/common/header'
import Content from './components/pages/section'
import Sidebar from './components/common/Sidebar'
/* import store from './store' */
export default {
  name: 'App',
  components: {
    Top,
    Content,
    Sidebar
  },
  /*  methods: {
    GetElements () {
      let self = store
      GetElements(null, function (data) {
        self.commit('setElements', data)
      })
    },
    GetSections () {
      let self = store
      GetSections(null, function (data) {
        self.commit('setSections', data)
      })
    },
    GetUsers () {
      let self = store
      GetUsers(null, function (data) {
        self.commit('setUsers', data)
      })
    },
    GetCurrentUser () {
      let self = store
      GetCurrentUser(null, function (data) {
        self.commit('currentUser', data)
      })
    }
  }, */
  mounted () {
    console.log('mounted app.vue')
    /* this.$store.dispatch('setElements')
    this.$store.dispatch('setSections')
    this.$router.push({ path: `/` }) */
  }
}

</script>

<style>
  .main{
    width: calc(100% - 200px);
    float:left;
  }
@import url(https://d3ijh37r9qzozj.cloudfront.net/knowhow/wp-content/themes/knowhow/css/font-awesome.min.css?ver=4.9.6);
</style>
