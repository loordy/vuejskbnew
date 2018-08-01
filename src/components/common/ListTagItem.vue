<template>
    <div class="top-tags-line">
        <tsgItem v-for="(tagItem, i) in listTag" :tagData="tagItem" :key="i"/>
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

    .tag-item span {
        color: rgba(32, 32, 33, 0.7);
        padding: 0 4px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 23px;
        vertical-align: middle;
        display: inline-block;
    }

    .select-check input[type="checkbox"] {
        cursor: pointer;
    }

    .header-line_edit .line-edit-item i {
        margin-right: 5px;
        color: #e9a93f;
        font-size: 16px;
    }

    .header-line_edit .line-edit-item.add-trash i {
        color: #f76b64;
    }
</style>
