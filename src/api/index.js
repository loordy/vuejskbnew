/* global BX24 */
export function getCurrentUser (callback) {
  BX24.callMethod('user.current', {}, function (result) {
    console.log(result)
    callback(result.data())
  })
}
export function getUsers (callback) {
  BX24.callMethod('user.get', {}, function (result) {
    console.log(result)
    callback(result.data())
  })
}
export function getSections (entity, callback) {
  BX24.callMethod('entity.section.get', {
    ENTITY: entity,
    SORT: {DATE_ACTIVE_FROM: 'ASC'},
    FILTER: ''
  },
  function (result) {
    if (result.error()) {
      console.log(result)
      getSections(entity, callback)
    } else {
      callback(result.data())
    }
  }
  )
}
export function getElements (entity, callback) {
  BX24.callMethod('entity.item.get', {
    ENTITY: entity,
    SORT: {DATE_ACTIVE_FROM: 'ASC'},
    FILTER: ''
  },
  function (result) {
    if (result.error()) {
      console.log(result)
      getElements(entity, callback)
    } else {
      callback(result.data())
    }
  }
  )
}
export function addNewItem (entity, data, callback) {
  BX24.callMethod('entity.item.add', {
    ENTITY: entity,
    DATE_ACTIVE_FROM: new Date(),
    NAME: data.NAME,
    DETAIL_TEXT: '',
    SECTION: data.SECTION
  }, function (result) {
    callback(result.data())
  })
}
export function updateItem (entity, data, callback) {
  BX24.callMethod('entity.item.update', {
    ENTITY: entity,
    ID: data.ID,
    NAME: data.NAME,
    DETAIL_TEXT: data.DETAIL_TEXT,
    SECTION: data.SECTION
  }, function (result) {
    console.log(result)
    if (result !== true) { updateItem(entity, data, callback) }
  }
  )
}
export function deleteItem (entity, data, callback) {
  BX24.callMethod('entity.item.delete', {
    ENTITY: entity,
    ID: data.ID
  }, function (result) {
    if (result.error()) {
      deleteItem(callback)
    } else {
      callback(result.data())
    }
  })
}
export function addNewSection (entity, section, callback) {
  BX24.callMethod('entity.section.add', {
    ENTITY: entity,
    DATE_ACTIVE_FROM: new Date(),
    NAME: section.NAME,
    SECTION: section.SECTION
  }, function (result) {
    callback(result.data())
  })
}
export function updateSection (entity, data, callback) {
  BX24.callMethod('entity.section.update', {
    ENTITY: entity,
    ID: data.ID,
    NAME: data.NAME,
    SECTION: data.SECTION
  }, function (result) {
    console.log(result)
    if (result !== true) { updateItem(entity, data, callback) }
  })
}
export function deleteSection (entity, data, callback) {
  BX24.callMethod('entity.section.delete', {
    ENTITY: entity,
    ID: data.ID
  }, function (result) {
    if (result.error()) {
      deleteSection(callback)
    } else {
      callback(result.data())
    }
  })
}
