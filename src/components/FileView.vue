<template>
    <div class="main-grid-container">
        <table class="main-grid-table">
            <thead class="main-grid-header">
            <tr class="main-grid-row-head">
                <th class="main-grid-cell-head main-grid-cell-static main-grid-cell-checkbox"><span
                        class="main-grid-cell-head-container"><span
                        class="main-grid-checkbox-container main-grid-head-checkbox-container"><input
                        class="main-grid-checkbox main-grid-row-checkbox main-grid-check-all"
                        type="checkbox" title="Отметить все/снять отметку у всех"><label
                        class="main-grid-checkbox" for=""></label></span></span></th>
                <th class="main-grid-cell-head main-grid-cell-static main-grid-cell-action"><span
                        class="main-grid-interface-settings-icon"></span></th>
              <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span
                class="main-grid-cell-head-container"><span class="main-grid-head-title">Название</span><span
                        class="main-grid-resize-button" title=""></span><span
                        class="main-grid-control-sort main-grid-control-sort-hover-asc"></span></span></th>
              <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span
                class="main-grid-cell-head-container"><span class="main-grid-head-title">Изменен</span><span
                class="main-grid-resize-button" title=""></span><span
                class="main-grid-control-sort main-grid-control-sort-DESC"></span></span></th>
              <th class="main-grid-cell-head main-grid-cell-static main-grid-special-empty"></th>
            </tr>
            </thead>
            <tbody>
            <tr class="main-grid-row main-grid-row-body"  id="1231" @click="select">
                <td class="main-grid-cell main-grid-cell-checkbox"><span class="main-grid-cell-content"><input
                        type="checkbox" class="main-grid-row-checkbox main-grid-checkbox" name="ID[]" value="493"
                        title="Отметить для редактирования" ><label
                        class="main-grid-checkbox" for=""></label></span></td>
                <td class="main-grid-cell main-grid-cell-action"><span class="main-grid-cell-content"><a @click="popup = !popup" class="main-grid-row-action-button"></a></span>
                </td>
              <td class="main-grid-cell main-grid-cell-left">
                                       <span class="main-grid-cell-content">
                                          <table class="kb-disk-object-name">
                                             <tbody>
                                                <tr>
                                                   <td style="width: 45px;">
                                                      <div class="kb-disk-folder-icon"></div>
                                                   </td>
                                                   <td><a class="bx-disk-folder-title"
                                                          href="">Корпоративный Новый год</a></td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </span>
                </td>
              <td class="main-grid-cell main-grid-cell-left"><span class="main-grid-cell-content">29.05.2018 15:58</span></td>
              <td class="main-grid-cell"></td>
            </tr>
            </tbody>
        </table>
      <div v-show="popup" class="popup-window popup-window-no-paddings popup-window-show-animation-opacity" style="z-index: 1000; position: absolute;     top: 47px;
    left: 65px;">
        <div class="popup-window-content">
          <div class="menu-popup" style="display: block;">
            <div class="menu-popup-items">
              <a class="menu-popup-item disk-folder-list-context-menu-item ">
                <span class="menu-popup-item-icon"></span>
                <span class="menu-popup-item-text">Открыть</span>
              </a>
              <span class="menu-popup-item disk-folder-list-context-menu-item ">
              <span class="menu-popup-item-icon"></span>
              <span class="menu-popup-item-text">Удалить</span>
            </span>
            </div>
          </div>
        </div>
        <div class="popup-window-angly popup-window-angly-left" style="top: 10px;"></div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'fileView',
  methods: {
    select: function (event) {
      console.log(event.currentTarget.id)
    }
  },
  data: function () {
    return {
      popup: false
    }
  }
}
</script>
