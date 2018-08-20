<template>

          <ul class="inner-cat-list-list">
            <li class="inner-cat-list-list-item" v-for="curItem in getList(currentItem)" :key="curItem.CODE">
              <SelectListItem :item="curItem" @click.native="setSection($event)" />
              <SelectList v-if="getList(curItem.ID).length !== 0" :currentItem="curItem.ID" :treeData="treeData"></SelectList>
            </li>
          </ul>

</template>
<script>
import SelectListItem from './SelectListItem'

export default {
  name: 'SelectList',
  components: {SelectListItem},
  inject: ['currentElement'],
  props: {
    treeData: '',
    element: '',
    currentItem: {
      default: null
    }
  },
  methods: {
    getList (currentID) {
      return this.treeData.filter(item => item.SECTION === currentID)
    },
    setSection: function (event) {
      console.log(this.currentElement)
      console.log(event)
      this.currentElement.SECTION = event.currentTarget.id
      console.log( this.currentElement.SECTION)
    }
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

    .inner-cat-list-search {
        padding: 10px 15px;
        border-bottom: 1px solid #f5f5f7;
    }

    .inner-cat-list-search-wrap {
        position: relative;
    }

    .inner-cat-list-search-wrap input {
        height: 30px;
        width: 100%;
        padding-right: 40px;
        line-height: 30px;
        border: 0;
        outline: none;
    }

    .inner-cat-list-search-wrap input::placeholder {
        font-size: 14px;
    }

    .inner-cat-list-search-wrap button {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        color: #bfc0c1;
        transition: color ease 0.3s;
        cursor: pointer;
        background-color: transparent !important;
        border: 0 !important;
        outline: none;
    }

    .inner-cat-list-search-wrap button:hover {
        color: #556066;
    }

    .inner-cat-list {
        border: 1px solid rgba(0, 0, 0, .06);
        border-radius: 5px;
        box-shadow: 0 3px 36px rgba(158, 157, 163, .54);
        margin-bottom: 10px;
        background-color: #fff;
        z-index: 100;
    }

    .inner-cat-list-list {
        list-style: none;
        padding-left: 0;
        margin: 0px;
    }

    .inner-cat-list-content {
        padding: 10px 5px;
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
        z-index: -1;
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
    }

    .select-input input {
        padding-right: 35px !important;
        cursor: pointer;
    }

</style>
