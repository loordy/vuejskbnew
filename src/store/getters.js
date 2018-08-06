export default {
  getSectionsByParentID: state => ID => {
    if (ID === undefined) { ID = null }
    return state.sections.filter(section => section.SECTION === ID)
  },
  getSectionByID: state => ID => {
    return state.sections.find(section => section.ID === ID)
  },
  getElementsByParentID: state => ID => {
    if (ID === undefined) { ID = null }
    return state.elements.filter(element => element.SECTION === ID)
  },
  getElementByCODE: state => CODE => {
    // TODO разобраться как показывать 1 элемент
    if (CODE === undefined) { CODE = '2018-07-19T09:08:35+03:44' }
    return state.elements.find(element => element.CODE === CODE)
  },
  getCountAllSecEl: state => ID => {
    if (ID === undefined) { ID = null }
    return state.sections.filter(section => section.SECTION === ID).length + state.elements.filter(element => element.SECTION === ID)
  },
  getCountSection: state => ID => {
    if (ID === undefined) { ID = null }
    return state.elements.filter(item => item.SECTION === ID).length
  },
  getUsersByParams: state => id => {
    return state.users.filter(user => user.ACTIVE)
  },
  getUserByID: state => ID => {
    return state.users.find(user => user.ID === ID)
  },
  getBaseByCODE: state => CODE => {
    return state.bases.find(base => base.CODE === CODE)
  },
  getviewType: state => {
    return state.viewSettings
  },
  getTagList: state => state.tags,
  getBaseList: state => state.bases,
  getCurrentModal: state => state.currentModal,
  getElementsList: state => ID => {
    return state.elements.filter(element => element.SECTION === ID)
  }
}
