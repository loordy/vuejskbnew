<template>
  <div class="top-tags-line">
    <tagItem v-for="tagItem in taglist" :tagData="tagItem" :key="tagItem.CODE" searchText='' class="tags-item-wrap"/>
  </div>
</template>
<script>
import TagItem from './TagItem'

export default {
  name: 'listTagItem',
  props: {
    taglist: ''
  },
  computed: {
    // TODO протестировать может этот работает лучше чем вочить роут
    taglisttest () {
      return this.$store.getters.getTagList.filter(item => this.$route.query.tag.includes(item.NAME))
    }
  },
  components: {TagItem}
}
</script>
<style scoped>
  .top-tags-line .tags-item-wrap {
    margin-right: 2px;
  }

</style>
