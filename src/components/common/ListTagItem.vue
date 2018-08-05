<template>
    <div class="top-tags-line">
        <tsgItem v-for="(tagItem, i) in listTag" :tagData="tagItem" :key="i" class="tags-item-wrap"/>
    </div>
</template>
<script>
import TsgItem from './TagItem'

export default {
  name: 'listTagItem',
  components: {TsgItem},
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
