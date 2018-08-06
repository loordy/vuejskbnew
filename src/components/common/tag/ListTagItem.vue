<template>
  <div class="top-tags-line">
    <tagItem :tagData="{
      NAME:'Домой',
CODE: 'home',
link:'/'
}" searchText='asd'></tagItem>
    <tagItem v-for="tagItem in taglist" :tagData="tagItem" :key="tagItem.CODE" searchText='' class="tags-item-wrap"/>
  </div>
</template>
<script>
import TagItem from './TagItem'
import {mapGetters} from 'vuex'

export default {
  // TODO исправить searchText
  name: 'listTagItem',
  components: {TagItem},
  computed: {
    ...mapGetters({taglist: 'getTagList'})
  }
}
</script>
<style scoped>
  .top-tags-line .tags-item-wrap {
    margin-right: 2px;
  }

</style>
