<template>
  <ul class="kb-prev-tree-list-parent">
    <li class="kb-prev-tree-list_item" v-for="curItem in getList(currentItem)" :key="curItem.CODE">
      <trItem :itemData="curItem" :status="getList(curItem.ID).length"></trItem>
      <treeItemList v-if="getList(curItem.ID).length !== 0" :treeData="treeData" :currentItem="curItem.ID"></treeItemList>
    </li>
  </ul>
</template>
<script>
import trItem from './TreeItem'
export default {
  // TODO нужнопопробовать уменьшать массив перед вызовом доч элемента чтобы опять все не перебирать, но что делать когда он проваливается внутрь и там удалять хз
  name: 'treeItemList',
  components: {trItem},
  props: {
    treeData: {},
    currentItem: ''
  },
  methods: {
    getList (currentItem) {
      if (currentItem === undefined) {
        currentItem = null
      }
      return this.treeData.filter(item => item.SECTION === currentItem)
    }
  }
}
</script>
<style scoped>
  /* --------prev tree list ------- */

  .kb-prev-tree-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

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

  .kb-prev-tree-list-parent {
    padding: 0;
    margin: 0;
    margin-top: 5px;
    list-style: none;
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
