<template>
    <div class="top-tags-line">
        <tagItem v-for="tagItem in listTag" :tagData="tagItem" :key="tagItem.CODE" class="tags-item-wrap"/>
    </div>
</template>
<script>
import TagItem from './TagItem'

export default {
  name: 'listTagItem',
  components: {TagItem},
  props: {
    listTag: {}
  }
}
</script>
<style scoped>
  .top-tags-line .tags-item-wrap{
    margin-right: 2px;
  }

</style>
