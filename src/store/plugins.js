import searchPlugin from 'vuex-search'

export default [
  searchPlugin({
    resources: {
      tags: {
        index: ['NAME'],
        getter: state => state.tags
      },
      elements: {
        index: ['NAME'],
        getter: state => state.elements.filter(element => element.ACTIVE === 'Y')
      }
    }
  })
]
