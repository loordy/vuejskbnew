<template>
    <div class="category category-ser">
        <div class="category-search">
            <div class="category-search_block">
                <input type="text" placeholder="Поиск по тегам" class="category-search_input" v-model="searchWord" @keyup="doSearch">
                <span class="icon_sidebar icon_arrow">
                    <span class="fas fa-arrow-up"></span>
                </span>
                <span class="icon_sidebar icon_search">
                    <span class="fas fa-search"></span>
                </span>
            </div>
        </div>
        <div class="category-tag">
            <div class="category-tag_row" v-for="tag in (searchWord ? result : taglist)" :key="tag.CODE">

              <TagItem :tagData="tag" :searchText="searchWord.split(/\s+/)"></TagItem>

                <span class="cat-num">4</span>
                <span class="icon_sidebar icon_pencil" @click="EditTagModal = !EditTagModal"><i
                        class="fas fa-pencil-alt"></i></span>
            </div>
            <!-- modal -->
            <EditTagModal v-if="EditTagModal" @close="EditTagModal= false" style="top: -45px; left:-301px;"/>
            <!-- modal end-->
        </div>
    </div>
</template>
<script>
import EditTagModal from '../modals/EditTagModal'
import TagItem from './TagItem'
import {
  mapActions as mapSearchActions,
  mapGetters as mapSearchGetters,
  getterTypes,
  actionTypes
} from 'vuex-search'
import { mapGetters } from 'vuex'

export default {
  name: 'tagListSearch',
  data () {
    return {
      searchWord: '',
      EditTagModal: false
    }
  },
  components: {
    EditTagModal,
    TagItem
  },
  computed: {
    ...mapGetters({taglist: 'getTagList'}),
    ...mapSearchGetters('tags', {
      resultIds: getterTypes.result,
      isLoading: getterTypes.isSearching
    }),
    result () {
      // return this.resultIds.map(ID => this.taglist.filter(item => item.ID === ID)[0])
      // TODO можно ограничить в дальнейшем массив поиска по 2 букве и протестировать выход из цикла по достижению кол-ва
      return this.taglist.filter(item => this.resultIds.includes(item.ID))
    }
  },
  methods: {
    ...mapSearchActions('tags', {
      searchTags: actionTypes.search
    }),
    doSearch () {
      this.searchTags(this.searchWord)
    }
  },
  mounted () {
    // this.$store.watch(this.$store.getters.getElementsListACTIVE('Y'), n => {
    //   console.log('watched: ', n)
    // })
  }
}
</script>
<style scoped>

    .category {
        width: 260px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .06);
        /*box-shadow: 0 3px 16px rgba(158,157,163,.08);*/
        /*border-radius: 5px;*/
        margin-bottom: 15px;
        padding: 20px 8px;
    }

    .category-ser {
        padding: 0;
    }

    .category-search {
        padding: 20px;
        border-bottom: 1px solid #f5f5f7;
    }

    .category-search_block {
        position: relative;
    }

    .category-search_block .icon_sidebar {
        display: inline-block;
        color: #717a89;
        font-size: 12px;
        width: 20px;
        height: 20px;
        line-height: 22px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        top: 0;
        transition: color ease 0.3s;
    }

    .category-search_block .icon_sidebar:hover {
        color: #556066;
    }

    .category-search_block .icon_arrow {
        right: 32px;
    }

    .category-search_block .icon_search {
        right: 5px;
        font-size: 14px;
    }

    .category-search_input {
        border: 0;
        background-color: transparent;
        width: 100%;
        outline: none;
        height: 20px;
        padding-right: 50px;
    }

    .category-search_input::placeholder {
        font-size: 14px;
        font-family: "ProximaNova-Light";
    }

    .category-tag {
        padding: 20px;
        position: relative;
    }

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
    }

    .tag-item:hover {
        border-color: #9aa5ab;
    }

    .tag-item span {
        color: rgba(32, 32, 33, 0.7);
        padding: 0 4px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .category-tag_row {
        align-items: center;
        position: relative;
    }

    .category-tag_row .icon_sidebar {
        width: 18px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        color: #9aa5ab;
        z-index: 3;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
        position: absolute;
        right: 0;
        top: 0;
    }

    .category-tag_row .icon_sidebar:hover {
        color: #556066;
    }

    .category-tag_row .tag-item {
        max-width: 80%;
    }

    .category-tag_row .icon_sidebar {
        display: none;
    }

    .category-tag_row:hover .icon_sidebar {
        display: inline-block;
    }

    .category-tag_row .cat-num {
        color: #9aa5ab;
        display: inline-block;
        width: 18px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0px;
        transition: opacity ease 0.3s;
    }

    .category-tag_row:hover .cat-num {
        display: none;
    }

    /*------modal css start----*/

    /*
    .tree-edit-modal{
      position: absolute;
      right: 310px;
      top: 82px;
      z-index: 20;
    } */

    /* ------modal css end---- */
</style>
