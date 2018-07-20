export default {
  setElements: (state, data) => {
    state.elements = data
  },

  setSections: (state, data) => {
    state.sections = data
  },

  AddNewElement: (state, data) => {
    state.elements.push(data)
  },

  AddNewSection: (state, data) => {
    state.sections.push(data)
  },

  setUsers: (state, data) => {
    state.users = data
  },

  currentUser: (state, data) => {
    state.currentUser = data
  },

  setView: (state, data) => {
    state.settings.viewType = data
  }
}
