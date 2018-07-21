<template>
  <table>
    <empty v-if="countSecEl == 0"></empty>
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
    countSecEl () {
      return this.$store.getters.getCountSection(this.$route.params.id)
    }
  }
}
</script>
