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
let data4 = [
  {
    'ID': '13',
    'CODE': null,
    'TIMESTAMP_X': '2018-07-19T09:08:33+03:00',
    'DATE_CREATE': '2018-07-19T09:08:33+03:00',
    'CREATED_BY': '1',
    'MODIFIED_BY': '1',
    'ACTIVE': 'Y',
    'SORT': '500',
    'NAME': 'Сайты 24',
    'PICTURE': null,
    'DETAIL_PICTURE': null,
    'DESCRIPTION': 'Модуль пasdозволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
    'LEFT_MARGIN': '7',
    'RIGHT_MARGIN': '8',
    'DEPTH_LEVEL': '1',
    'TSX_TMP': '2018-07-19 09:08:33',
    'ENTITY': 'md_knowledge',
    'SECTION': null
  },
  {
    'ID': '15',
    'CODE': null,
    'TIMESTAMP_X': '2018-07-19T09:08:34+03:00',
    'DATE_CREATE': '2018-07-19T09:08:34+03:00',
    'CREATED_BY': '1',
    'MODIFIED_BY': '1',
    'ACTIVE': 'Y',
    'SORT': '500',
    'NAME': 'Сайты 24',
    'PICTURE': null,
    'DETAIL_PICTURE': null,
    'DESCRIPTION': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
    'LEFT_MARGIN': '5',
    'RIGHT_MARGIN': '6',
    'DEPTH_LEVEL': '1',
    'TSX_TMP': '2018-07-19 09:08:34',
    'ENTITY': 'md_knowledge',
    'SECTION': null
  },
  {
    'ID': '17',
    'CODE': null,
    'TIMESTAMP_X': '2018-07-19T09:08:34+03:00',
    'DATE_CREATE': '2018-07-19T09:08:34+03:00',
    'CREATED_BY': '1',
    'MODIFIED_BY': '1',
    'ACTIVE': 'Y',
    'SORT': '500',
    'NAME': 'Сайты 24',
    'PICTURE': null,
    'DETAIL_PICTURE': null,
    'DESCRIPTION': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
    'LEFT_MARGIN': '3',
    'RIGHT_MARGIN': '4',
    'DEPTH_LEVEL': '1',
    'TSX_TMP': '2018-07-19 09:08:34',
    'ENTITY': 'md_knowledge',
    'SECTION': null
  },
  {
    'ID': '19',
    'CODE': null,
    'TIMESTAMP_X': '2018-07-19T09:08:35+03:00',
    'DATE_CREATE': '2018-07-19T09:08:35+03:00',
    'CREATED_BY': '1',
    'MODIFIED_BY': '1',
    'ACTIVE': 'Y',
    'SORT': '500',
    'NAME': 'Сайты 24',
    'PICTURE': null,
    'DETAIL_PICTURE': null,
    'DESCRIPTION': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
    'LEFT_MARGIN': '1',
    'RIGHT_MARGIN': '2',
    'DEPTH_LEVEL': '1',
    'TSX_TMP': '2018-07-19 09:08:35',
    'ENTITY': 'md_knowledge',
    'SECTION': null
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
let asda = {data4}
export default {
  name: 'test',
  components: { demo1 },
  data: function () {
    return {
      treeData: data4
    }
  }
}
// var positiveArr = data.filter(function (number) {
//   return number > 0
// })
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
