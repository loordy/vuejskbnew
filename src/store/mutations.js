export default {
  setElements: (state, data) => {
    data = data.map(id => data.items[id])
    state.elements = data
  },

  setSections: (state, data) => {
    state.sections = data
  },

  setUsers: (state, data) => {
    state.users = data
  },

  currentUser: (state, data) => {
    state.currentUser = data
  }
}
