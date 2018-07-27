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
    data.CODE = new Date()
    commit('addNewElement', data)
    api.addNewItem(entitykb, data, function (result) {
      state.getters.getElementByCODE(data.CODE).ID = result
    })
  },

  addNewSection: ({ commit, state }, data) => {
    data.CODE = new Date()
    commit('addNewSection', data)
    api.addNewSection(entitykb, data, function (result) {
      state.getters.getSectionByCODE(data.CODE).ID = result
    })
  },

  updateElement: ({ commit, state }, data) => {
    api.updateItem(entitykb, data)
  },

  updateSection: ({ commit, state }, data) => {
    api.updateSection(entitykb, data)
  },

  deleteElement: ({ commit, state }, data) => {
    commit('deleteElement', data)
    api.deleteItem(entitykb, data, function (result) {})
  },

  deleteSection: ({ commit, state }, data) => {
    commit('deleteSection', data)
    api.deleteSection(entitykb, data, function (result) {})
  },

  setUsers: ({ commit, state }, data) => {
    state.users = data
  },

  currentUser: ({ commit, state }, data) => {
    state.currentUser = data
  },

  setView: ({ commit, state }, data) => {
    state.settings.viewType = data
  },

  installEntity: ({ commit, state }, data) => {
    api.installEntity()
  }
}
