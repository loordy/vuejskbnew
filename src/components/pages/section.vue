<template>
  <table style="width:100%;">
    <empty v-show="(elements.length + sections.length) === 0"></empty>
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
  components: {fileView, Filelist, empty},
  computed: {
    elements () {
      return this.$store.getters.getElementsByParentID(this.$route.params.id)
    },
    sections () {
      return this.$store.getters.getSectionsByParentID(this.$route.params.id)
    }
  }
}
</script>
