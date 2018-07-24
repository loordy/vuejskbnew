<template>
    <aside>
        <div class="pagetitle-container pagetitle-align-right-container">
          <span id="bx-disk-add-menu" class="ui-btn ui-btn-primary ui-btn-dropdown" @click="add">Добавить</span>
        </div>
        <sidebarModal v-if="addModal"/>
        <TreeItems></TreeItems>
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
      addModal: false
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
  aside{
    width:200px;
    float:right;
  }
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

  .bx-disk-sidebar-section {
    text-align: center;
    border-bottom: 1px solid #edeef0;
    font-family: OpenSans-Light,sans-serif;
  }
  .bx-disk-table-sidebar-cell {
    position: relative;
    width: 200px;
    vertical-align: top;
    border-left: 1px solid #edeef0;
  }
  .bx-disk-container.posr > table {
    table-layout: fixed;
  }
  .bx-disk-container {
    background: #fff;
  }
  .posr {
    position: relative;
  }
  .workarea-content-paddings {
    overflow-x: auto;
    overflow-y: visible;
  }
  #workarea-content {
    overflow: hidden;
    background-color: #fff;
    height: 100%;
  }
  .page-header, #sidebar, #workarea-content {
    opacity: 0.96;
  }
  #workarea {
    padding: 0;
    height: 100%;
    overflow-y: hidden;
  }
  .bx-layout-inner-inner-cont {
    height: 100%;
    width: 100%;
  }
  td.bx-layout-inner-inner-cont {
    vertical-align: top;
  }
  .bx-layout-inner-inner-table {
    border: 0;
    border-spacing: 0px;
    height: 100%;
    table-layout: fixed;
    width: 100%;
  }
  .bx-layout-inner-inner-table {
    background-color: transparent;
  }
  .bx-layout-inner-left, .bx-layout-inner-center {
    height: 0px;
    padding: 0;
    text-align: left;
    vertical-align: top;
  }
  .bx-layout-inner-top-row .bx-layout-inner-left, .bx-layout-inner-top-row .bx-layout-inner-center {
    height: 100%;
  }
  .bx-layout-inner-table {
    background-color: #eef2f4;
    border: medium none;
    border-spacing: 0px;
    height: 100%;
    table-layout: fixed;
    width: 100%;
  }
  .bx-layout-inner-table {
    background: transparent;
  }
  .bx-layout-cont {
    height: 100%;
    padding: 0;
    text-align: left;
    vertical-align: top;
  }
  .bx-layout-table {
    border: medium none;
    border-spacing: 0px;
    height: 100%;
    width: 100%;
  }
  body {
    font-family: "RobotoRegular",sans-serif !important;
    color: #38464f !important;
  }
  body {
    color: #000;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: auto;
    margin: 0;
    padding: 0;
  }
  body {
   /* background: #0c588d url(pattern-presents.svg) 0 0 repeat; */
  }
  html {
    height: 100%;
    width: 100%;
  }
  :root {
    --ui-btn-size-xs: 26px;
    --ui-btn-size-sm: 31px;
    --ui-btn-size-md: 39px;
    --ui-btn-size-lg: 47px;
    --ui-btn-inner-color-dark: #535c69;
    --ui-btn-inner-color-light: #fff;
    --ui-btn-bg-default: #868d95;
    --ui-btn-bg-default-hover: #5b6573;
    --ui-btn-bg-default-active: #3b506e;
    --ui-btn-bg-success: #bbed21;
    --ui-btn-bg-success-hover: #d2f95f;
    --ui-btn-bg-success-active: #b2e232;
    --ui-btn-bg-success-light: #e1f0b1;
    --ui-btn-bg-success-light-hover: #eaf5c5;
    --ui-btn-bg-success-light-active: #d3e59a;
    --ui-btn-bg-danger: #f1361a;
    --ui-btn-bg-danger-hover: #cc1c00;
    --ui-btn-bg-danger-active: #d24430;
    --ui-btn-bg-danger-light: #ffccca;
    --ui-btn-bg-danger-light-hover: #ffdcdb;
    --ui-btn-bg-danger-light-active: #f2b6b3;
    --ui-btn-bg-primary: #3bc8f5;
    --ui-btn-bg-primary-hover: #3eddff;
    --ui-btn-bg-primary-active: #12b1e3;
    --ui-btn-bg-secondary: #c5e7f4;
    --ui-btn-bg-secondary-hover: #d1eef9;
    --ui-btn-bg-secondary-active: #aee0f2;
    --ui-btn-bg-light: transparent;
    --ui-btn-bg-light-hover: #f6f8f9;
    --ui-btn-bg-light-active: #d6f1fb;
    --ui-btn-icon-color: black;
  }

  div.bx-disk-folder-container table {
    width: 100%;
    max-width: 500px;
    table-layout: fixed;
  }

  div.bx-disk-folder-container td {
    height: 24px;
    vertical-align: middle;
  }
  .bx-disk-wf-folder-name span {
    display: block;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 500px;
    padding-left: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
  }
  a {
    color: #2067b0;
    text-decoration: none;
    -webkit-transition: border-bottom-color .2s linear;
    transition: border-bottom-color .2s linear;
  }
  .bx-disk-wf-folder-icon span {
    display: block;
    width: 16px;
    height: 16px;
   background: transparent url(../images/icons_files2.png) no-repeat -72px 0;
  }
  .bx-disk-wood-folder {
    padding: 0;
  }
  .bx-disk-wood-folder .bx-disk-wood-folder {
    margin: 0;
    padding-left: 20px;
  }
  .bx-disk-wf-arrow span {
    display: block;
    width: 17px;
    height: 17px;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    opacity: 0.8;
    border-radius: 50%;
    /* background: url(/bitrix/images/disk/sprite.png) no-repeat 5px -89px; */
  }
  li.bx-disk-folder-container.bx-disk-close > div .bx-disk-wf-arrow span {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  .bx-disk-wf-arrow span {
    display: block;
    width: 17px;
    height: 17px;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    opacity: .8;
    border-radius: 50%;
    background: url(../images/sprite.png) no-repeat 5px -89px;
  }
</style>
