<template>
  <div class="popup-window popup-window-no-paddings popup-window-show-animation-opacity"
       :style="'display: block; position: absolute; z-index: 1000;' + pos">
    <div class="popup-window-content">
      <div class="menu-popup" style="display: block;">
        <div class="menu-popup-items"><router-link :to="'/'+ type + '/' + ID" class="menu-popup-item disk-folder-list-context-menu-item "><span
          class="menu-popup-item-icon"></span><span class="menu-popup-item-text">Открыть</span></router-link>
        </div>
          <div class="menu-popup-items"><a class="menu-popup-item disk-folder-list-context-menu-item "><span
            class="menu-popup-item-icon"></span><span class="menu-popup-item-text" @click="redact">Редактировать</span></a>
          </div>
            <div class="menu-popup-items"><a class="menu-popup-item disk-folder-list-context-menu-item "><span
              class="menu-popup-item-icon"></span><span class="menu-popup-item-text" @click="deleteElSec">Удалить</span></a>
            </div>
      </div>
    </div>
    <sectionModal v-if="showSecMod" @close="showSecMod = false" :section_id="ID">
      <h3 slot="header">Редактировать</h3>
    </sectionModal>
    <div class="popup-window-angly popup-window-angly-left" style="top: 10px;"></div>
  </div>
</template>
<script>
import sectionModal from './setionModal'
export default {
  name: 'menuModal',
  data () {
    return {
      showSecMod: false
    }
  },
  components: {
    sectionModal
  },
  props: {
    type: '',
    ID: '',
    pos: ''
  },
  methods: {
    redact () {
      if (this.type === 'section') {
        this.showSecMod = !this.showSecMod
      } else {
        console.log('element')
      }
    },
    deleteElSec () {
      if (this.type === 'section') {
        this.$store.commit('deleteSection', this.$store.getters.getSectionByID(this.ID))
      } else {
        this.$store.commit('deleteElement', this.$store.getters.getElementByID(this.ID))
      }
    }
  }
}
</script>
<style scoped>
  .popup-window {
    background-color: #fff;
    box-shadow: 0 7px 21px rgba(83, 92, 105, 0.12), 0 -1px 6px 0 rgba(83, 92, 105, 0.06);
    padding: 10px;
    font: 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .popup-window-show-animation-opacity {
    animation: popupWindowShowAnimationOpacity 400ms;
    animation-fill-mode: both;
  }

  .popup-window-content {
    box-sizing: border-box;
    background-color: #fff;
  }

  .popup-window.popup-window-no-paddings, .popup-window.popup-window-no-paddings .popup-window-content {
    padding: 0;
  }

  body {
    color: #000;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: auto;
    margin: 0;
    padding: 0;
  }

  body {
    background: #0c588d 0 0 repeat;
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

  .popup-window-angly {
    display: none;
    height: 22px;
    position: absolute;
    overflow: hidden;
    width: 33px;
  }

  .popup-window-angly-left {
    display: block;
    left: -14px;
    top: 10px;
    height: 30px;
    width: 14px;
  }

  .menu-popup {
    padding: 8px 0;
  }

  a {
    color: #2067b0;
    text-decoration: none;
    -webkit-transition: border-bottom-color .2s linear;
    transition: border-bottom-color .2s linear;
  }

  .menu-popup-item {
    position: relative;
  }

  .menu-popup .menu-popup-item {
    background-color: transparent;
    display: block;
    cursor: pointer;
    height: 36px;
    position: relative;
    text-decoration: none;
    outline: 0;
    white-space: nowrap;
    -webkit-transition: background-color .3s linear;
    transition: background-color .3s linear;
  }

  html:not(.bx-ie) .menu-popup .disk-folder-list-context-menu-item.menu-popup-item, html:not(.bx-ie) .disk-folder-list-sorting-menu .menu-popup .menu-popup-item {
       display: flex;
     }

  .menu-popup-item-icon {
    display: inline-block;
    height: 16px;
    margin-left: 11px;
    vertical-align: middle;
    width: 19px;
  }

  .menu-popup-item-text {
    display: inline-block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #525c68;
    line-height: 36px;
    padding: 0 15px 0 9px;
    text-decoration: none;
    vertical-align: middle;
    -webkit-transition: color .2s linear;
    transition: color .2s linear;
  }

  .menu-popup-item-submenu .menu-popup-item-text {
    padding-right: 28px;
  }

  [id*='popup-window-content-menu-popup-main-grid-actions-menu'] .menu-popup-item-text, [id*='menu-popup-main_grid_submenu'] .menu-popup-item-text {
    padding-right: 22px;
  }

  html:not(.bx-ie) .disk-folder-list-context-menu-item .menu-popup-item-icon, html:not(.bx-ie) .disk-folder-list-context-menu-item .menu-popup-item-text, html:not(.bx-ie) .disk-folder-list-sorting-menu .menu-popup-item-icon, html:not(.bx-ie) .disk-folder-list-sorting-menu .menu-popup-item-text {
    flex: 1;
  }

  html:not(.bx-ie) .disk-folder-list-context-menu-item .menu-popup-item-icon, html:not(.bx-ie) .disk-folder-list-sorting-menu .menu-popup-item-icon {
    order: 1;
    margin: auto;
    width: 32px;
    position: relative;
  }

  html:not(.bx-ie) .disk-folder-list-context-menu-item .menu-popup-item-text, html:not(.bx-ie) .disk-folder-list-sorting-menu .menu-popup-item-text {
    order: 0;
    padding: 0 13px 0 20px;
  }
</style>
