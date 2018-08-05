<template>
    <li class="kb-prev-tree-list_item">
        <a href="#"><i
                class="far fa-file"></i><span>7 правил делового общения в мессенджерах</span></a>
    </li>
</template>
<script>
    export default {
        name: 'treeItem'
    }
</script>
<style>
    /* --------prev tree list ------- */

    li.kb-prev-tree-list_item {
        margin-left: 20px;
        position: relative;
    }

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

    li.kb-prev-tree-list_item:before {
        content: '';
        display: block;
        border-top: 1px solid #bdc3c7;
        border-left: 1px solid #bdc3c7;
        height: 100%;
        width: 1rem;
        position: absolute;
        bottom: -1.1rem;
        left: -0.9rem;
        left: -1.2rem;
        z-index: 0;
    }

    li.kb-prev-tree-list_item:first-child:after {
        content: '';
        display: block;
        border-left: 1px solid #bdc3c7;
        height: 100%;
        width: 1rem;
        position: absolute;
        bottom: 0.9rem;
        left: -0.9rem;
        left: -1.2rem;
        z-index: 0;
    }

    li.kb-prev-tree-list_item:last-child:before {
        border-left: none;
    }

    /* ---- prev tree list  end ---- */

</style>