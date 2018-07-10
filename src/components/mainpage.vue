<template>
  <td>
    <div class="kb-disk-interface-toolbar-container">

      <div class="kb-disk-interface-toolbar " id="folder_toolbar">
        <table cellpadding="0" cellspacing="0" border="0" class="kb-disk-interface-toolbar" style="width: 100%;">
          <tbody>
          <tr>
            <td class="kb-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                <tr>
                  <td>
                    <label class="kb-disk-context-button" title="Загрузка нового документа" for="inputContainerFolderList">
                      <span class="kb-disk-context-button-icon element-upload"></span>
                      <span class="kb-disk-context-button-text">Загрузить</span>
                      <form id="formPostAjax"><input id="inputContainerFolderList" type="file" multiple="multiple" title="Загрузка нового документа" name="kbu_files[]"><input type="hidden" name="targetFolderId" value="524"></form></label>
                  </td>
                  <td>
                    <a id="" href="javascript:kb.Disk['FolderToolbarClass_d9XeFL'].createFile();" title="Создать документ" hidefocus="true" class="kb-disk-context-button">
                      <span class="kb-disk-context-button-icon docs-add"></span>
                      <span class="kb-disk-context-button-text">Создать документ</span>
                    </a>
                  </td>
                  <td>
                    <a id="" href="javascript:kb.Disk['FolderToolbarClass_d9XeFL'].createFolder();" title="Создать вложенную папку" hidefocus="true" class="kb-disk-context-button">
                      <span class="kb-disk-context-button-icon folder-add"></span>
                      <span class="kb-disk-context-button-text">Создать папку</span>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
            <td class="kb-disk-content " style="text-align: right;">
              Показать:
              <span id="folder_toolbar_dropdown_filter" class="popup-control">
												<span class="popup-current">
													<span class="popup-current-text">
														Все <span class="icon-arrow"></span>
													</span>
												</span>
											</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- 0 -->
    </div>

    <div class="kb-disk-interface-toolbar-container" style="max-height: 60px; overflow: hidden;">
      <div class="kb-disk-interface-sort">
        Сортировать:
        <span id="sort_by_column" class="popup-control">
								<span class="popup-current">
									<span class="popup-current-text">
										По дате<span class="icon-arrow"></span>
									</span>
								</span>
							</span>

        <span class="kb-disk-interface-view-mode">
								<span class="view-mode-tile " onclick="jsUtils.Redirect(arguments, '?viewMode=tile');"></span>
								<span class="view-mode-grid current" onclick="jsUtils.Redirect(arguments, '?viewMode=grid');"></span>
							</span>
      </div>

      <div id="breadcrumbs_8ugwx" class="kb-disk-interface-bread-crumbs ovh " style="opacity: 1;">
							<span class="kb-disk-interface-bread-crumbs-item-container" data-objectparentpath="/company/personal/user/481/disk/path/" data-isroot="1" data-objectid="524" data-objectname="Мой Диск">
								<a href="/company/personal/user/481/disk/path/" class="kb-disk-interface-bread-crumbs-item-link" title="Мой Диск" alt="Мой Диск">
									<span class="kb-disk-interface-bread-crumbs-item-current">Мой Диск</span>
								</a>
								<span class="clb"></span>
							</span>
      </div>
      <!-- 1 -->

      <div style="clear: both;"></div>
    </div>

    <div class="kb-disk-interface-filelist">
      <form name="form_folder_list_496" action="/company/personal/user/481/disk/path/?bitrix_include_areas=N" method="POST">

        <input type="hidden" name="sessid" id="sessid" value="c628a5040f87561043c0dfc3f301fe23"><table cellspacing="0" class="kb-disk-interface-grid" id="folder_list_496">
        <thead>
        <tr class="kb-disk-grid-gutter" oncontextmenu="return kbGrid_folder_list_496.settingsMenu">
          <td class=" kb-disk-left"><div class="empty"></div></td>
          <td class=""><div class="empty"></div></td>
          <td class="kb-disk-sorted"><div class="empty"></div></td>
          <td class=" kb-disk-right"><div class="empty"></div></td>
        </tr>
        <tr class="kb-disk kb-disk-grid-head" oncontextmenu="return kbGrid_folder_list_496.settingsMenu" ondblclick="kbGrid_folder_list_496.EditCurrentView()">
          <td class="kb-disk-checkbox-col kb-disk-left" width="1%"><input type="checkbox" name="" id="folder_list_496_check_all" value="" title="Отметить все/снять отметку у всех" onclick="kbGrid_folder_list_496.SelectAllRows(this);"></td>
          <td class="kb-disk-actions-col" width="1%"><a href="javascript:void(0);" onclick="kbGrid_folder_list_496.menu.ShowMenu(this, kbGrid_folder_list_496.settingsMenu, false, false, kbGrid_folder_list_496.SaveColumns);return false;" title="Настроить список" class="kb-disk-action"></a></td>
          <td class="kb-disk-sortable" onclick="kbGrid_folder_list_496.Sort('/company/personal/user/481/disk/path/?by=NAME&amp;order=', '', 'asc', arguments);" oncontextmenu="return [{'TEXT': 'Сортировать по возрастанию', 'ONCLICK':'kbGrid_folder_list_496.Sort(\'/company/personal/user/481/disk/path/?by=NAME&amp;order=\', \'desc\')', 'ICONCLASS':'kb-disk-grid-sort-asc'}, {'TEXT': 'Сортировать по убыванию', 'ONCLICK':'kbGrid_folder_list_496.Sort(\'/company/personal/user/481/disk/path/?by=NAME&amp;order=\', \'asc\')', 'ICONCLASS':'kb-disk-grid-sort-desc'}, {'TEXT': 'Скрыть колонку', 'ONCLICK':'kbGrid_folder_list_496.HideColumn(\'NAME\')', 'DISABLED':false}]" title="Сортировка: Название">
            <table cellspacing="0" class="kb-disk-grid-sorting">
              <tbody>
              <tr>
                <td>Название</td>
                <td class="kb-disk-sort-sign"><div class="empty"></div></td>
              </tr>
              </tbody>
            </table>
          </td>
          <td class="kb-disk-sortable kb-disk-sorted" onclick="kbGrid_folder_list_496.Sort('/company/personal/user/481/disk/path/?by=UPDATE_TIME&amp;order=', 'desc', 'desc', arguments);" oncontextmenu="return [{'TEXT': 'Сортировать по возрастанию', 'ONCLICK':'kbGrid_folder_list_496.Sort(\'/company/personal/user/481/disk/path/?by=UPDATE_TIME&amp;order=\', \'desc\')', 'ICONCLASS':'kb-disk-grid-sort-asc'}, {'TEXT': 'Сортировать по убыванию', 'ONCLICK':'kbGrid_folder_list_496.Sort(\'/company/personal/user/481/disk/path/?by=UPDATE_TIME&amp;order=\', \'asc\')', 'ICONCLASS':'kb-disk-grid-sort-desc'}, {'TEXT': 'Скрыть колонку', 'ONCLICK':'kbGrid_folder_list_496.HideColumn(\'UPDATE_TIME\')', 'DISABLED':false}]" title="Сортировка: Изменен (упорядочено по убыванию)">
            <table cellspacing="0" class="kb-disk-grid-sorting">
              <tbody>
              <tr>
                <td>Изменен</td>
                <td class="kb-disk-sort-sign kb-disk-sort-down"><div class="empty"></div></td>
              </tr>
              </tbody>
            </table>
          </td>
          <td class="kb-disk-sortable" onclick="kbGrid_folder_list_496.Sort('/company/personal/user/481/disk/path/?by=FORMATTED_SIZE&amp;order=', '', 'asc', arguments);" oncontextmenu="return [{'TEXT': 'Сортировать по возрастанию', 'ONCLICK':'kbGrid_folder_list_496.Sort(\'/company/personal/user/481/disk/path/?by=FORMATTED_SIZE&amp;order=\', \'desc\')', 'ICONCLASS':'kb-disk-grid-sort-asc'}, {'TEXT': 'Сортировать по убыванию', 'ONCLICK':'kbGrid_folder_list_496.Sort(\'/company/personal/user/481/disk/path/?by=FORMATTED_SIZE&amp;order=\', \'asc\')', 'ICONCLASS':'kb-disk-grid-sort-desc'}, {'TEXT': 'Скрыть колонку', 'ONCLICK':'kbGrid_folder_list_496.HideColumn(\'FORMATTED_SIZE\')', 'DISABLED':false}]" title="Сортировка: Размер">
            <table cellspacing="0" class="kb-disk-grid-sorting">
              <tbody>
              <tr>
                <td>Размер</td>
                <td class="kb-disk-sort-sign"><div class="empty"></div></td>
              </tr>
              </tbody>
            </table>
          </td>
          <td class="tar vam kb-disk-right">
            <span onclick="kbGrid_folder_list_496.menu.ShowMenu(this, kbGrid_folder_list_496.settingsMenu[1].MENU, false, false, kbGrid_folder_list_496.SaveColumns);return false;" class="kb-head-advanced-more"></span>
          </td>
        </tr>
        </thead>
        <tbody>

        <tr class=" kb-top"><td class="kb-disk-not-result kb-disk-left kb-disk-right" colspan="6">Нет данных</td></tr>

        </tbody>
        <tfoot>
        <tr class=" kb-disk-bottom">
          <td colspan="6" class=" kb-disk-left kb-disk-right">
            <table cellpadding="0" cellspacing="0" border="0" class="kb-disk-table-footer kb-disk-grid-footer">
              <tbody><tr>
                <td>Отмечено: <span id="folder_list_496_selected_span">0</span></td>
                <td class="tar">Всего: <span id="kb-disk-total-grid-item">0</span></td>

                <td class="tar" style="width: 100%;"><span id="kb-btn-disk-files-number" class="kb-disk-files-number" title="Показать число элементов и размер файлов">Файлов: </span><span id="kb-disk-files-count-data" class="kb-disk-amt">--</span></td>

                <td class="tar" style="width: 100%;">Размер: <span id="kb-disk-files-size-data" class="kb-disk-amt">--</span></td>
              </tr></tbody>
            </table>
          </td>
        </tr>
        </tfoot>
      </table>

        <div class="kb-disk-footer-interface-toolbar-container">
          <input type="hidden" name="action_button_folder_list_496" value="copy">
          <table cellpadding="0" cellspacing="0" border="0" class="">
            <tbody>
            <tr>
              <td class="kb-disk-left"><div class="empty"></div></td>-->
              <td class="vam" style="display:none" id="kb_grid_folder_list_496_action_buttons">
                <input type="submit" name="save" value="Сохранить" title="Сохранить изменения" class="kb-disk-btn kb-disk-btn-medium kb-disk-btn-green">
                <input type="button" name="" value="Отменить" title="Отменить режим редактирования" onclick="kbGrid_folder_list_496.ActionCancel();" class="kb-disk-btn kb-disk-btn-medium kb-disk-btn-lightgray">
              </td>

              <td class="vam">
                &nbsp;
              </td>
              <td class="vam">
												<span class="popup-control">
													<span class="popup-current">
														<span id="folder-list-action-all-btn" class="popup-current-text fwn" data-group-action="copy">
															<span class="js-text-group-action">Скопировать</span>
															<span class="icon-arrow"></span>
														</span>
													</span>
												</span>
              </td>
              <td class="vam">
												<span class="popup-control">
													<span class="popup-current">
														<span id="folder-list-action-show-tree" class="popup-current-text fwn">
															<span>Верхний уровень</span>
															<span class="icon-arrow"></span>
														</span>
													</span>
												</span>
              </td>
              <td class="vam" style="padding-left:2px;"><input class="kb-disk-btn kb-disk-btn-medium kb-disk-btn-gray mb0" type="submit" name="apply" value="Применить" disabled=""></td>
              <td class="kb-disk-right"><div class="empty"></div></td>
            </tr>
            <tr class="kb-disk-bottom"><td class="kb-disk-left"><div class="empty"></div></td><td><div class="empty"></div></td><td class="kb-disk-right"><div class="empty"></div></td></tr>
            </tbody></table>
        </div>
        <input id="grid_group_action_target_object" name="grid_group_action_target_object" type="hidden" value="524"></form>

      <div style="display:none">

        <div id="view_settings_folder_list_496">
          <table width="100%">
            <tbody><tr class="section">
              <td colspan="2">Представление</td>
            </tr>
            <tr>
              <td align="right" width="50%">Название представления:</td>
              <td><input type="text" name="view_name" value="" size="40" maxlength="255"></td>
            </tr>
            <tr class="section">
              <td colspan="2">Колонки списка</td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                <table>
                  <tbody><tr>
                    <td style="background-image:none" nowrap="">
                      <div style="margin-bottom:5px">Доступные колонки:</div>
                      <select style="min-width:150px;" name="view_all_cols" multiple="" size="12" ondblclick="this.form.add_btn.onclick()" onchange="this.form.add_btn.disabled = (this.selectedIndex == -1)">
                      </select>
                    </td>
                    <td style="background-image:none">
                      <div style="margin-bottom:5px"><input type="button" name="add_btn" value=">" title="Добавить колонку" style="width:30px;" disabled="" onclick="jsSelectUtils.addSelectedOptions(this.form.view_all_cols, this.form.view_cols, false); jsSelectUtils.deleteSelectedOptions(this.form.view_all_cols); "></div>
                      <div style="margin-bottom:5px"><input type="button" name="del_btn" value="<" title="Удалить колонку" style="width:30px;" disabled="" onclick="jsSelectUtils.addSelectedOptions(this.form.view_cols, this.form.view_all_cols, false, true); jsSelectUtils.deleteSelectedOptions(this.form.view_cols);"></div>
                    </td>
                    <td style="background-image:none" nowrap="">
                      <div style="margin-bottom:5px">Выбранные колонки:</div>
                      <select style="min-width:150px;" name="view_cols" multiple="" size="12" ondblclick="this.form.del_btn.onclick()" onchange="this.form.del_btn.disabled = this.form.up_btn.disabled = this.form.down_btn.disabled = (this.selectedIndex == -1)">
                      </select>
                    </td>
                    <td style="background-image:none">
                      <div style="margin-bottom:5px"><input type="button" name="up_btn" value="Выше" title="Переместить выше в списке" class="kb-grid-btn" style="width:60px;" disabled="" onclick="jsSelectUtils.moveOptionsUp(this.form.view_cols)"></div>
                      <div style="margin-bottom:5px"><input type="button" name="down_btn" value="Ниже" title="Переместить ниже в списке" class="kb-grid-btn" style="width:60px;" disabled="" onclick="jsSelectUtils.moveOptionsDown(this.form.view_cols)"></div>
                    </td>
                  </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr class="section">
              <td colspan="2">Сортировка по умолчанию</td>
            </tr>
            <tr>
              <td align="right">Упорядочить по умолчанию по полю:</td>
              <td><select name="view_sort_by">
                <option value="">(по умолчанию)</option>
                <option value="ID">ID</option>
                <option value="NAME">Название</option>
                <option value="UPDATE_TIME">Изменен</option>
                <option value="FORMATTED_SIZE">Размер</option>
              </select></td>
            </tr>
            <tr>
              <td align="right">Направление сортировки:</td>
              <td><select name="view_sort_order">
                <option value="">(по умолчанию)</option>
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
              </select></td>
            </tr>
            <tr class="section">
              <td colspan="2">Постраничная навигация</td>
            </tr>
            <tr>
              <td align="right" width="50%">Количество записей на странице:</td>
              <td><select name="view_page_size">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
              </select></td>
            </tr>
            <tr class="section">
              <td colspan="2">Сохраненный фильтр</td>
            </tr>
            <tr>
              <td align="right">Применить сохраненный фильтр:</td>
              <td><select name="view_filters">
              </select></td>
            </tr>
            <tr class="section">
              <td colspan="2">Общие настройки</td>
            </tr>
            <tr>
              <td colspan="2"><input type="checkbox" name="set_default_settings" id="set_default_settings_folder_list_496" onclick="kb('delete_users_settings_folder_list_496').disabled = !this.checked;"><label for="set_default_settings_">Установить данные настройки по умолчанию</label></td>
            </tr>
            <tr>
              <td colspan="2"><input type="checkbox" name="delete_users_settings" id="delete_users_settings_folder_list_496" disabled=""><label for="delete_users_settings_folder_list_496">Заменить все настройки пользователей данными настройками</label></td>
            </tr>
            </tbody></table>
        </div>

        <div id="views_list_folder_list_496">
          <div style="float:left; width:80%">
            <select name="views_list" size="17" style="width:100%; height:250px;" ondblclick="this.form.views_edit.onclick()">
              <option value="default" selected="">&lt;Представление по умолчанию&gt;</option>
            </select>
          </div>
          <div style="width:20%;float:left;">
            <div style="margin-left:5px;">
              <div style="margin-bottom:5px"><input type="button" name="views_add" value="Добавить" title="Добавить новое представление" style="width:100%;" onclick="kbGrid_folder_list_496.AddView()"></div>
              <div style="margin-bottom:5px"><input type="button" name="views_edit" value="Изменить" title="Изменить выбранное представление" style="width:100%;" onclick="if(this.form.views_list.value) kbGrid_folder_list_496.EditView(this.form.views_list.value)"></div>
              <div style="margin-bottom:5px"><input type="button" name="views_delete" value="Удалить" title="Удалить выбранное представление" style="width:100%;" onclick="if(this.form.views_list.value) kbGrid_folder_list_496.DeleteView(this.form.views_list.value)"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
    </div>

    <div id="kb-disk-network-drive-full" style="display:none;" class="kb-disk-network-drive-full-style">
      <div id="kb-disk-network-drive"></div>
    </div>
    <!-- 3 -->
  </td>
</template>

<script>
export default {
  name: 'mainpage'
}
</script>

<style scoped>

</style>
