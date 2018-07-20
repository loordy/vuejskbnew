<template>
  <table style="width:100%;">
    <empty></empty>
    <filelist v-show="this.$store.state.settings.viewType === 'grid'"></filelist>
    <fileView v-show="this.$store.state.settings.viewType === 'list'"></fileView>
    sdfgsdfjasdasdasdsdj
    <test/>
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
