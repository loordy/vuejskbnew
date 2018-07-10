
<template>
    <nav>
      <ul>
        <li><router-link to='/'>{{ msg }}</router-link></li>
        <li><router-link to='/markdown/30'>mardown!</router-link></li>
        <li><router-link to='/item/1'>item!</router-link></li>
        <li><router-link to='/section/1'>section!</router-link></li>
        <li><router-link to='/settings/'>Settings</router-link></li>
      </ul>
      <button v-on:click="CurrentUserShow()">X</button>
    </nav>
</template>
<script>
/* global BX24 */
export default {
  data () {
    return {
      msg: 'Welcome to Your Vueersdfsd.js App'
    }
  },
  mounted () {
    var self = this
    BX24.callMethod('user.current', {}, function (res) {
      console.log(res.data())
      self.msg = res.data().NAME + ' ' + res.data().LAST_NAME
    })
  },
  methods: {
    CurrentUserShow () {
      var self = this
      BX24.callMethod('user.current', {}, function (res) {
        console.log(res.data())
        self.msg = res.data().NAME + ' ' + res.data().LAST_NAME
      })
    }
  }
}
</script>

<style scoped>
ul{
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  color: #ff8a56;
  margin-top: 60px;
}
</style>
