<template>

    <div class="popup-window popup-window-no-paddings popup-window-show-animation-opacity"
         style="z-index: 1000; position: absolute; display: block; top: 55px;">
        <div class="popup-window-content">
            <div class="menu-popup" style="display: block;">
                <div class="menu-popup-items">
                    <span class="menu-popup-item menu-popup-no-icon "><span class="menu-popup-item-icon"></span><span
                            class="menu-popup-item-text" @click="addRazdel">Новый раздел</span></span>
                  <span
                        class="menu-popup-item menu-popup-no-icon menu-popup-item-submenu"><span
                        class="menu-popup-item-icon"></span><span class="menu-popup-item-text" @click="addStatya">Новую статью</span></span>
                </div>
            </div>
        </div>
        <div class="popup-window-angly popup-window-angly-bottom" style="left: 54.9844px; margin-left: 0px;"></div>
      <sectionModal v-if="showSecMod" @close="showSecMod = false">

      </sectionModal>

      <div v-if="show" @close="show = false" class="fade_wrapp">
      </div>
      <modal v-if="show" @close="show = false">
        <h3 slot="header">Редактasdasdвать</h3>
      </modal>
    </div>
</template>
<script>
import modal from './modalAll'
import sectionModal from './setionModal'
export default {
  name: 'sidebarModal',
  data () {
    return {
      showSecMod: false,
      show: false
    }
  },
  components: {
    modal,
    sectionModal
  },
  methods: {
    addStatya () {
      this.show = !this.show
    },
    addRazdel () {
      this.showSecMod = !this.showSecMod
    }
  }
}
</script>
<style scoped>

    .popup-window.popup-window-no-paddings, .popup-window.popup-window-no-paddings .popup-window-content {
        padding: 0;
    }

    .popup-window-show-animation-opacity {
        animation: popupWindowShowAnimationOpacity 400ms;
        animation-fill-mode: both;
    }

    .popup-window {
        background-color: #fff;
        box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
        padding: 10px;
        font: 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .popup-window.popup-window-no-paddings, .popup-window.popup-window-no-paddings .popup-window-content {
        padding: 0;
    }

    .popup-window-content {
        box-sizing: border-box;
        background-color: #fff;
    }

    .menu-popup {
        padding: 8px 0;
    }

    .popup-window {
        background-color: #fff;
        box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
        padding: 10px;
        font: 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
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

    .menu-popup-item {
        position: relative;
    }

    .popup-window-angly-bottom::before {
        top: -9px;
    }

    .popup-window-angly:before {
        background-color: #fff;
        -webkit-box-shadow: 0 0 21px rgba(83, 92, 105, .13);
        box-shadow: 0 0 21px rgba(83, 92, 105, .13);
        content: '';
        height: 15px;
        position: absolute;
        left: 30px;
        top: -7px;
        transform: rotate(45deg);
        transform-origin: 50% 50%;
        width: 15px;
    }

    .menu-popup-no-icon .menu-popup-item-icon {
        display: none;
    }

    .menu-popup-item-icon {
        display: inline-block;
        height: 16px;
        margin-left: 11px;
        vertical-align: middle;
        width: 19px;
    }

    .menu-popup-item-submenu .menu-popup-item-text {
        padding-right: 28px;
    }

    .menu-popup-no-icon .menu-popup-item-text {
        padding: 0 15px;
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
</style>
