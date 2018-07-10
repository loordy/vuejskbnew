
<template>

  <div id="app">
    <Top></Top>
    <Middle></Middle>
    <router-view/>
    <Sidebar/>
  </div>
</template>

<script>
import Top from './components/common/header'
import Middle from './components/common/middle'
import Content from './components/mainpage'
import Sidebar from './components/common/Sidebar'
export default {
  name: 'App',
  components: {
    Top,
    Middle,
    Content,
    Sidebar
  },
  mounted () {
    this.$router.push({ path: `/` })
  }
}

</script>

<style>
  @import 'components/css/knowledgebase.css';
  @import url(https://d3ijh37r9qzozj.cloudfront.net/knowhow/wp-content/themes/knowhow/css/font-awesome.min.css?ver=4.9.6);
</style>
