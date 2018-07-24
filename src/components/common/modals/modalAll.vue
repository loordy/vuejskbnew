<template>
  <transition name="slide_fade">
    <div class="slide_fade_modal">
      <div class="slide_fade_modal_edit">
        <div class="kb-iframe-header">
          <div class="pagetitle-wrap">
            <div class="pagetitle-inner-container">
              <div class="pagetitle">
                <slot name="header" class="pagetitle-item">Редактирование</slot>
              </div>
            </div>
          </div>
        </div>
        <div class="slide_fade_modal_edit_workarea">
          <div class="ht_container">
            <section id="content" role="main">
              <div>
                <input v-model="item.NAME">
                <select v-model="selected">
                  <option disabled value="">Выберите один из вариантов</option>
                  <option v-for="section in sections" :key="section.ID">{{ section.NAME}}</option>
                </select>
              </div>

              <div id="editor">
                <textarea :value="item.DETAIL_TEXT" @input="update"></textarea>
                <div class="textarea" v-html="compiledMarkdown"></div>
              </div>
              <div>
                <button>Сохранить</button>
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
      return this.$store.getters.getSectionsByParentID()
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.item.DETAIL_TEXT = e.target.value
    }, 300)

  },
  mounted () {

  }
}
</script>

<style scoped>
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
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
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
  }

  code {
    color: #f66;
  }
</style>
