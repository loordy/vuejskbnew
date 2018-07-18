<template>
  <ul id="demo">
    <demo1
      class="item"
      :model="treeData">
    </demo1>
  </ul>
</template>

<script>
import demo1 from '../common/demo'
let data1 = [
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
let data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}
export default {
  name: 'test',
  components: { demo1 },
  data: function () {
    return {
      treeData: data
    }
  }
}
// var positiveArr = data.filter(function (number) {
//   return number > 0
// })
data1.forEach(function (item, i, array) {
  if(item.section_id != ''){
    console.log(item.section_id)
  }

})
console.log(data1)
</script>
<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
