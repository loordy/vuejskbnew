<template>
  <table style="width:100%;">
    <empty v-show=""></empty>
    <filelist></filelist>
    <fileView></fileView>
  </table>
</template>

<script>
import Filelist from '../Filelist'
import fileView from '../FileView'
import empty from '../empty'
import main from '../common/mainModal'
import test from '../pages/test'
export default {
  name: 'mainpage',
  components: {fileView, Filelist, empty, main, test}
}
</script>
