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
        </div>

    </aside>

</template>
<script>
import sidebarModal from './modals/SidebarModal'
import TreeItems from './TreeItems'
export default {
  name: 'Sidebar',
  components: {
    TreeItems,
    sidebarModal

  },
  data () {
    return {
      i: 0,
      catalog: '',
      iSshowModal: false,
      addModal: false,
      ghbdasd: ''
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
    box-shadow: 0 3px 16px rgba(158,157,163,.08);
    border-radius: 5px;
    margin-bottom: 28px;
    padding: 20px 8px;
  }

  .category-ser{
    padding: 0;
  }

  .category-nav-title{
    font-family: "ProximaNova-Semibold";
    font-size: 16px;
    color: #556066;
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
    color: #9aa5ab;
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

  .cat-nav-btn:hover{
    color: #4fabf8;
  }

  .cat-nav-btn.favorite:hover{
    color: #e9a93f;
  }

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
    background-color: #f6f9fb;
  }

  .category-item-add_btn:hover .cat-item-in_icon{
    color: #3bc7ab;
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
  }

  category-search_block{
    position: relative;
  }

  .category-search_block .icon_sidebar{
    display: inline-block;
    color: #9aa5ab;
    font-size:  12px;
    width: 20px;
    height: 20px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0;
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

</style>
