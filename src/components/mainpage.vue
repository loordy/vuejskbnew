<template>
  <div id="mainpage">
      <table class="kb-layout-inner-inner-table top-menu-mode page-one-column pagetitle-toolbar-field-view no-hidden no-all-paddings no-background grid-mode page-one-column">
        <colgroup>
          <col class="kb-layout-inner-inner-cont">
        </colgroup>
        <!--Header-->
        <tr class="kb-layout-inner-inner-top-row">
          <td class="kb-layout-inner-inner-cont">
            <div class="page-header">
              <div class="pagetitle-wrap">
                <div class="pagetitle-inner-container">
                  <div class="pagetitle-menu pagetitle-container pagetitle-last-item-in-a-row" id="pagetitle-menu"></div>
                  <div class="pagetitle">
                    <span id="pagetitle" class="pagetitle-item">Мой Диск</span>
                    <span class="pagetitle-star" id="pagetitle-star" title="Добавить текущую страницу в левое меню"></span>
                  </div>
                  <div class="pagetitle-container pagetitle-flexible-space" style="overflow: hidden;">

                    <div class="main-ui-filter-search main-ui-filter-theme-default" id="folder_list_4326_search_container">
                      <input type="text" tabindex="1" value="" name="FIND" placeholder="Фильтр + поиск" class="main-ui-filter-search-filter" id="folder_list_4326_search" autocomplete="off">
                      <div class="main-ui-item-icon-block">
                        <span class="main-ui-item-icon main-ui-search"></span>
                        <span class="main-ui-item-icon main-ui-delete"></span>
                      </div>
                    </div>
                    <div class="pagetitle-container pagetitle-align-right-container">
                      <a class="ui-btn ui-btn-light-border js-disk-trashcan-button" href="">Корзина</a>
                      <span id="kb-disk-settings-change-btn" class="ui-btn ui-btn-light-border ui-btn-icon-setting"></span>
                      <span id="kb-disk-add-menu" class="ui-btn ui-btn-primary ui-btn-dropdown">Добавить</span>
                    </div>
                  </div>
                </div>
              </div>
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
                      <a href="" class="disk-folder-list-view-item disk-folder-list-view-item-lines "></a>
                      <a href="" class="disk-folder-list-view-item disk-folder-list-view-item-grid js-disk-change-view disk-folder-list-view-item-active"></a>
                      <a href="" class="disk-folder-list-view-item disk-folder-list-view-item-grid-tile js-disk-change-view "></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <!--Workarea-->
        <tr>
          <td class="kb-layout-inner-inner-cont">
            <div id="workarea">
              <div id="sidebar"></div>
              <div id="workarea-content">
                <div class="workarea-content-paddings">
                  <div class="kb-disk-container posr" id="kb-disk-container" style="position: relative;">
                    <table style="width: 100%;" cellpadding="0" cellspacing="0">
                      <tbody>
                      <tr>
                        <td>
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
                                              <input class="disk-folder-list-item-title-input" type="text" value="Test">
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
                      </tbody>
                    </table>
                  </div>
                  <div class="wduf-uploader area">
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
  </div>
</template>

<script>
export default {
  name: 'mainpage'
}
</script>

<style scoped>

</style>
