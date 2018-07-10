<template>
<div>
  <button  v-on:click="Install()">Установить бз</button>
  <button  v-on:click="Adddemodannie()">Загрузить демо данные</button>
  <button  v-on:click="Adddemostatya()">Добавить демо статью</button>
  <button  v-on:click="Adddemorazdel()">Добавить демо раздел</button>
  <button  v-on:click="RenewStore()">Обновить хранилище</button>
  <button  v-on:click="GetSect()">ПолучитьРазделы</button>
  <button  v-on:click="GetEl()">ПолучитьИтемы</button>
  <button  v-on:click="GetCat()">ПолучитьКаталог</button>
  <button  v-on:click="Adddemorazdel()">Добавить демо раздел</button>
  <button  v-on:click="RenewStore()">Обновить хранилище</button>
  <button  v-on:click="DelEntyty()">Удалить хранилище</button>

</div>
</template>

<script>
import { GetCatalogArray, GetSections, GetElements } from '../api/index'

/* global BX24 */
export default {
  name: 'settings',
  data () {
    return {
      i: 0,
      sections: '',
      items: '',
      catalog: ''
    }
  },
  methods: {
    Adddemodannie () {

    },
    DelEntyty () {
      BX24.callMethod('entity.delete', {'ENTITY': 'md_knowledge'})
    },
    Adddemostatya () {
      BX24.callMethod('entity.item.add', {
        ENTITY: 'md_knowledge',
        DATE_ACTIVE_FROM: new Date(),
        NAME: 'Demo statya',
        DETAIL_TEXT: 'Вы установили приложение База Знаний для Bitrix24.\n' +
        '\n' +
        'Приложение позволяет Вам создавать и редактировать статьи, следить за историей изменений и делиться знаниями с другими сотрудниками. Иными словами, Вы получили маленькую версию википедии прямо на Вашем портале.\n' +
        '\n' +
        'Для ознакомления с правилами разметками откройте соответствующую статью в списке слева.\n' +
        '\n' +
        'Для обратной связи пишите на'
      })
    },
    Adddemorazdel () {

    },
    RenewStore () {

    },
    GetSect () {
      var self = this
      GetSections(null, function (data) {
        self.sections = data
      })
      console.log('self')
      console.log(self.sections)
    },
    GetEl () {
      var params = {ID: 30}
      GetElements(params, function (data) {
        console.log(data)
      })
    },
    GetCat () {
      GetCatalogArray(null, function (Catalog) {
        console.log(Catalog)
      })
    },
    Install () {
      var section = [
        {
          'name': 'Сайты 24',
          'description': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
        }
      ]

      var items = [
        {
          'name': 'Закладка «Настройки»',
          'preview_text': 'На закладке Настройки указываются пути к лендингам относительно вашего домена',
          'detail_text': 'На закладке Настройки указываются пути к лендингам относительно вашего домена, т.е. сайта главного модуля. Именно по такому адресу созданная страница будет доступна после публикации. Подробнее процесс настройки описан в учебном курсе.'
        },
        {
          'name': 'Закладка «Доступ»',
          'preview_text': 'Закладка позволяет настроить права на доступ к модулю для всех имеющихся в системе групп пользователей.',
          'detail_text': 'Закладка позволяет настроить права на доступ к модулю для всех имеющихся в системе групп пользователей.'
        },
        {
          'name': 'Кнопки управления',
          'preview_text': 'Сохранить - Сохранение параметров модуля.',
          'detail_text': 'Сохранить - Сохранение параметров модуля. Применить - Применение внесенных изменений без выхода из формы настроек. По умолчанию - Перезапись всех настроек значениями по умолчанию.'
        }
      ]
      BX24.callMethod('entity.add',
        {
          'ENTITY': 'md_knowledge',
          'NAME': 'Knowladge Base',
          'ACCESS': {AU: 'W'}
        },
        function (ResultEntity) {
          if (ResultEntity.data()) {
            console.log(ResultEntity.data())
            for (var index in section) {
              BX24.callMethod('entity.section.add', {
                ENTITY: 'md_knowledge',
                NAME: section[index].name,
                DESCRIPTION: section[index].description
              }, function (ResultSection) {
                console.log(ResultSection.data())
                if (ResultSection.data() && section[index].child) {
                  var child = section[index].child
                  for (var key in child) {
                    BX24.callMethod('entity.section.add', {
                      ENTITY: 'md_knowledge',
                      NAME: child[key].name,
                      DESCRIPTION: child[key].description,
                      SECTION: ResultSection.data()
                    }, function (ResultChildSection) {
                      console.log(ResultChildSection.data())
                      if (ResultChildSection.data()) {
                        for (var itemkey in items) {
                          BX24.callMethod('entity.item.add', {
                            ENTITY: 'md_knowledge',
                            DATE_ACTIVE_FROM: new Date(),
                            NAME: items[itemkey].name,
                            SECTION: ResultChildSection.data(),
                            PREVIEW_TEXT: items[itemkey].preview_text,
                            DETAIL_TEXT: items[itemkey].detail_text
                          })
                        }

                        BX24.installFinish()
                      }
                    })
                  }
                }
              })
            }
          }
        })
    }

  }
}
</script>

<style scoped>

</style>
