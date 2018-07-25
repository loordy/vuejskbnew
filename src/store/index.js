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
    elements: [],
    users: {/* [id: string]: User */},
    sections: [],
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
