import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeType: null,
    installed: false,
    itemsPerPage: 20,
    currentUser: {},
    elements: [{
      'ID': '13',
      'CODE': null,
      'TIMESTAMP_X': '2018-07-19T09:08:33+03:00',
      'DATE_CREATE': '2018-07-19T09:08:33+03:00',
      'CREATED_BY': '1',
      'MODIFIED_BY': '1',
      'ACTIVE': 'Y',
      'SORT': '500',
      'NAME': 'Элемент 1111111',
      'PICTURE': null,
      'DETAIL_PICTURE': null,
      'DETAIL_TEXT': '# ЭТАПЫ СТАНОВЛЕНИЯ КОМПАНИИ\n' +
      '\n' +
      'История UCD MICROS началась за несколько лет до самого появления компании.\n' +
      '\n' +
      '|  Год | Описание  |\n' +
      '| ------------ | ------------ |\n' +
      '| 1992 |  В г. Ахангаране Ташкентской области была зарегистрирована венчурная научно-производственная фирма – ВНПФ «Омад». На момент регистрации, основная деятельность фирмы была связана с разработкой программного обеспечения для автоматизации предприятий. Были заключены договора с заводами «АхангаранШифер», «СанТехЛит», комбинатом «СтройПластмасс» и другими предприятиями Узбекистана на создание и внедрение элементов автоматизированных систем. |\n' +
      '| 1994  |  На смену ВНПФ «Омад» пришло ООО «Информсап», зарегистрированное в г.Ташкенте. |\n' +
      '|  1995 | Через год после регистрации ООО «Информсап»  зарегистрирована частная научно-производственная фирма ЧНПФ «МИКРОС».  В 2001 г. эта фирма была преобразована в ООО «UCD MICROS», затем, в 2003г., в связи с расширением взаимодействия с иностранными партнерами, появилось совместное предприятие СП ООО «UCD MICROS», существующее по настоящий момент.  |\n' +
      '| 1998  | Создан IT-учебный центр, сертифицированный корпорацией Microsoft. В настоящее время данное направление деятельности ведет негосударственное образовательное учреждение «Micros Training Centre». Кроме обучения, осуществляется прием международных экзаменов через сертификационные центры «Prometric» и «Person VUE», а также прием тестов по системе «TOEFL».  |\n' +
      '|  2002 |  СП ООО «UCD MICROS» осуществляет поставки электронных весов и их блоков корпорации CAS (Южная Корея), начиная от малых торговых до больших автомобильных. Это направление становится одним из приоритетных направлений развития компании.   |\n' +
      '| 2008  |  К СП ООО «UCD MICROS» присоединяется ООО «Комплексные Системы Безопасности». С этого момента осуществляются поставки оборудования для Систем Контроля Управления Доступом (СКУД) (турникеты, шлагбаумы, контроллеры, картридеры, пластиковые карты и брелоки различных форматов, видео - камеры, DVR и т.п.), предоставление услуг проектирования СКУД и монтаж. |\n' +
      '| 2009  | Компания начинает заниматься поставками лицензионного программного обеспечения на рынок Узбекистана. К настоящему моменту наработаны связи с известными производителями программного обеспечения – Microsoft, Oracle, Eset, Лаборатория Касперского, Dr.Web и другими.  |\n' +
      '| 2010  | Создание  полиграфического производства. Первоначально рассматриваемое как направление цифровой печати на базе оборудования корпорации Xerox, оно развилось  в производство разного вида упаковки (при сохранении направления цифровой печати).  |\n' +
      '|  2015 | К СП ООО «UCD MICROS» присоединяется Интернет- провайдер ООО «SCINET INFO SYSTEMS». С этого момента, одним из направлений деятельности является предоставление доступа к Интернет, а также все сопутствующие с этим услуги. |\n' +
      '\n' +
      'Расширяя список видов деятельности, компания никогда не бросала то направление, с которого начиналась работа – разработка программного обеспечения. В настоящее время осуществляется создание Web-сайтов на CMS «1C-Битрикс» (статус «Золотой партнер»), разрабатываются ERP и бухгалтерские системы с использованием SQL-баз данных. Компания принимает участие в создании системы электронного правительства Узбекистана.\n' +
      '\n' +
      'За двадцать лет существования, компания, которая начала свою деятельность как разработчик программного обеспечения, превратилась в стабильное и крепкое многопрофильное предприятие в сфере IT-индустрии Узбекистана и сохраняет статус надежного партнера до настоящего времени.',
      'LEFT_MARGIN': '7',
      'RIGHT_MARGIN': '8',
      'DEPTH_LEVEL': '1',
      'TSX_TMP': '2018-07-19 09:08:33',
      'ENTITY': 'md_knowledge',
      'SECTION': '13'
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
      'NAME': 'Элемент 24',
      'PICTURE': null,
      'DETAIL_PICTURE': null,
      'DETAIL_TEXT': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
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
      'NAME': 'Элемент 24',
      'PICTURE': null,
      'DETAIL_PICTURE': null,
      'DETAIL_TEXT': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
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
      'NAME': 'Элемент 24',
      'PICTURE': null,
      'DETAIL_PICTURE': null,
      'DETAIL_TEXT': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
      'LEFT_MARGIN': '1',
      'RIGHT_MARGIN': '2',
      'DEPTH_LEVEL': '1',
      'TSX_TMP': '2018-07-19 09:08:35',
      'ENTITY': 'md_knowledge',
      'SECTION': null
    }],
    users: {/* [id: string]: User */},
    sections: [{
      'ID': '13',
      'CODE': null,
      'TIMESTAMP_X': '2018-07-19T09:08:33+03:00',
      'DATE_CREATE': '2018-07-19T09:08:33+03:00',
      'CREATED_BY': '1',
      'MODIFIED_BY': '1',
      'ACTIVE': 'Y',
      'SORT': '500',
      'NAME': 'Проверка',
      'PICTURE': null,
      'DETAIL_PICTURE': null,
      'DETAIL_TEXT': 'Модуль пasdозволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
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
      'DETAIL_TEXT': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
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
      'DETAIL_TEXT': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
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
      'DETAIL_TEXT': 'Модуль позволяет решить следующие задачи:Быстро запустить ваш собственный сайт, используя обширную коллекцию готовых шаблонов.Менять дизайн шаблона - фоны, шрифты, тексты, изображения и др.Создавать собственные шаблоны.Работать с включаемыми областями шаблонов как с отдельными страницами.Использовать готовые блоки из каталога.Редактировать блоки - менять палитру, шрифты, кнопки, добавлять анимацию и др.Выводить на сайт данные из 1С-Битрикс: Управление сайтом, в том числе товары каталогов и др.',
      'LEFT_MARGIN': '1',
      'RIGHT_MARGIN': '2',
      'DEPTH_LEVEL': '1',
      'TSX_TMP': '2018-07-19 09:08:35',
      'ENTITY': 'md_knowledge',
      'SECTION': null
    }],
    settings: {
      viewType: 'grid'
    },
    checkedElements: {},
    lists: {
      top: [/* number */],
      new: [],
      show: []
    }
  },
  actions,
  mutations,
  getters
})
