<template>
  <table style="width:100%;">
    <filelist v-show="this.$store.state.settings.viewType === 'list'"></filelist>
    <fileView v-show="this.$store.state.settings.viewType === 'grid'"></fileView>
  </table>
</template>

<script>
import Filelist from '../Filelist'
import fileView from '../FileView'
import empty from '../empty'
export default {
  name: 'mainpage',
  components: {fileView, Filelist, empty}
}
</script>
