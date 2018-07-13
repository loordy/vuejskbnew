import { GetUsers, GetSections, GetElements } from '../components/api/index'
export default {
  getAllElements ({commit, data}) {
    commit('setElements', data)
  },
  async getAllSections ({commit, data}) {
    commit('setSections', data)
  },
  getAllUsers ({commit, data}) {
    commit('setUsers', data)
  }
}
