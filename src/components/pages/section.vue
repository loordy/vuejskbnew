<template>
  <table style="width:100%;">
    <empty v-if="(elements.length + sections.length) === 0"></empty>
    <filelist v-else-if="this.$store.state.settings.viewType === 'list'"></filelist>
    <fileView v-else></fileView>
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
