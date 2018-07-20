<template>
  <table style="width:100%;">
    <empty></empty>
    <filelist></filelist>
    <fileView></fileView>
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
