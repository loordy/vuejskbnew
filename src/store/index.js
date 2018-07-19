import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    currentUser: {},
    elements: {/* [id: number]: Item */},
    users: {/* [id: string]: User */},
    sections: {/* [id: string]: Section */},
    settings: {
      viewType: [/* text */]
    },
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
