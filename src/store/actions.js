import * as api from '../api/index'

const entitykb = 'md_knowledge1'
// const settingskb = 'md_settings_knowledge'
export default {
  setElements: ({commit, state}, data) => {
    console.log(data)
    api.getElements({ENTITY: data.CODE}, function (result) {
      commit('setElements', result)
    })
  },

  setSections: ({commit, state}, data) => {
    api.getSections(entitykb, function (result) {
      commit('setSections', result)
    })
  },

  setSettings: ({commit, state}, data) => {
    api.getElements({ENTITY: 'md_kb_settings'}, function (result) {
      commit('setSettings', result)
    })
  },

  setBases: ({commit, state}, data) => {
    api.getElements({ENTITY: 'md_kb_bases'}, function (result) {
      commit('setBases', result)
    })
  },

  setFavorites: ({commit, state}, data) => {
    api.getSections('md_kb_favorites', function (result) {
      commit('setFavorites', result)
    })
  },

  addNewElement: ({commit, state}, data) => {
    if (!data.entity) {
      data.entity = state.getters.getCurrentBase
    }
    if (!data.CODE) {
      data.CODE = new Date()
    }
    commit('addNewElement', data)
    api.addNewItem(data.entity, data, function (result) {
      data.ID = result
      commit('updateElement', data)
      // state.getters.getElementByCODE(data.CODE).ID = result
    })
  },

  addNewSection: ({commit, state}, data) => {
    data.CODE = new Date()
    commit('addNewSection', data)
    api.addNewSection(entitykb, data, function (result) {
      // state.getters.getSectionByCODE(data.CODE).ID = result
    })
  },

  updateElement: ({commit, state}, data) => {
    api.updateItem(entitykb, data)
  },

  updateSection: ({commit, state}, data) => {
    api.updateSection(entitykb, data)
  },

  deleteElement: ({commit, state}, data) => {
    commit('deleteElement', data)
    api.deleteItem(entitykb, data, function (result) {
    })
  },

  deleteSection: ({commit, state}, data) => {
    commit('deleteSection', data)
    api.deleteSection(entitykb, data, function (result) {
    })
  },

  setUsers: ({commit, state}, data) => {
    api.getUsers(function (result) {
      commit('setUsers', result)
    })
  },

  currentUser: ({commit, state}, data) => {
    state.currentUser = data
  },

  setView: ({commit, state}, data) => {
    state.settings.viewType = data
  },

  installEntity: ({commit, state}, data) => {
    api.installEntity(data)
  },

  deleteBase: ({commit, state}, data) => {
    commit('deleteBase', data)
    api.deleteItem('md_kb_bases', data, function (result) {
    })
    api.deleteEntity(data.CODE, function (result) {
    })
  },

  addNewBase: ({commit, state}, data) => {
    data.CODE = new Date().getTime()
    commit('addNewBase', data)
    api.installEntity(data)
    api.addNewItem('md_kb_bases', data, function (result) {
      data.ID = result
      commit('updateElement', data)
    })
  },

  updateBase: ({commit, state}, data) => {
    api.updateItem(data, data)
  },

  setEntity: ({commit, state}, data) => {
    commit('setEntity', data)
  },

  start: ({commit, state}, data) => {
    api.getCurrentUser(function (result) {
      api.getElements(
        {
          ENTITY: 'md_kb_settings',
          FILTER: {
            CREATED_BY: result.ID
          }
        }, function (result) {
          if (result.length === 0) {
            result = [{
              CODE: 'md_knowledge1',
              NAME: 'entity'
            },
            {
              CODE: 'view',
              NAME: 'viewType'
            }
            ]
          }
          // TODO переписать на дефолтные значения
          commit('setSettings', result)
          api.getElements(
            {
              ENTITY: result.find(item => item.NAME === 'entity').CODE
            }, function (result) {
              console.log('setelemt')
              console.log(result)
              commit('setElements', result)
            })
        }
      )
    })
  }
}
