/* global BX24 */
export function getCurrentUser (callback) {
  BX24.callMethod('user.current', {}, function (result) {
    console.log(result)
    callback(result)
  })
}
export function getUsers (callback) {
  BX24.callMethod('user.get', {}, function (result) {
    console.log(result)
    callback(result)
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
    DATE_ACTIVE_FROM: new Date().getTime(),
    NAME: data.NAME,
    DETAIL_TEXT: data.DETAIL_TEXT,
    CODE: data.CODE,
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
    if (result.error()) { updateItem(entity, data, callback) }
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
    DATE_ACTIVE_FROM: new Date().getTime(),
    NAME: section.NAME,
    CODE: section.CODE,
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
    if (result.error()) { updateItem(entity, data, callback) }
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

export function installEntity (data, callback) {
  BX24.callMethod('entity.add', {
    'ENTITY': data.CODE,
    'NAME': data.NAME
  }, function (result) {
    if (result.error()) { console.log('erreoraraerae install') }
  }
  )
}

export function deleteEntity (data, callback) {
  BX24.callMethod('entity.delete', {'ENTITY': data.CODE})
}
