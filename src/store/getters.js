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
  getElementByID: state => ID => {
    return state.elements.find(element => element.ID === ID)
  },
  getCountAllSecEl: state => ID => {
    if (ID === undefined) { ID = null }
    return state.sections.filter(section => section.SECTION === ID).length + state.elements.filter(element => element.SECTION === ID)
  },
  getCountSection: state => ID => {
    if (ID === undefined) { ID = null }
    return state.sections.filter(section => section.SECTION === ID).length
  },
  getUsersByParams: state => id => {
    return state.users.filter(user => user.ACTIVE)
  },
  getUserByID: state => ID => {
    return state.users.find(user => user.ID === ID)
  },
  getviewType: state => type => {
    return state.settings[type]
  }
}
