import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeType: null,
    installed: false,
    itemsPerPage: 20,
    currentUser: {},
    elements: [{
      NAME: 'asdasd',
      CODE: 'asdasdas',
      ID: '1',
      DETAIL_TEXT: 'asdasdasdasdasdasd asd asd asd s',
      ACTIVE: 'Y',
      SECTION: null
    },
    {
      NAME: 'rewdascacfdZZ',
      CODE: 'asdasdasdasdsa',
      ID: '123123',
      DETAIL_TEXT: 'asdasdasdasdasdasd asd asd asd s',
      ACTIVE: 'Y',
      SECTION: '1'
    },
    {
      NAME: 'dewdsd',
      CODE: 'adwdawxaxwcaefsr',
      ID: '332',
      DETAIL_TEXT: 'asdasdasdasdasdasd asd asd asd s',
      ACTIVE: 'Y',
      SECTION: '1'
    },
    {
      NAME: 'Scxzsczsczsd',
      CODE: 'swxawxzsxc',
      ID: '21212',
      DETAIL_TEXT: 'asdasdasdasdasdasd asd asd asd s',
      ACTIVE: 'Y',
      SECTION: '332'
    }],
    users: [],
    sections: [],
    userSettings: [],

    // TODO временный стор
    tags: [
      {
        'ID': 1,
        'NAME': 'velit'
      },
      {
        'ID': 2,
        'NAME': 'earum'
      },
      {
        'ID': 3,
        'NAME': 'fugit'
      },
      {
        'ID': 4,
        'NAME': 'qui'
      },
      {
        'ID': 5,
        'NAME': 'sit'
      },
      {
        'ID': 6,
        'NAME': 'aut'
      },
      {
        'ID': 7,
        'NAME': 'aut'
      },
      {
        'ID': 8,
        'NAME': 'rerum'
      },
      {
        'ID': 9,
        'NAME': 'iure'
      },
      {
        'ID': 10,
        'NAME': 'esse'
      },
      {
        'ID': 11,
        'NAME': 'aliquam'
      },
      {
        'ID': 12,
        'NAME': 'nemo'
      },
      {
        'ID': 13,
        'NAME': 'officiis'
      },
      {
        'ID': 14,
        'NAME': 'quis'
      },
      {
        'ID': 15,
        'NAME': 'animi'
      },
      {
        'ID': 16,
        'NAME': 'architecto'
      },
      {
        'ID': 17,
        'NAME': 'pariatur'
      },
      {
        'ID': 18,
        'NAME': 'et'
      },
      {
        'ID': 19,
        'NAME': 'nisi'
      }
    ],
    bases: [{
      NAME: 'База знаний',
      CODE: 'asdasd',
      ID: '123'
    }],
    currentModal: {
      openModal: '',
      modalData: {}
    },
    favorites: []
  },
  plugins,
  actions,
  mutations,
  getters
})
