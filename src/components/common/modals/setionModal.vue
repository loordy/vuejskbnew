<template>
  <transition name="modal">
  <div class="popup-window popup-window-with-titlebar" style="left: 488px; top: 207.5px; display: block; position: absolute; z-index: 1100;">
    <div class="popup-window-titlebar"><span
      class="popup-window-titlebar-text">Создание папки</span></div>
    <div class="popup-window-content" >
      <div class="bx-disk-popup-container" style="display: block;">
        <div class="bx-disk-popup-content" style="padding-top: 30px; padding-bottom: 70px;"><label
          class="bx-disk-popup-label"><span class="req">*</span>Название</label><input class="bx-disk-popup-input"
                                                                                       style="font-size: 16px; margin-top: 10px;"
                                                                                       type="text"></div>
      </div>
    </div>
    <span class="popup-window-close-icon popup-window-titlebar-close-icon"></span>
    <div class="popup-window-buttons"><span class=" ui-btn ui-btn-success">Создать</span><span
      class=" ui-btn ui-btn-link">Закрыть</span></div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'setionModal'
}
</script>

<style scoped>
  .popup-window {
    background-color: #fff;
    box-shadow: 0 7px 21px rgba(83, 92, 105, 0.12), 0 -1px 6px 0 rgba(83, 92, 105, 0.06);
    padding: 10px;
    font: 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .popup-window.popup-window-with-titlebar {
    padding: 0 10px 10px;
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

  .popup-window-titlebar {
    height: 49px;
  }

  .popup-window-content {
    box-sizing: border-box;
    background-color: #fff;
  }

  .popup-window-with-titlebar .popup-window-content, .popup-window-content-gray .popup-window-content {
    background-color: #eef2f4;
  }

  .popup-window-with-titlebar .popup-window-content {
    padding: 20px;
  }

  .popup-window-close-icon {
    cursor: pointer;
    height: 27px;
    outline: 0;
    opacity: 0.5;
    position: absolute;
    right: 0;
    top: 0;
    width: 27px;
    -webkit-transition: opacity .2s linear;
    transition: opacity .2s linear;
  }

  .popup-window-titlebar-close-icon {
    top: 12px;
    right: 10px;
  }

  .popup-window-buttons {
    text-align: center;
    padding: 20px 0 10px;
    position: relative;
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
    background-color: var(--ui-btn-bg-default);
    color: var(--ui-btn-inner-color-light);
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    font: 600 12px/39px "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    cursor: pointer;
    transition: 160ms color linear, 160ms background-color linear, 160ms opacity linear, 160ms padding linear;
  }

  .ui-btn-success.ui-btn, .ui-btn-success.ui-btn-double .ui-btn-main, .ui-btn-success.ui-btn-double .ui-btn-extra {
    background-color: var(--ui-btn-bg-success);
    color: #535c69;
  }

  .ui-btn + .ui-btn, .ui-btn + .ui-btn-double, .ui-btn-double + .ui-btn, .ui-btn-double + .ui-btn-double {
    margin-left: 12px;
  }

  .ui-btn-link.ui-btn, .ui-btn-link.ui-btn-double .ui-btn-main, .ui-btn-link.ui-btn-double .ui-btn-extra {
    background-color: transparent;
    color: #535c69;
  }

  .ui-btn-link.ui-btn {
    padding-right: 0;
    padding-left: 0;
  }

  .bx-disk-popup-content, .bx-disk-popup-content-small {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    min-width: 500px;
    color: #000;
    border-radius: 2px;
    background-color: #edf1f3;
  }

  .bx-disk-popup-label {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    opacity: 0.6;
    color: #000;
  }

  input {
    outline: 0;
  }

  .bx-disk-popup-input {
    display: block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    vertical-align: middle;
    border: 1px solid #c5cdd3;
    border-radius: 2px;
    background-color: #fff;
    padding: 0 10px;
  }

  span.req {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    opacity: 0.6;
    color: #ab2424;
  }

  .popup-window-titlebar-text, .popup-window-titlebar-text-version {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #80868e;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    max-width: 100%;
    line-height: 49px;
    overflow: hidden;
    padding: 0 30px 0 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
