<template>
  <div class="kb-prev-tree-wrap">
    <div class="kb-prev-tree-header">
      <h2 class="kb-prev-tree-title">Структура базы</h2>
      <button @click='openModal' class="tree-add-item"><i class="fas fa-plus"></i>Добавить статью</button>
    </div>
    <treeItemList :treeData="treeData" :currentItem="currentID"/>
    </div>
</template>
<script>
import TreeItemList from './TreeItemList'
export default {
  name: 'prevTreeList',
  components: {TreeItemList},
  props: {
    currentID: ''
  },
  computed: {
    treeData () {
      return this.$store.getters.getElementsByParentID(this.currentID)
    }
  },
  methods: {
    openModal () {
      this.$store.commit('openModal',
        {
          openModal: 'modalAll',
          modalData: {
            element: {
              NAME: 'Новая статья',
              SECTION: this.$route.params.CODE
            }
          }
        })
    }
  }
}
</script>
<style>
  /* --------prev tree list ------- */
  .kb-prev-tree-wrap {
    margin-bottom: 30px;
  }

  .kb-prev-tree-title {
    font-family: "ProximaNova-Semibold";
    font-weight: normal;
    font-size: 22px;
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

  .tree-add-item{
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    color: #9aa5ab;
    padding: 8px 15px;
    border-radius: 5px;
    transition: all ease 0.3s;
    background-color: #ebf1f4;
  }

  .tree-add-item:hover{
    background-color: #56c1e4;
    color: #fff;
  }

  .tree-add-item:active{
    background-color: #56c1e4;
  }

  .tree-add-item i{
    font-size:  14px;
    margin-right: 5px;
  }

  .kb-prev-tree-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* ---- prev tree list  end ---- */

</style>
