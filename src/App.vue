<template>
  <div id="app">
    <Top></Top>
    <!--<div>
      <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </div>-->
    <router-view/>
    <Sidebar/>
    <Middle></Middle>
  </div>
</template>

<script>
import Top from './components/common/header'
import Middle from './components/common/middle'
import Content from './components/mainpage'
import Sidebar from './components/common/Sidebar'
/* import store from './store' */
export default {
  name: 'App',
  components: {
    Top,
    Middle,
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
    /* this.GetElements()
    this.GetSections()
    this.GetUsers()
    this.GetCurrentUser()
    this.$router.push({ path: `/` }) */
    console.log('mounted app.vue')
  }
}

</script>

<style>
  /* @import 'components/css/knowledgebase.css' */
  @import url(https://d3ijh37r9qzozj.cloudfront.net/knowhow/wp-content/themes/knowhow/css/font-awesome.min.css?ver=4.9.6);
</style>
