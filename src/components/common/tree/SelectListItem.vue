<template>
<div class="inner-cat-list-list-item_link"><span>{{ item.NAME }}</span></div>
</template>
<script>
export default {
  name: 'SelectListItem',
  props: {
    item: ''
  }
}
</script>
<style scoped>

    .tag-item span {
        color: #556066;
        padding: 0 4px;
    }

    /*------modal css start----*/

    /* ------modal css end---- */


    .inner-cat-list-list {
        list-style: none;
        padding-left: 0;
        margin: 0px;
    }

    .inner-cat-list-list {
        overflow: hidden;
    }

    .inner-cat-list-list-item .inner-cat-list-list-item_link {
        color: #979797;
        font-size: 14px;
        display: block;
        padding: 8px;
        cursor: pointer;
        position: relative;
        font-family: "ProximaNova-Regular";
    }

    .inner-cat-list-list-item > .inner-cat-list-list-item_link:hover {
        background-color: #f6f9fb;
        color: #333;
    }

    .inner-cat-list-list-item > .inner-cat-list-list-item_link:hover:before {
        content: "";
        position: absolute;
        left: -100%;
        top: 0;
        right: 0;
        bottom: 0;
        max-width: 246px;
        min-width: 246px;
        background-color: #f6f9fb;
        z-index: 1;
    }

    .inner-cat-list-list .inner-cat-list-list {
        padding-left: 15px;
        overflow: visible;
    }

    .inner-cat-list-list-item_link span {
        display: block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        z-index: 5;
        position: relative;
    }

    .select-input input {
        padding-right: 35px !important;
        cursor: pointer;
    }

</style>
