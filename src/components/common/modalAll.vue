<template>
  <transition name="slide-fade">
      <div class="slide-fade_modal">
          <div class="slide-fade_modal_edit">
            <div class="kb-iframe-header">
              <div class="pagetitle-wrap">
                <div class="pagetitle-inner-container">
                  <div class="pagetitle">
                    <slot name="header" class="pagetitle-item">Редактирование</slot>
                  </div>
                  <div class="slide-fade_modal_edit_workarea">
                    <div class="ht-container">
                      <section id="content" role="main">
                        <div>
                          <input v-model="item.NAME">
                          <select v-model="selected">
                            <option disabled value="">Выберите один из вариантов</option>
                            <option v-for="section in sections" :key="section.ID">{{ section.NAME}}</option>
                          </select>
                        </div>
                        <textarea :value="item.DETAIL_TEXT" @input="update"></textarea>
                        <div class="textarea" v-html="compiledMarkdown"></div>
                        <div>
                          <button v-on:click="Save">Сохранить</button>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="slide-fade_modal_close" title="Закрыть">
           <span class="slide-fade_modal_close_inner" @click="$emit('close')"></span>
          </div>
      </div>
  </transition>
</template>

<script>
import _ from 'lodash'
import marked from 'marked'
import { GetElements, UpdateItem, GetSections } from '../../api/index'
export default {
  name: 'modalAll',
  data () {
    return {
      input: '# hello',
      selected: '',
      sections: '',
      item: {
        DETAIL_TEXT: '',
        NAME: ''
      },
      test: [
        {
          'id': '10',
          'section_id': '12',
          'name': 'Закладка «Настройки»',
          'preview_text': 'На закладке Настройки указываются пути к лендингам относительно вашего домена',
          'detail_text': 'На закладке Настройки указываются пути к лендингам относительно вашего домена, т.е. сайта главного модуля. Именно по такому адресу созданная страница будет доступна после публикации. Подробнее процесс настройки описан в учебном курсе.'
        },
        {
          'id': '11',
          'section_id': '',
          'name': 'Закладка «Доступ»',
          'preview_text': 'Закладка позволяет настроить права на доступ к модулю для всех имеющихся в системе групп пользователей.',
          'detail_text': 'Закладка позволяет настроить права на доступ к модулю для всех имеющихся в системе групп пользователей.'
        },
        {
          'id': '12',
          'section_id': '',
          'name': 'Кнопки управления',
          'preview_text': 'Сохранить - Сохранение параметров модуля.',
          'detail_text': 'Сохранить - Сохранение параметров модуля. Применить - Применение внесенных изменений без выхода из формы настроек. По умолчанию - Перезапись всех настроек значениями по умолчанию.'
        }
      ]
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.item.DETAIL_TEXT, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.item.DETAIL_TEXT = e.target.value
    }, 300),
    GetElements () {
      var self = this
      const params = {
        ID: self.$route.params.id
      }
      console.log(self.$route)
      GetElements(params, function (data) {
        data = data[0]
        self.item = data
        console.log(data)
      })
      console.log('self')
      console.log(self.item)
    },
    GetSections () {
      var self = this
      GetSections(null, function (data) {
        self.sections = data
      })
    },
    Save () {
      var self = this
      UpdateItem(this.item, function (data) {
        console.log(data)
      })
      console.log('self')
      console.log(self.items)
    }
  },
  mounted () {
    this.GetElements()
    this.GetSections()
  }
}
</script>

<style scoped>
  .fade-wrapp{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(100%);
  }

  .slide-fade_modal{
    position: fixed;
    z-index: 3000;
    top:0;
    right:0;
    display: block;
    width: 100%;
    height: 100%;
    bottom: 0;
  }
  .slide-fade_modal_edit{
    height: 100%;
    transform: translateX(0%);
    width: calc(100% - 64px);
    position: absolute;
    right: 0;
    top: 0;
    transition: all ease 0.3s;
    background: #eef2f4;

  }
  .slide-fade_modal_close{
    position: absolute;
    top: 0;
    left: 0px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    cursor: pointer;
    transition: opacity .3s;
  }
  .slide-fade_modal_close_inner{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -18px;
    margin-left: -18px;
    width: 32px;
    height: 32px;
    border: 2px solid rgba(255,255,255,.7);
    border-radius: 50%;
    background-color: rgba(0,0,0,.1);
    opacity: 1;
    transition: all 300ms ease;
  }
  .kb-iframe-header{
    background: #eef2f4;
  }
  .pagetitle-wrap {
    min-height: 74px;
    box-sizing: border-box;
    position: relative;
  }
  .pagetitle {
    font: 26px/26px "OpenSans-Light",Helvetica,Arial,sans-serif;
    margin: 0;
    margin: 21px 0 21px 5px;
    display: block;
    word-wrap: break-word;
  }
  .slide-fade_modal_edit_workarea{
    margin: 15px 0px 0px 15px;
    background-color: #fff;
  }
</style>
