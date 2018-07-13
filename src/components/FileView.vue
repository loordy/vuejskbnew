<template>
    <div class="main-grid-container" style="display: none;">
        <table class="main-grid-table" id="folder_list_1_table">
            <thead class="main-grid-header">
            <tr class="main-grid-row-head">
                <th class="main-grid-cell-head main-grid-cell-static main-grid-cell-checkbox"><span
                        class="main-grid-cell-head-container"><span
                        class="main-grid-checkbox-container main-grid-head-checkbox-container"><input
                        class="main-grid-checkbox main-grid-row-checkbox main-grid-check-all"
                        id="folder_list_1_check_all" type="checkbox" title="Отметить все/снять отметку у всех"><label
                        class="main-grid-checkbox" for="folder_list_1_check_all"></label></span></span></th>
                <th class="main-grid-cell-head main-grid-cell-static main-grid-cell-action"><span
                        class="main-grid-interface-settings-icon"></span></th>
                <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span
                        class="main-grid-cell-head-container"><span class="main-grid-head-title">Размер</span><span
                        class="main-grid-resize-button" title=""></span><span
                        class="main-grid-control-sort main-grid-control-sort-hover-desc"></span></span></th>
                <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span
                        class="main-grid-cell-head-container"><span class="main-grid-head-title">Изменен</span><span
                        class="main-grid-resize-button" title=""></span><span
                        class="main-grid-control-sort main-grid-control-sort-DESC"></span></span></th>
                <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span
                        class="main-grid-cell-head-container"><span class="main-grid-head-title">Название</span><span
                        class="main-grid-resize-button" title=""></span><span
                        class="main-grid-control-sort main-grid-control-sort-hover-asc"></span></span></th>
                <th class="main-grid-cell-head main-grid-cell-static main-grid-special-empty"></th>
            </tr>
            </thead>
            <tbody>
            <tr class="main-grid-row main-grid-row-body">
                <td class="main-grid-cell main-grid-cell-checkbox"><span class="main-grid-cell-content"><input
                        type="checkbox" class="main-grid-row-checkbox main-grid-checkbox" name="ID[]" value="493"
                        title="Отметить для редактирования" id="checkbox_folder_list_1_493"><label
                        class="main-grid-checkbox" for="checkbox_folder_list_1_493"></label></span></td>
                <td class="main-grid-cell main-grid-cell-action"><span class="main-grid-cell-content"><a href="#"
                                                                                                         class="main-grid-row-action-button"></a></span>
                </td>
                <td class="main-grid-cell main-grid-cell-left"><span class="main-grid-cell-content"></span></td>
                <td class="main-grid-cell main-grid-cell-left"><span
                        class="main-grid-cell-content">29.05.2018 15:58</span></td>
                <td class="main-grid-cell main-grid-cell-left">
                                       <span class="main-grid-cell-content">
                                          <table class="bx-disk-object-name">
                                             <tbody>
                                                <tr>
                                                   <td style="width: 45px;">
                                                      <div class="js-disk-grid-open-folder bx-file-icon-container-small bx-disk-folder-icon icon-shared shared icon-shared_2"></div>
                                                   </td>
                                                   <td><a class="bx-disk-folder-title js-disk-grid-folder"
                                                          id="disk_obj_493" href="">Корпоративный Новый год</a></td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </span>
                </td>
                <td class="main-grid-cell"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: 'fileView'
}
</script>
