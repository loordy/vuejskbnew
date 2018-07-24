import * as api from '../api/index'
const entitykb = 'md_knowledge'
// const settingskb = 'md_settings_knowledge'
export default {
  setElements: ({ commit, state }, data) => {
    api.getElements(entitykb, function (result) {
      commit('setElements', result)
    })
  },

  setSections: ({ commit, state }, data) => {
    api.getSections(entitykb, function (result) {
      commit('setSections', result)
    })
  },

  addNewElement: ({ commit, state }, data) => {
    api.addNewItem(entitykb, data, function (result) {
      data.ID = result
      commit('AddNewElement', data)
    })
  },

  addNewSection: ({ commit, state }, data) => {
    api.addNewSection(entitykb, data, function (result) {
      data.ID = result.data()
      commit('AddNewSection', data)
    })
  },

  updateElement: ({ commit, state }, data) => {
    api.updateItem(entitykb, data)
  },

  updateSection: ({ commit, state }, data) => {
    api.updateSection(entitykb, data)
  },

  setUsers: ({ commit, state }, data) => {
    state.users = data
  },

  currentUser: ({ commit, state }, data) => {
    state.currentUser = data
  },

  setView: ({ commit, state }, data) => {
    state.settings.viewType = data
  }
}
