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
    elements: [],
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
    bases: [],
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
