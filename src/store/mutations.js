export default {
  setElements: (state, data) => {
    state.elements = data
  },

  addNewElement: (state, data) => {
    state.elements.push(data)
  },

  updateElement: (state, data) => {

  },

  deleteElement: (state, data) => {
    state.elements.splice(state.elements.indexOf(data), 1)
  },

  setSections: (state, data) => {
    state.sections = data
  },

  addNewSection: (state, data) => {
    state.sections.push(data)
  },

  updateSection: (state, data) => {

  },

  deleteSection: (state, data) => {
    state.sections.splice(state.sections.indexOf(data), 1)
  },

  setUsers: (state, data) => {
    state.users = data
  },

  currentUser: (state, data) => {
    state.currentUser = data
  },

  setView: (state, data) => {
    state.settings.viewType = data
  },

  openModal: (state, data) => {
    state.currentModal.openModal = data.openModal
    state.currentModal.modalData = data.modalData
  },

  setBases: (state, data) => {
    state.bases = data
  },

  addNewBase: (state, data) => {
    state.bases.push(data)
  },

  deleteBase: (state, data) => {
    state.bases.splice(state.bases.indexOf(data), 1)
  }

}
