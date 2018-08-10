<template>
    <button class="tree-add-item"><i class="fas fa-plus"></i>Добавить статью</button>
</template>
<script>
    export default {
        name: 'articleAddBtn'
    }
</script>
<style>
    /* --------prev tree list ------- */

    li.kb-prev-tree-list_item a {
        color: #545c6a;
        text-decoration: none !important;
        position: relative;
        padding-left: 28px;
        display: inline-block;
        font-size: 18px;
        font-family: "ProximaNova-Regular";
        transition: all ease 0.3s;
        max-width: 100%;
    }

    li.kb-prev-tree-list_item a span {
        display: block;
        white-space: nowrap;
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 33px;
    }

    li.kb-prev-tree-list_item a:hover {
        color: #2c77b1;
    }

    li.kb-prev-tree-list_item a i {
        color: #4fabf8;
        position: absolute;
        left: 0px;
        top: 50%;
        margin-top: -10px;
        font-size: 20px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: left;
        font-size: 18px;

    }

    .kb-prev-tree-list-parent li {
        list-style: none;
    }

    .kb-prev-tree-list-parent > li > a {
        font-size: 18px;
    }

    .tree-add-item {
        display: inline-block;
        text-decoration: none;
        font-size: 18px;
        color: #9aa5ab;
        padding: 8px 15px;
        border-radius: 5px;
        transition: all ease 0.3s;
        background-color: #ebf1f4;
        border: 0;
        outline: none;
    }

    .tree-add-item:hover {
        background-color: #56c1e4;
        color: #fff;
    }

    .tree-add-item:active {
        background-color: #56c1e4;
    }

    .tree-add-item i {
        font-size: 14px;
        margin-right: 5px;
    }

    /* ---- prev tree list  end ---- */

</style>