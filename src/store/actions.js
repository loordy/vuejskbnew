actions: {
  getElements({ commit }){
    Vue.http.get('/api').then(response => {
      commit('setMovies', response.data)
    })
