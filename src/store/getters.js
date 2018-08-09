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
    if (CODE === undefined) { CODE = state.elements.sort((a, b) => a.ID - b.ID)[0].CODE }
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
    return state.userSettings
  },
  getTagList: state => state.tags,
  getBaseList: state => state.bases,
  getCurrentBase: state => NAME => {
    return state.userSettings.find(item => item.NAME === NAME)
  },
  getCurrentModal: state => state.currentModal,
  getElementsListACTIVE: state => ACTIVE => {
    return state.elements.filter(element => element.ACTIVE === ACTIVE)
  }
}
