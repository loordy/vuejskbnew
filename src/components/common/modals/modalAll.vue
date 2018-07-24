<template>
  <transition name="slide_fade">
    <div class="slide_fade_modal">
      <div class="slide_fade_modal_edit">
        <div class="kb-iframe-header">
          <div class="pagetitle-wrap">
            <div class="pagetitle-inner-container">
              <div class="pagetitle">
                <slot name="header" class="pagetitle-item">Новая статья</slot>
              </div>
            </div>
          </div>
        </div>
        <div class="slide_fade_modal_edit_workarea">
          <div class="ht_container">
            <section id="content" role="main">
              <div>
                <input class="kb-edit-input" v-model="item.NAME">
                <select v-model="selected">
                  <option disabled value="">Выберите один из вариантов</option>
                  <option v-for="section in sections" :key="section.ID">{{ section.NAME}}</option>
                </select>
              </div>

              <div id="editor">
                <textarea :value="item.DETAIL_TEXT" @input="update"></textarea>
                <div class="textarea" v-html="compiledMarkdown"></div>
              </div>
              <div class="kb-iframe-workarea kb-iframe-workarea-own-padding" id="kb-content-outer">
                <div class="kb-iframe-content">
                  <div class="popup-window-buttons">
                    <span class="popup-window-button popup-window-button-accept" @click="save">Сохранить</span>
                    <span class="webform-small-button webform-small-button-transparent" @click="updateart">Применить</span>
                    <span class="popup-window-button popup-window-button-link popup-window-button-link-cancel"
                          id="cancel_kb" @click="$emit('close')">Отмена</span>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
      <div class="slide_fade_modal_close" title="Закрыть">
        <span class="slide_fade_modal_close_inner" @click="$emit('close')"></span>
      </div>
    </div>
  </transition>
</template>

<script>
import _ from 'lodash'
import marked from 'marked'

export default {
  name: 'modalAll',
  data () {
    return {
      input: '# hello',
      selected: '',
      item: {
        DETAIL_TEXT: '',
        NAME: ''
      }
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.item.DETAIL_TEXT, {sanitize: true})
    },
    sections () {
      return this.$store.state.sections
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.item.DETAIL_TEXT = e.target.value
    }, 300),
    save () {

    },
    updateart () {

    }

  },
  mounted () {

  }
}
</script>

<style scoped>
  .kb-edit-input {
    border: 1px solid #c6cdd3;
    border-radius: 2px;
    padding: 10px 10px;
    color: #535c69;
    font-size: 15px;
    background-color: #ffffff;
    width: 50%;
    height: 35px;
    margin-top: 0px;
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    box-shadow: inset 0px 1px 2px rgba(0,0,0,0.14);
    outline: none;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  .kb-iframe-popup {
    background: #eef2f4 !important;
    padding: 0 15px 21px 21px;
  }

  .kb-iframe-header {
    background: #eef2f4;
  }

  html {
    height: 100%;
    width: 100%;
  }

  .pagetitle-wrap {
    min-height: 74px;
    box-sizing: border-box;
    position: relative;
  }

  .pagetitle {
    padding: 15px 15px 20px;
  }

  .pagetitle {
    font: 16px/16px "OpenSans-Light", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 21px 0 21px 5px;
    display: block;
    word-wrap: break-word;
  }

  .slide_fade_enter_active {
    transition: all .3s ease;
  }

  .slide_fade_leave_active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide_fade_enter, .slide_fade_leave_to
    /* .slide_fade_leave_active до версии 2.1.8 */
  {
    transform: translateX(100%);
  }

  .slide_fade_modal {
    position: fixed;
    z-index: 3000;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    bottom: 0;
  }

  .slide_fade_modal_edit {
    height: 100%;
    transform: translateX(0%);
    width: calc(100% - 64px);
    position: absolute;
    right: 0;
    top: 0;
    transition: all ease 0.3s;
    background: #eef2f4;

  }

  .slide_fade_modal_close {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    cursor: pointer;
    transition: opacity .3s;
  }

  .slide_fade_modal_close_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -18px;
    margin-left: -18px;
    width: 32px;
    height: 32px;
    border: 2px solid rgba(255, 255, 255, .7);
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .1);
    opacity: 1;
    transition: all 300ms ease;
  }

  .kb_iframe_header {
    background: #eef2f4;
  }

  .pagetitle_wrap {
    min-height: 74px;
    box-sizing: border-box;
    position: relative;
  }

  .slide_fade_modal_edit_workarea {
    margin: 15px 0 0 15px;
    background-color: #fff;
  }

  html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    height: 250px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
    height: 250px;
  }

  code {
    color: #f66;
  }
  .popup-window-buttons {
    padding: 10px 10px 0px !important;
  }
  .popup-window-buttons {
    padding: 10px 10px 0px !important;
  }
  .popup-window-buttons {
    text-align: center;
    padding: 20px 0 10px;
    position: relative;
  }
  .kb-iframe-content {
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  .kb-iframe-workarea {
    padding: 15px 0px 0px;
    background-color: #fff;
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
  .kb-iframe-popup {
    background: #eef2f4 !important;
    padding: 0 15px 21px 21px;
  }
  html {
    height: 100%;
    width: 100%;
  }
  .popup-window-button-accept, .popup-window-button-create {
    background: #bbed21;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #535c69;
  }
  .popup-window-button {
    display: inline-block;
    height: 39px;
    line-height: 39px;
    margin: 0 12px 0 0;
    border-radius: 2px;
    cursor: pointer;
    color: #535c69;
    font-family: "OpenSans-Bold",Helvetica,Arial,sans-serif;
    font-size: 12px;
    font-weight: normal;
    outline: 0;
    padding: 0 18px;
    vertical-align: middle;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    white-space: nowrap;
  }
  .popup-window-button {
    display: inline-block;
    height: 39px;
    line-height: 39px;
    margin: 0 12px 0 0;
    background: #ecedef;
    border-radius: 2px;
    cursor: pointer;
    color: #7a818a;
    font-family: "OpenSans-Bold",Helvetica,Arial,sans-serif;
    font-size: 12px;
    font-weight: normal;
    outline: 0;
    padding: 0 18px;
    vertical-align: middle;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    white-space: nowrap;
    -webkit-box-shadow: 0 0 0 1px #c6cdd3 inset;
    box-shadow: inset 0px 0px 0px 1px #c6cdd3;
    -webkit-font-smoothing: antialiased;
    -webkit-transition: background-color .2s linear,color .2s linear;
    transition: background-color .2s linear,color .2s linear;
  }
  .popup-window-button-accept, .popup-window-button-create {
    background: #bbed21;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #535c69;
  }
  .webform-button, .webform-small-button, .webform-button-upload {
    background: #ecedef;
    -webkit-box-shadow: 0 0 0 1px #c6cdd3 inset;
    box-shadow: inset 0px 0px 0px 1px #c6cdd3;
    border-radius: 2px;
    cursor: pointer;
    color: #7a818a;
    display: inline-block;
    height: 47px;
    line-height: 47px;
    margin: 0 16px 0 0;
    font-family: "OpenSans-Bold",Helvetica,Arial,sans-serif;
    font-size: 12px;
    font-weight: normal;
    outline: 0;
    padding: 0 18px;
    vertical-align: middle;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
    -webkit-transition: background-color .2s linear,color .2s linear;
    transition: background-color .2s linear,color .2s linear;
    border: 0;
  }
  .webform-small-button, .webform-button.webform-button-upload, .webform-small-button.webform-button-upload, .webform-field-upload {
    height: 39px;
    line-height: 39px;
    margin: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .webform-button-transparent, .webform-small-button-transparent {
    -webkit-box-shadow: inset 0 0 0 1px #a1a6ac;
    box-shadow: inset 0px 0px 0px 1px #a1a6ac;
    background: 0;
    color: #535c69;
  }
  .popup-window-button-link, .popup-window-button-link-cancel, .popup-window-button-link:hover, .popup-window-button-link:active {
    background: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .popup-window-button-link {
    border-bottom: 1px solid #c0c2c5;
    border-radius: 0;
    color: #535c69;
    cursor: pointer;
    height: 17px;
    line-height: 17px;
    -webkit-transition: border-bottom-color .15s linear;
    transition: border-bottom-color .15s linear;
    padding: 0;
  }
  .popup-window-button-link-cancel {
    color: #f1361b;
    border-bottom-color: #ffb4a9;
  }
  :last-child.popup-window-button {
    margin-right: 0px;
  }
</style>
