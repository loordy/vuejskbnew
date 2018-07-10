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
    items: {/* [id: number]: Item */},
    users: {/* [id: string]: User */},
    sections: {/* [id: string]: Section */},
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
