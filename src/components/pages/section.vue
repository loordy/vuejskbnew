<template>
  <table>
    <empty v-if="countSecEl == 0"></empty>
    <filelist v-else-if="this.$store.state.settings.viewType === 'list'"></filelist>
    <fileView v-else></fileView>
  </table>
</template>

<script>
import Filelist from '../common/catalog/Filelist'
import fileView from '../common/catalog/FileView'
import empty from '../common/catalog/empty'
export default {
  name: 'mainpage',
  components: {fileView, Filelist, empty},
  computed: {
    countSecEl () {
      return this.$store.getters.getCountAllSecEl(this.$route.params.id)
    }
  }
}
</script>
