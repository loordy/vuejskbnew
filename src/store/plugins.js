import searchPlugin from 'vuex-search'

export default [
  searchPlugin({
    resources: {
      tags: {
        index: ['NAME'],
        getter: state => state.tags
      }
    }
  })
]
