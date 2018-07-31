<template>

    <aside id="right-aside" class="m-b-30">
        <sidebarModal v-if="addModal"/>

        <nav class="category">
          <h2 class="category-nav-title aside-pt-block">Разделы</h2>

          <div class="aside-pt-block">
            <div class="category-nav_header">

              <a href="#" class="cat-nav-btn">
                <i class="fa fa-home"></i>
              </a>

              <a href="#" class="cat-nav-btn">
                <i class="far fa-copy"></i>
              </a>

              <a href="#" class="cat-nav-btn favorite">
                <i class="far fa-star"></i>
              </a>

              <a href="#" class="cat-nav-btn trash">
                <i class="far fa-trash-alt"></i>
              </a>
            </div>
          </div>

          <TreeItems/>

          <a href="" class="category-item-add_btn">
            Новый раздел
            <span class="cat-item-in_icon">
              <i class="fas fa-plus"></i>
            </span>
          </a>
        </nav>

        <div class="category category-ser">
            <div class="category-search">
              <div class="category-search_block">
                <input type="text" placeholder="Поиск по тегам" class="category-search_input">
                <span class="icon_sidebar icon_arrow">
                    <span class="fas fa-arrow-up"></span>
                </span>
                  <span class="icon_sidebar icon_search">
                    <span class="fas fa-search"></span>
                </span>
              </div>
            </div>
            <div class="category-tag">
                <div class="category-tag_row">

                  <a href="#" class="tag-item">
                    <span>обучение менеджеров</span>
                  </a>

                  <span class="cat-num">4</span>
                  <span class="icon_sidebar icon_pencil" @click="EditTagModalMethod"><i class="fas fa-pencil-alt"></i></span>

                </div>

                <div class="category-tag_row">

                  <a href="#" class="tag-item">
                    <span>обрендинг</span>
                  </a>

                  <span class="cat-num">8</span>
                  <span class="icon_sidebar icon_pencil" @click="EditTagModalMethod"><i class="fas fa-pencil-alt"></i></span>

                </div>

                <div class="category-tag_row">

                  <a href="#" class="tag-item">
                    <span>инструкции</span>
                  </a>

                  <span class="cat-num">1</span>
                  <span class="icon_sidebar icon_pencil" @click="EditTagModalMethod"><i class="fas fa-pencil-alt"></i></span>

                </div>

                <div class="category-tag_row">

                  <a href="#" class="tag-item">
                    <span>копирайтинг</span>
                  </a>

                  <span class="cat-num">7</span>
                  <span class="icon_sidebar icon_pencil" @click="EditTagModalMethod"><i class="fas fa-pencil-alt"></i></span>

                </div>

                <div class="category-tag_row">

                  <a href="#" class="tag-item">
                    <span>продажи b2b</span>
                  </a>

                  <span class="cat-num">2</span>
                  <span class="icon_sidebar icon_pencil" @click="EditTagModalMethod"><i class="fas fa-pencil-alt"></i></span>

                </div>

                <div class="category-tag_row">

                  <a href="#" class="tag-item">
                    <span>творчество</span>
                  </a>

                  <span class="cat-num">10</span>
                  <span class="icon_sidebar icon_pencil" @click="EditTagModalMethod"><i class="fas fa-pencil-alt"></i></span>

                </div>
                <!-- modal -->
                <EditTagModal v-if="EditTagModal"  @close="EditTagModal= false" style="top: -45px; left:-301px;"/>
                <!-- modal end-->
            </div>
        </div>

    </aside>

</template>
<script>
  import sidebarModal from './modals/SidebarModal'
  import TreeItems from './TreeItems'
  import EditCatModal from "./modals/EditCatModal"
  import EditTagModal from "./modals/EditTagModal.vue";

  export default {
  name: 'Sidebar',
  components: {
    EditCatModal,
    TreeItems,
    sidebarModal,
    EditTagModal

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
    },

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

  .category-ser{
    padding: 0;
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

  .category-search{
    padding: 20px;
    border-bottom:  1px solid #f5f5f7;
  }

  .category-search_block{
    position: relative;
  }

  .category-search_block .icon_sidebar{
    display: inline-block;
    color: #717a89;
    font-size:  12px;
    width: 20px;
    height: 20px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    transition: color ease 0.3s;
  }

  .category-search_block .icon_sidebar:hover{
    color: #556066;
  }

  .category-search_block .icon_arrow{
    right: 32px;
  }

  .category-search_block .icon_search{
    right:  5px;
    font-size:  14px;
  }

  .category-search_input{
    border: 0;
    background-color: transparent;
    width: 100%;
    outline: none;
    height: 20px;
    padding-right: 50px;
  }

  .category-search_input::placeholder{
    font-size: 14px;
    font-family: "ProximaNova-Light";
  }

  .category-tag{
    padding: 20px;
    position: relative;
  }

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
  }

  .tag-item:hover{
    border-color: #9aa5ab;
  }

  .tag-item span{
    color:rgba(32, 32, 33, 0.7);
    padding: 0 4px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  .category-tag_row{
    align-items: center;
    position: relative;
  }

  .category-tag_row .icon_sidebar{
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
    right:  0;
    top:  0;
  }

  .category-tag_row .icon_sidebar:hover{
    color: #556066;
  }

  .category-tag_row .tag-item{
    max-width: 80%;
  }

  .category-tag_row .icon_sidebar{
    display: none;
  }

  .category-tag_row:hover .icon_sidebar{
    display:  inline-block;
  }

  .category-tag_row .cat-num{
    color: #9aa5ab;
    display: inline-block;
    width:  18px;
    height:  26px;
    line-height:  26px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0px;
    transition: opacity ease 0.3s;
  }

  .category-tag_row:hover .cat-num{
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
