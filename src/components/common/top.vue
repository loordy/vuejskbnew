<template>
  <div class="header-line">

    <!--<button @click="$router.push('/settings/')">Настройки</button>-->
    <div class="header-line_logo">
      <ButtonSlide @click.native="showBases = !showBases" :open="showBases"></ButtonSlide>
      <articleAddBtn @click.native='openModal'/>
    </div>
    <NotebookList v-if="showBases" />
    <div class="header-line_tag-list">
      <listTagItem :taglist="taglist"/>
      <div class="header-line-filter">
        <div class="header-filter-btn"  v-if="this.$route.name === 'listItems'" @click="filterListModalMethod" :class="{active:filterListModal}">
          <i class="fas fa-filter"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListTagItem from './tag/ListTagItem'
import TagItem from './tag/TagItem'
import ButtonSlide from './buttons/ButtonSlide'
import NotebookList from './notebook/NotebookList'
import articleAddBtn from './buttons/articleAddBtn'
export default {
  components: {
    ListTagItem,
    TagItem,
    ButtonSlide,
    NotebookList,
    articleAddBtn
  },
  name: 'top',
  data () {
    return {
      filterListModal: false,
      tagName: 'Привет',
      taglist: '',
      showBases: false
    }
  },
  methods: {
    viewChange (type) {
      this.$store.commit('setView', type)
    },
    filterListModalMethod (event) {
      this.filterListModal = !this.filterListModal
      this.$store.commit('openModal',
        {
          openModal: 'filterListModal',
          modalData: {
            element: this.data
          }
        })
    },
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
  },
  watch: {
    $route (to, from) {
      if (to.name === 'listItems' && to.query.tag) {
        this.taglist = this.$store.getters.getTagList.filter(item => to.query.tag.includes(item.NAME))
      } else {
        this.taglist = ''
      }
    }
  }

}
</script>

<style scoped>
  .tag-item{
    display: inline-block;
    margin: 0 0 4px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid rgba(184,184,184,.44);
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 24px;
    text-align: center;
    transition: border-color .2s ease;
    font-size:  13px;
    font-family: "ProximaNova-Regular";
    padding: 0 8px;
    text-decoration: none!important;
    vertical-align: middle;
  }

  .tag-item:hover{
    border-color: #9aa5ab;
  }

  .tag-item span{
    color:rgba(32, 32, 33, 0.7);
    padding: 0 4px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 23px;
    vertical-align: middle;
    display: inline-block;
  }

  .tag-item .icon-list{
    font-size: 14px;
    display: inline-block;
    padding: 3px 0px 3px 0px;
    line-height: 20px;
    margin-left:  0px;
    margin-right: 2px;
    transition: all ease 0.3s;
    color: #9aa5ab;
  }

  .tag-item .icon-delete{
    font-size: 12px;
    display: inline-block;
    padding: 4px 0px 1px 0px;
    line-height: 20px;
    margin-left:  5px;
    transition: all ease 0.3s;
    color: #c4c7cc;
  }

  .tag-item .icon-delete:hover{
    color: #f45e5e;
  }

  .top-tags-line .tag-item{
    margin-bottom:  4px;
  }

  .header-line{
    margin-bottom:  10px;
  }
  .header-line_logo{
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .header-line_tag-list{
    position: relative;
    padding-right:  40px;
    margin-top: 20px;
  }

  .header-line .header-line-filter{
    position: absolute;
    right: 0;
    top: 0;
  }

  .header-filter-btn{
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    color: #717a89;
    cursor: pointer;
    transition: color ease 0.3s;
  }

  .header-filter-btn.active,
  .header-filter-btn:hover{
    color: #4fabf8;
  }

  .header-line_edit{
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding-left: 18px;
    flex-wrap: wrap;
  }

  .header-line_edit .select-check{
    padding: 5px;
    cursor: pointer;
  }

  .select-check input[type="checkbox"]{
    cursor: pointer;
  }

  .header-line_edit .select-num{
    color: #979797;
    font-size: 14px;
  }

  .article-select-all{
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .header-line_edit .line-edit-item{
    margin:  0 10px;
    color: #979797;
    text-decoration: none!important;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    transition: color ease 0.3s;
  }

  .header-line_edit .line-edit-item:hover{
    color: #62717b;
  }

  .header-line_edit .line-edit-item i{
    margin-right: 5px;
    color: #e9a93f;
    font-size: 16px;
  }

  .header-line_edit .line-edit-item.add-trash i{
    color: #f76b64;
  }
  .top-tags-line {
    display: block;
    width: 100%;
    margin-left: 4px;
  }
</style>
