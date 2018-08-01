<template>
  <div>
      <span :to="link" class="tag-item">
          <span class="icon-list"><i class="fa fa-home"></i></span>
          <span>{{ tagTitle }}</span>
          <span class="icon-delete"><i class="fas fa-times"></i></span>
      </span>
  </div>
</template>
<script>
export default {
  name: 'tsgItem',
  props: {
    tagData: {}
  }
}
</script>
<style scoped>
    .tag-item {
        display: inline-block;
        margin: 0 0 4px;
        overflow: hidden;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid rgba(184, 184, 184, .44);
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 24px;
        text-align: center;
        transition: border-color .2s ease;
        font-size: 13px;
        font-family: "ProximaNova-Regular";
        padding: 0 8px;
        text-decoration: none !important;
        vertical-align: middle;
    }

    .tag-item:hover {
        border-color: #9aa5ab;
    }

    .tag-item span {
        color: rgba(32, 32, 33, 0.7);
        padding: 0 4px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 23px;
        vertical-align: middle;
        display: inline-block;
    }

    .tag-item .icon-list {
        font-size: 14px;
        display: inline-block;
        padding: 3px 0px 3px 0px;
        line-height: 20px;
        margin-left: 0px;
        margin-right: 2px;
        transition: all ease 0.3s;
        color: #9aa5ab;
    }

    .tag-item .icon-delete {
        font-size: 12px;
        display: inline-block;
        padding: 4px 0px 1px 0px;
        line-height: 20px;
        margin-left: 5px;
        transition: all ease 0.3s;
        color: #c4c7cc;
    }

    .tag-item .icon-delete:hover {
        color: #f45e5e;
    }

    .top-tags-line .tag-item {
        margin-bottom: 4px;
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
