<template>
  <div class="tree-list-wrap">
    <ul class="category-nav_list">
      <li v-for="section in sections" v-bind:class="[{open: showChildren === section.ID } , classli ]"
          :key="'sidebarsec'+section.ID" :id="section.ID">
        <span v-if="getCountSections(section.ID)>0" @click="show" :id="section.ID" class="tree-caret"><i
          class="fas fa-caret-right"></i>
        </span>
        <treeItemString :section="section"/>
        <TreeItems v-if="showChildren === section.ID" :SECTION_ID="section.ID"></TreeItems>
      </li>
    </ul>
    <!-- modal -->
    <editCatModal v-if="editCatModal" @close="editCatModal= false" style="top: -60px; left:-310px;"/>
    <!-- modal end-->
  </div>
</template>
<script>
import EditCatModal from '../modals/EditCatModal'
import TreeItemString from './TreeItemString'

export default {
  name: 'TreeItems',
  components: {
    TreeItemString,
    EditCatModal
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
      return this.$store.getters.getElementsByParentID(this.SECTION_ID)
    }
  },
  methods: {
    add () {
      this.addModal = !this.addModal
    },
    getSections (SECTION_ID) {
      return this.$store.getters.getElementsByParentID(SECTION_ID)
    },
    getCountSections (SECTION_ID) {
      return this.$store.getters.getCountSection(SECTION_ID)
    },
    show (event) {
      this.showChildren = event.currentTarget.id
      this.childSection = this.$store.getters.getSectionsByParentID(event.currentTarget.id)
    },
    editCatModalMethod (event) {
      let topY = ((Math.trunc(event.pageY / 36)) * 36 - 63) + 'px'
      this.$store.commit('openModal',
        {
          openModal: 'EditCatModal',
          modalData: {
            NAME: '12',
            CODE: '111',
            ID: '11',
            top: topY,
            left: 'calc(100%-300px)'
          }
        })
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
  .tree-list-wrap {
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

  .category-nav_list .category-nav_list {
    padding-left: 10px;
  }



  .cat-nav_list-item {
    position: relative;
  }

  .cat-nav_list-item_link.active span.link_text:after {
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

  .cat-nav_list-item_link.active:hover span.link_text:after {
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

  .cat-nav_list-item.open .tree-caret i:before {
    content: "\f0d7";
  }

</style>
