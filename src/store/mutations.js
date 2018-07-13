export default {
  setElements: (state, data) => {
    state.elements = data
    console.log('mutiroval')
    console.log(data)
    console.log(state)
  },

  setSections: (state, { data }) => {
    state.sections = data
  },

  setUsers: (state, { data }) => {
    state.users = data
  }
}
