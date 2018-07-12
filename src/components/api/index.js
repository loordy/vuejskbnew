/* global BX24 */
export function CurrentUser (callback) {
  BX24.init(function () {
    BX24.callMethod('user.current', {}, function (res) {
      callback(res.data())
    })
  })
}
export function GetSections (SectionId, callback) {
  BX24.callMethod('entity.section.get', {
    ENTITY: 'md_knowledge',
    SORT: {DATE_ACTIVE_FROM: 'ASC'},
    FILTER: {SECTION: SectionId}
  },
  function (result) {
    if (result.error()) {
      console.log(result)
      GetSections(SectionId, callback)
    } else {
      var data = result.data()
      console.log(data)
      callback(data)
    }
  }
  )
}
export function GetElements (params, callback) {
  BX24.callMethod('entity.item.get', {
    ENTITY: 'md_knowledge',
    SORT: {DATE_ACTIVE_FROM: 'ASC'},
    FILTER: params
  },
  function (result) {
    var data = result.data()
    console.log(data)
    callback(data)
  }
  )
}
export function AddNewItem (callback) {
  BX24.callMethod('entity.item.add', {
    ENTITY: 'md_knowledge',
    DATE_ACTIVE_FROM: new Date(),
    NAME: 'Новая статья',
    DETAIL_TEXT: ''
  }, function (result) {
    var data = result.data()
    console.log(data)
    callback(data)
  })
}

export function UpdateItem (item, callback) {
  BX24.callMethod('entity.item.update', {
    ENTITY: 'md_knowledge',
    ID: item.ID,
    DATE_ACTIVE_FROM: new Date(),
    DETAIL_PICTURE: '',
    NAME: item.NAME,
    DETAIL_TEXT: item.DETAIL_TEXT,
    SECTION: item.SECTION
  }, function (result) {
    callback(result)
  }
  )
}

export function AddNewSection (section, callback) {
  BX24.callMethod('entity.section.add', {
    ENTITY: 'md_knowledge',
    DATE_ACTIVE_FROM: new Date(),
    NAME: section.NAME,
    DETAIL_TEXT: ''
  }, function (result) {
    var data = result.data()
    console.log(data)
    callback(data)
  })
}
export function UpdateSection (callback) {
  BX24.callMethod('entity.item.add', {
    ENTITY: 'md_knowledge',
    DATE_ACTIVE_FROM: new Date(),
    NAME: 'Новая статья',
    DETAIL_TEXT: ''
  }, function (result) {
    if (result.error()) {
      UpdateSection(callback)
    } else {
      var data = result.data()
      console.log(data)
      callback(data)
    }
  })
}
export function GetCatalogArray (SectionID, callback) {
  let Catalog = []
  let Sections = []
  let Elements = []
  GetSections(SectionID, function (data) {
    console.log(Catalog)
    Sections = data
    GetElements(false, function (data) {
      Elements = data

      let fID = null
      Catalog = Sections.filter(SectFilter)

      /**
       * @return {boolean}
       */
      function SectFilter (Section) {
        return Section.SECTION === fID
      }
      console.log(Catalog)
      Catalog.forEach(function (Section, i, arr) {
        fID = Section.ID
        console.log(Catalog)
        if (Sections.filter(SectFilter) === true) {
          Catalog[i]['ITEMS'] = []
          Catalog[i]['ITEMS'] = Elements.filter(SectFilter)
        }
        console.log(Catalog)
        if (Sections.filter(SectFilter) === true) {
          Catalog[i]['SECTIONS'] = []
          Catalog[i]['SECTIONS'] = Sections.filter(SectFilter)
        }
      })
    })
  })

  Catalog.forEach(function (item, i, arr) {
    GetSections(Catalog[i]['SECTION'], function (data) {
      Catalog[i]['SECTION'] = []
      Catalog[i]['SECTION'] = data
      console.log(Catalog)
    })
  })
  callback(Catalog)
}
