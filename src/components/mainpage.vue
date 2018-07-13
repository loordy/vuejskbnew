<template>
   <table>
  <tr class="kb-layout-inner-inner-top-row">
    <td class="kb-layout-inner-inner-cont">
      <div class="page-header">
        <div class="pagetitle-below">
          <div class="disk-folder-list-toolbar" id="disk-folder-list-toolbar">
            <div class="disk-breadcrumbs js-disk-breadcrumbs " id="breadcrumbs_f6cbe" style="opacity: 1;">
              <div class="disk-breadcrumbs-item js-disk-breadcrumbs-folder">
                <a class="disk-breadcrumbs-item-title js-disk-breadcrumbs-folder-link" href="">Мой Диск</a>
                <span class="disk-breadcrumbs-item-arrow js-disk-breadcrumbs-arrow"></span>
              </div>
            </div>
            <div class="disk-folder-list-config">
              <div class="disk-folder-list-sorting">
                <span class="disk-folder-list-sorting-text">По дате изменения</span>
              </div>
              <div class="disk-folder-list-view">
                <a  class="disk-folder-list-view-item disk-folder-list-view-item-lines "></a>
                <a  class="disk-folder-list-view-item disk-folder-list-view-item-grid js-disk-change-view disk-folder-list-view-item-active"></a>
                <a  class="disk-folder-list-view-item disk-folder-list-view-item-grid-tile js-disk-change-view "></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>
    <!--<tr v-html="htmll"></tr>-->
    <tr>
      <td class="kb-layout-inner-inner-cont">
        <div id="workarea">
          <div id="sidebar"></div>
          <div id="workarea-content">
            <div class="workarea-content-paddings">
              <div class="kb-disk-container posr" style="position: relative;">
                <table style="width: 100%;" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <div class="main-grid-container" style="display: none;">
                        <table class="main-grid-table" id="folder_list_1_table">
                          <thead class="main-grid-header">
                          <tr class="main-grid-row-head">
                            <th class="main-grid-cell-head main-grid-cell-static main-grid-cell-checkbox"><span class="main-grid-cell-head-container"><span class="main-grid-checkbox-container main-grid-head-checkbox-container"><input class="main-grid-checkbox main-grid-row-checkbox main-grid-check-all" id="folder_list_1_check_all" type="checkbox" title="Отметить все/снять отметку у всех"><label class="main-grid-checkbox" for="folder_list_1_check_all"></label></span></span></th>
                            <th class="main-grid-cell-head main-grid-cell-static main-grid-cell-action"><span class="main-grid-interface-settings-icon"></span></th>
                            <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span class="main-grid-cell-head-container"><span class="main-grid-head-title">Размер</span><span class="main-grid-resize-button" title=""></span><span class="main-grid-control-sort main-grid-control-sort-hover-desc"></span></span></th>
                            <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span class="main-grid-cell-head-container"><span class="main-grid-head-title">Изменен</span><span class="main-grid-resize-button" title=""></span><span class="main-grid-control-sort main-grid-control-sort-DESC"></span></span></th>
                            <th class="main-grid-cell-head main-grid-cell-left main-grid-col-sortable  main-grid-draggable "><span class="main-grid-cell-head-container"><span class="main-grid-head-title">Название</span><span class="main-grid-resize-button" title=""></span><span class="main-grid-control-sort main-grid-control-sort-hover-asc"></span></span></th>
                            <th class="main-grid-cell-head main-grid-cell-static main-grid-special-empty"></th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr class="main-grid-row main-grid-row-body">
                            <td class="main-grid-cell main-grid-cell-checkbox"><span class="main-grid-cell-content"><input type="checkbox" class="main-grid-row-checkbox main-grid-checkbox" name="ID[]" value="493" title="Отметить для редактирования" id="checkbox_folder_list_1_493"><label class="main-grid-checkbox" for="checkbox_folder_list_1_493"></label></span></td>
                            <td class="main-grid-cell main-grid-cell-action"><span class="main-grid-cell-content"><a href="#" class="main-grid-row-action-button"></a></span></td>
                            <td class="main-grid-cell main-grid-cell-left"><span class="main-grid-cell-content"></span></td>
                            <td class="main-grid-cell main-grid-cell-left"><span class="main-grid-cell-content">29.05.2018 15:58</span></td>
                            <td class="main-grid-cell main-grid-cell-left">
                                       <span class="main-grid-cell-content">
                                          <table class="bx-disk-object-name">
                                             <tbody>
                                                <tr>
                                                   <td style="width: 45px;">
                                                      <div class="js-disk-grid-open-folder bx-file-icon-container-small bx-disk-folder-icon icon-shared shared icon-shared_2"></div>
                                                   </td>
                                                   <td><a class="bx-disk-folder-title js-disk-grid-folder" id="disk_obj_493" >Корпоративный Новый год</a></td>
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
                      <!--filelist-->
                      <div class="kb-disk-interface-filelist">
                        <div>
                          <div id="folder_list_4326_tile_grid_container" class="disk-tile-grid">
                            <div class="ui-grid-tile">
                              <div class="ui-grid-tile-item">
                                <div class="ui-grid-tile-item-checkbox"></div>
                                <div class="ui-grid-tile-item-content">
                                  <div class="disk-folder-list-item disk-folder-list-item-folder">
                                    <div class="disk-folder-list-item-image">
                                      <div class="ui-icon ui-icon-file ui-icon-file-folder" style="width: 85%;">
                                        <i></i>
                                      </div>
                                    </div>
                                    <div class="disk-folder-list-item-action">
                                    </div>
                                    <div class="disk-folder-list-item-bottom">
                                      <div class="disk-folder-list-item-title">
                                        <div class="disk-folder-list-item-title-wrapper">
                                          <!--<input class="disk-folder-list-item-title-input" type="text" value="Test">-->
                                          <a class="disk-folder-list-item-title-link" href="" title="Test">Test</a>
                                        </div>
                                      </div>
                                      <div class="disk-folder-list-item-icons">
                                        <div class="disk-folder-list-item-locked" style="display: none;">
                                        </div>
                                        <div class="disk-folder-list-item-shared" style="display: none;">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ui-grid-tile-item">
                                <div class="ui-grid-tile-item-checkbox"></div>
                                <div class="ui-grid-tile-item-content">
                                  <div class="disk-folder-list-item disk-folder-list-item-folder">
                                    <div class="disk-folder-list-item-image">
                                      <div class="ui-icon ui-icon-file ui-icon-file-folder" >
                                        <i></i>
                                      </div>
                                    </div>
                                    <div class="disk-folder-list-item-action">
                                    </div>
                                    <div class="disk-folder-list-item-bottom">
                                      <div class="disk-folder-list-item-title">
                                        <div class="disk-folder-list-item-title-wrapper">
                                          <!--<input class="disk-folder-list-item-title-input" type="text" value="Test">-->
                                          <a class="disk-folder-list-item-title-link" href="" title="Test">Test</a>
                                        </div>
                                      </div>
                                      <div class="disk-folder-list-item-icons">
                                        <div class="disk-folder-list-item-locked">
                                        </div>
                                        <div class="disk-folder-list-item-shared">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ui-grid-tile-item">
                                <div class="ui-grid-tile-item-checkbox"></div>
                                <div class="ui-grid-tile-item-content">
                                  <div class="disk-folder-list-item disk-folder-list-item-folder">
                                    <div class="disk-folder-list-item-image">
                                      <div class="ui-icon ui-icon-file ui-icon-file-folder">
                                        <i></i>
                                      </div>
                                    </div>
                                    <div class="disk-folder-list-item-action">
                                    </div>
                                    <div class="disk-folder-list-item-bottom">
                                      <div class="disk-folder-list-item-title">
                                        <div class="disk-folder-list-item-title-wrapper">
                                          <!--<input class="disk-folder-list-item-title-input" type="text" value="Test">-->
                                          <a class="disk-folder-list-item-title-link" title="Test">Test</a>
                                        </div>
                                      </div>
                                      <div class="disk-folder-list-item-icons">
                                        <div class="disk-folder-list-item-locked">
                                        </div>
                                        <div class="disk-folder-list-item-shared">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ui-grid-tile-item">
                                <div class="ui-grid-tile-item-checkbox"></div>
                                <div class="ui-grid-tile-item-content">
                                  <div class="disk-folder-list-item disk-folder-list-item-folder">
                                    <div class="disk-folder-list-item-image">
                                      <div class="ui-icon ui-icon-file ui-icon-file-folder" style="width: 85%;">
                                        <i></i>
                                      </div>
                                    </div>
                                    <div class="disk-folder-list-item-action">
                                    </div>
                                    <div class="disk-folder-list-item-bottom">
                                      <div class="disk-folder-list-item-title">
                                        <div class="disk-folder-list-item-title-wrapper">
                                          <!--<input class="disk-folder-list-item-title-input" type="text" value="Test">-->
                                          <a class="disk-folder-list-item-title-link" href="" title="Test">Test</a>
                                        </div>
                                      </div>
                                      <div class="disk-folder-list-item-icons">
                                        <div class="disk-folder-list-item-locked" style="display: none;">
                                        </div>
                                        <div class="disk-folder-list-item-shared" style="display: none;">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ui-grid-tile-item">
                                <div class="ui-grid-tile-item-checkbox"></div>
                                <div class="ui-grid-tile-item-content">
                                  <div class="disk-folder-list-item disk-folder-list-item-folder">
                                    <div class="disk-folder-list-item-image">
                                      <div class="ui-icon ui-icon-file ui-icon-file-folder" style="width: 85%;">
                                        <i></i>
                                      </div>
                                    </div>
                                    <div class="disk-folder-list-item-action">
                                    </div>
                                    <div class="disk-folder-list-item-bottom">
                                      <div class="disk-folder-list-item-title">
                                        <div class="disk-folder-list-item-title-wrapper">
                                          <!--<input class="disk-folder-list-item-title-input" type="text" value="Test">-->
                                          <a class="disk-folder-list-item-title-link" href="" title="Test">Test</a>
                                        </div>
                                      </div>
                                      <div class="disk-folder-list-item-icons">
                                        <div class="disk-folder-list-item-locked" style="display: none;">
                                        </div>
                                        <div class="disk-folder-list-item-shared" style="display: none;">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="kb-disk-network-drive-full" style="display:none;" class="kb-disk-network-drive-full-style">
                        <div id="kb-disk-network-drive"></div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="wduf-uploader area" style="display: none;">
                    <span class="kb-disk wd-fa-add-file-light">
                      <span class="wd-fa-add-file-light-text">
                        <span class="wd-fa-add-file-light-title">
                          <span class="wd-fa-add-file-light-title-text">Загрузить файл или картинку</span>
                        </span>
                        <span class="wd-fa-add-file-light-descript">Перетащить с помощью Drag'n'drop</span>
                      </span>
                    </span>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'mainpage'
}
</script>

<style scoped>

</style>
