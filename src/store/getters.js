export default {
  getSectionsByParentID: state => id => {
    return state.sections.find(todo => todo.id === id);
  },
  getSectionByID: state => id => {
    return state.sections.find(todo => todo.id === id);
  },
  getElementsByParentID: state => id => {
    return state.elements.find(todo => todo.id === id);
  },
  getElementByID: state => id => {
    return state.elements.find(todo => todo.id === id);
  },
  getUsersByParams: state => id => {
    return state.users.find(todo => todo.id === id);
  },
  getUserByID: state => id => {
    return state.users.find(todo => todo.id === id);
  }
}
