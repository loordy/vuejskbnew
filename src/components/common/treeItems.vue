<template>
  <div class="tree-list-wrap">
    <ul class="category-nav_list">
      <li v-for="section in sections"  v-bind:class="[{open: showChildren === section.ID } , classli ]" :key="'sidebarsec'+section.ID" :id="section.ID">
        <span v-if="getCountSections(section.ID)>0" @click="show" :id="section.ID" class="tree-caret"><i
          class="fas fa-caret-right"></i>
        </span>
        <router-link class="cat-nav_list-item_link" :to="'/section/'+ section.CODE"><span class="link_text">{{ section.NAME }}</span>
          <div class="icon_sidebar_block">
              <span class="icon_sidebar icon_pencil" @click="editCatModalMethod">
                <i class="fas fa-pencil-alt"></i>
              </span>
            <span class="icon_sidebar icon_menu ">
                <i class="fas fa-ellipsis-v"></i>
              </span>
          </div>
        </router-link>
        <TreeItems v-if="showChildren === section.ID" :SECTION_ID="section.ID"></TreeItems>
      </li>
    </ul>
    <!-- modal -->
    <editCatModal v-if="editCatModal"  @close="editCatModal= false" style="top: -60px; left:-310px;"/>
    <!-- modal end-->
  </div>
</template>
<script>
import EditCatModal from "./modals/EditCatModal";
export default {
  name: 'TreeItems',
  components: {
    EditCatModal,
  },
  data () {
    return {
      showChildren: false,
      childSection: '',
      classli: 'cat-nav_list-item tree-item',
      editCatModal: false
    }
  },
  props: {
    SECTION_ID: {}

  },
  computed: {
    sections () {
      return this.$store.getters.getSectionsByParentID(this.SECTION_ID)
    }
  },
  methods: {
    add () {
      this.addModal = !this.addModal
    },
    getSections (SECTION_ID) {
      return this.$store.getters.getSectionsByParentID(SECTION_ID)
    },
    getCountSections (SECTION_ID) {
      return this.$store.getters.getCountSection(SECTION_ID)
    },
    show (event) {
      this.showChildren = event.currentTarget.id
      this.childSection = this.$store.getters.getSectionsByParentID(event.currentTarget.id)
    },
    editCatModalMethod (event) {
      this.editCatModal = !this.editCatModal
      console.log(event)
      console.log(event.currentTarget)
    },
    showModal () {
      this.iSshowModal = true
    },
    closeModal () {
      this.iSshowModal = false
    }
  }
}
</script>
<style scoped>
  .tree-list-wrap{
    position: relative;
  }
  
  .category-nav_list {
    margin: 0;
  }

  .category-nav_list {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .category-nav_list .category-nav_list{
    padding-left: 10px;
  }

  .cat-nav_list-item_link {
    display: block;
    color: #556066;
    font-family: "ProximaNova-Light";
    font-size: 16px;
    text-decoration: none;
    line-height: 36px;
    padding: 0 16px;
    padding-right: 30px;
    position: relative;
  }

  .cat-nav_list-item_link:hover {
    background-color: #f6f9fb;
  }

  .cat-nav_list-item_link span.link_text{
    display: block;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .cat-nav_list-item_link:hover:before{
    content: "";
    background-color: transparent;
  }

  .cat-nav_list-item_link:hover:before{
    content: "";
    position: absolute;
    left: -100%;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 246px;
    min-width: 246px;
    background-color: #f6f9fb;
    z-index: 1;
  }

  .cat-nav_list-item {
    position: relative;
  }

  .cat-nav_list-item_link.active{
    color: #61a3da;
    font-family: "ProximaNova-Regular";
  }

  .cat-nav_list-item_link.active span.link_text:after{
    content: "";
    background-color: #61a3da;
    border-radius: 500px;
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -4px;
    margin-left: -36px;
    width: 7px;
    height: 7px;
  }

  .cat-nav_list-item_link.active:hover span.link_text:after{
    display: none;
  }

  .cat-nav_list-item .tree-caret {
    display: block;
    position: absolute;
    left: 2px;
    top: 11px;
    width: 15px;
    height: 15px;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #9aa5ab;
    cursor: pointer;
    z-index: 2;
  }

  .cat-nav_list-item.open .tree-caret i:before{
    content: "\f0d7";
  }

  .cat-nav_list-item_link .icon_sidebar_block{
    position: absolute;
    right: 5px;
    top: 0;
    opacity: 0;
  }

  .cat-nav_list-item_link:hover .icon_sidebar_block{
    opacity: 1;
  }

  .icon_sidebar{
    width: 18px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #9aa5ab;
    z-index: 3;
    display: inline-block;
    font-size:  14px;
    cursor: pointer;
    transition: color ease 0.3s;
  }

  .icon_menu:hover{
    cursor: move;
  }

  .icon_sidebar:hover{
    color: #556066;
  }

</style>
