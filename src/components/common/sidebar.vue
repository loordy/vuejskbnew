<template>

    <aside id="right-aside" class="m-b-30">
        <nav class="category">
          <h2 class="category-nav-title aside-pt-block">Разделы</h2>

          <div class="aside-pt-block">
            <div class="category-nav_header">

              <router-link to="/" class="cat-nav-btn">
                <i class="fa fa-home"></i>
              </router-link>

              <router-link to="/listItems/?q=favorites&tag=Домой&tag=Привет" class="cat-nav-btn">
                <i class="far fa-copy"></i>
              </router-link>

              <router-link to="/listItems/?q=favorites" class="cat-nav-btn favorite">
                <i class="far fa-star"></i>
              </router-link>

              <router-link to="/listItems/?trunk=N" class="cat-nav-btn trash">
                <i class="far fa-trash-alt"></i>
              </router-link>
            </div>
          </div>

          <TreeItems/>

          <!--<a href="" class="category-item-add_btn">-->
            <!--Новый раздел-->
            <!--<span class="cat-item-in_icon">-->
              <!--<i class="fas fa-plus"></i>-->
            <!--</span>-->
          <!--</a>-->
        </nav>

      <tagListSearch/>

    </aside>

</template>
<script>
import TreeItems from './tree/treeItems'
import TagListSearch from './tag/TagListSearch'

export default {
  name: 'Sidebar',
  components: {
    TagListSearch,
    TreeItems
  },
  data () {
    return {
      i: 0,
      catalog: '',
      iSshowModal: false,
      addModal: false,
      EditTagModal: false
    }
  },
  methods: {
    add () {
      this.addModal = !this.addModal
    },
    addStatya () {
      this.show = !this.show
    },
    addRazdel () {
      this.showSecMod = !this.showSecMod
    },
    getSections (SECTION_ID) {
      return this.$store.getters.getSectionsByParentID(SECTION_ID)
    },
    getCountSections (SECTION_ID) {
      return this.$store.getters.getCountSection(SECTION_ID)
    },
    showChildren (SECTION_ID) {

    },
    EditTagModalMethod (event) {
      this.EditTagModal = !this.EditTagModal
      console.log(event)
      console.log(event.currentTarget)
    },
    /* GetSections () {
      let self = this
      GetSections(null, function (data) {
        self.sections = data
      })
    }, */
    showModal () {
      this.iSshowModal = true
    },
    closeModal () {
      this.iSshowModal = false
    }

  },
  mounted () {
    this.getSections()
  }
}
</script>

<style scoped>

  .category{
    width: 260px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.06);
    /*box-shadow: 0 3px 16px rgba(158,157,163,.08);*/
    /*border-radius: 5px;*/
    margin-bottom: 15px;
    padding: 20px 8px;
  }

  .category-nav-title{
    font-family: "ProximaNova-Semibold";
    font-size: 16px;
    color: #545c6a;
    line-height: 1;
    position: relative;
    margin: 0;
    margin-bottom: 15px;
  }

  .cat-nav-btn{
    width: 25px;
    height: 28px;
    font-size: 18px;
    text-align: center;
    line-height: 28px;
    text-decoration: none!important;
    color: #717a89;
    display: block;
    transition: all ease 0.3s;
  }

  .aside-pt-block{
    padding: 0 12px;
  }

  .category-nav_header{
    padding-top: 8px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 8px;
  }

  .cat-nav-btn.active,
  .cat-nav-btn:hover{
    color: #4fabf8;
  }

  .cat-nav-btn.favorite.active,
  .cat-nav-btn.favorite:hover{
    color: #e9a93f;
  }

  .cat-nav-btn.trash.active,
  .cat-nav-btn.trash:hover{
    color: #f35e5e;
  }

  .category-nav_header{
    display: flex;
    justify-content: space-between;
  }

  .category-item-add_btn{
    color: #9aa5ab;
    display: block;
    font-family: "ProximaNova-Light";
    font-size: 16px;
    text-decoration: none;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 4px;
    position: relative;
  }

  .category-item-add_btn:hover{
    background-color: #ebf1f4;
  }

  .category-item-add_btn:hover .cat-item-in_icon{
    color: #36b5df;
  }

  .cat-item-in_icon{
    position: absolute;
    right: 15px;
    top: 0;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #9aa5ab;
    font-size: 12px;
  }

  .m-b-30{
    margin-bottom: 30px;
  }

  .tag-item span{
    color:rgba(32, 32, 33, 0.7);
    padding: 0 4px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  /*------modal css start----*/

  /*
  .tree-edit-modal{
    position: absolute;
    right: 310px;
    top: 82px;
    z-index: 20;
  } */

  .tree-edit-modal .category-item-add_btn{
    position: relative;
    margin-top: 35px;
  }

  .tree-edit-modal .category-item-add_btn:after{
    content: "";
    position: absolute;
    left: 0;
    top: -12px;
    right: 0;
    z-index: 2;
    height: 1px;
    background-color: #f5f5f7;
  }

  /* ------modal css end---- */
</style>
