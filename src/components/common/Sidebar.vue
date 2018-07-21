<template>
    <aside>
        <div class="pagetitle-container pagetitle-align-right-container">
          <span id="bx-disk-add-menu" class="ui-btn ui-btn-primary ui-btn-dropdown" @click="add">Добавить</span>
        </div>
        <div v-if="addModal">
          <sidebarModal/>
        </div>
        <div id="categories_3" class="widget widget_categories clearfix"><h4 class="widget_title">
          <button id="show_modal" @click="showModal">Добавить раздел</button>
          <button @click="addStatya">Добавить статью</button>
          <div v-if="show" @close="show = false" class="fade_wrapp">

          </div>
          <modal v-if="show" @close="show = false">
            <h3 slot="header">Редактasdasdвать</h3>
          </modal>
          <span>Разделы</span></h4>
            <ul  v-for="section in sections" :key="section.ID">
                <li class="cat_item cat_item_2"><router-link :to='"/section/" + section.ID' :title="section.NAME">{{ section.NAME }}</router-link></li>
            </ul>
        </div>

        <div id="st_articles_widget_2" class="widget st_articles_widget clearfix"><h4 class="widget_title"><span>Последние статьи</span>
        </h4>
            <ul class="clearfix">
                <li v-for="item in items" :key ="item.ID" class="clearfix format_standard"><router-link :to="'/item/'+item.ID" rel="bookmark">{{ item.NAME }}</router-link></li>
            </ul>
        </div>
    </aside>
</template>
<script>
  import modal from './modalAll'
  import SidebarModal from "./SidebarModal";

  export default {
  name: 'Sidebar',
  components: {
    SidebarModal,
    modal
  },
  data () {
    return {
      i: 0,
      catalog: '',
      iSshowModal: false,
      addModal: false,
      show: false
    }
  },
  computed: {
    items () {
      return this.$store.state.elements
    },
    sections () {
      return this.$store.state.sections
    }
  },
  methods: {
    add () {
      this.addModal = !this.addModal
    },
    addStatya () {
      // this.show = !this.show
      this.$store.commit('AddNewElement', {
        'ID': this.$route.params.id + 100,
        'SECTION_ID': this.$route.params.id,
        'NAME': 'novayastatya ' + this.$route.params.id})
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
  }
}
</script>

<style scoped>
  .fade_wrapp{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
  }
  .pagetitle-align-right-container {
    margin-left: auto;
  }

  .pagetitle-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .ui-btn.ui-btn-dropdown, .ui-btn-double.ui-btn-dropdown .ui-btn-main {
    padding-right: 29px;
  }
  .ui-btn-primary.ui-btn, .ui-btn-primary.ui-btn-double .ui-btn-main, .ui-btn-primary.ui-btn-double .ui-btn-extra {
    background-color: #3bc8f5;
    color: #fff;
  }
  .ui-btn+.ui-btn, .ui-btn+.ui-btn-double, .ui-btn-double+.ui-btn, .ui-btn-double+.ui-btn-double {
    margin-left: 12px;
  }
  .ui-btn, .ui-btn-main {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 19px;
    height: 39px;
    outline: 0;
    border: 0;
    border-radius: 2px;
    background-color:#868d95;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    font: 600 12px/39px "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    cursor: pointer;
    transition: 160ms color linear,160ms background-color linear,160ms opacity linear,160ms padding linear;
  }
  .bx-layout-inner-inner-table {
    border: 0;
    border-spacing: 0;
    height: 100%;
    table-layout: fixed;
    width: 100%;
  }
  ui-btn.ui-btn-dropdown:before, .ui-btn.ui-btn-danger.ui-btn-dropdown:before, .ui-btn.ui-btn-primary.ui-btn-dropdown:before, .ui-btn.ui-btn-default.ui-btn-dropdown:before, .ui-btn-double.ui-btn-dropdown .ui-btn-main:before, .ui-btn-double.ui-btn-danger.ui-btn-dropdown .ui-btn-main:before, .ui-btn-double.ui-btn-primary.ui-btn-dropdown .ui-btn-main:before, .ui-btn-double.ui-btn-default.ui-btn-dropdown .ui-btn-main:before {
    border-color: #fff;
  }
  .ui-btn.ui-btn-dropdown:before, .ui-btn-double.ui-btn-dropdown .ui-btn-main:before {
    position: absolute;
    top: 50%;
    right: 13px;
    display: block;
    box-sizing: border-box;
    margin-top: -2.5px;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    content: '';
    transform: translateY(-50%) rotate(-45deg);
  }
  .ui-btn.ui-btn-dropdown, .ui-btn-double.ui-btn-dropdown .ui-btn-main {
    padding-right: 29px;
  }

  .ui-btn-primary.ui-btn, .ui-btn-primary.ui-btn-double .ui-btn-main, .ui-btn-primary.ui-btn-double .ui-btn-extra {
    background-color: #3bc8f5;
    color: #fff;
  }

  .menu-popup-item-upload-file {
    position: relative;
  }
</style>
