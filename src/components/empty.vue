<template>
  <tbody>
    <td class="kb_layout_inner_inner_cont">
      <div id="workarea">
        <div id="sidebar"></div>
        <div id="workarea_content">
          <div class="workarea_content_paddings">
            <div class="kb_disk_container" style="position: relative;">
              <table style="width: 100%;" cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                  <td>
                    <div class="bx_disk_interface_filelist ">
                      <div>
                        <div class="disk_tile_grid">
                          <div class="ui_grid_tile" style="min-height: 231px;">
                            <div class="disk_folder_list_no_data_inner">
                              <div class="disk_folder_list_no_data_inner_message">В данной папке нет файлов или папок</div>
                              <div class="disk_folder_list_no_data_inner_variable">
                                <div id="disk_folder_list_no_data_upload_file" class="disk_folder_list_no_data_inner_create_file">Создать файл</div>
                                <div id="disk_folder_list_no_data_create_folder" class="disk_folder_list_no_data_inner_create_folder">Создать папку</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tbody>
</template>
<script>
export default {
  name: 'empty'
}
</script>
<style scoped>
table.kb_layout_inner_inner_table td.kb_layout_inner_inner_cont,
.start_page table.kb_layout_inner_inner_table td.kb_layout_inner_inner_cont {
  padding-right: 81px;
}
.kb_layout_inner_inner_cont {
  height: 100%;
  width: 100%;
}

.kb_layout_inner_inner_top_row .kb_layout_inner_inner_cont {
  height: 74px;
}

td.kb_layout_inner_inner_cont {
  vertical-align: top;
  padding: 0 20px 0 0;
}
#workarea {
  padding: 0;
  height: 100%;
  overflow-y: hidden;
}

.kb_ie8 #workarea,
.kb_ie9 #workarea,
.kb_ie10 #workarea {
  min-height: 100%;
  height: auto;
}
.start_page #workarea .feed_post_cont_wrap {
  padding-left: 85px;
}
.start_page #workarea .feed_comments_block {
  margin-left: 68px;
}

#workarea_content {
  overflow: hidden;
  background-color: #ffffff;
  height: 100%;
}
.no_background #workarea_content {
  background: none;
}

.no_hidden #workarea,
.no_hidden #workarea_content,
.no_hidden .workarea_content_paddings {
  overflow-x: visible;
  overflow-y: visible;
}
.start_page #sidebar {
  padding-top: 0;
}
#sidebar {
  padding-left: 17px;
  position: relative;
  width: 280px;
  float: right;
}

.start_page #sidebar {
  width: 263px;
}

#sidebar:empty,
.page_one_column #sidebar {
  display: none;
}
.page_header,
#sidebar,
#workarea_content {
  opacity: 0.96;
}
.workarea_transparent #workarea_content {
  background: transparent;
}
.grid_mode .workarea_content_paddings,
.grid_mode #workarea_content {
  padding: 0;
}
.workarea_transparent .workarea_content_paddings {
  padding-top: 0;
}
.workarea_content_paddings {
  padding: 15px 15px 20px;
}

.start_page .workarea_content_paddings {
  padding: 0 0 15px 0;
}

.workarea_content_paddings {
  overflow-x: auto;
  overflow-y: visible;
  /* height:220px; */
}

.no_paddings .workarea_content_paddings {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}

.no_all_paddings .workarea_content_paddings {
  padding: 0;
}

.kb_disk_container {
  background: #fff
}

.kb_disk_container td {
  vertical-align: top
}

td.kb_disk_content {
  vertical-align: middle
}

.kb_disk_container {
  background: none !important;
  padding: 0;
  margin: 0;
  overflow: visible
}

.disk_tile_grid {
  margin-right: 12px
}

.disk_tile_grid, .bitrix24_dark_theme .disk_tile_grid, .bitrix24_light_theme .disk_folder_list_config, .bitrix24_dark_theme .disk_folder_list_config {
  margin-right: 0
}

.ui_grid_tile_item_active {
  opacity: .5
}

.ui_grid_tile_item_checkbox {
  animation: disk_grid_tile_item_checkbox 1s linear forwards
}

.ui_grid_tile_item {
  width: calc(20% - 18px);
}

.ui_grid_tile_multi_select_mode .ui_grid_tile_item_checkbox, .ui_grid_tile_item_checkbox_checked, .ui_grid_tile_item:hover .ui_grid_tile_item_checkbox {
  opacity: 1;
  pointer-events: auto;
}
.ui_grid_tile_item_checkbox {
  position: absolute;
  width: 18px;
  height: 18px;
  background: #fff;
  border: 1px solid rgba(130,139,149,.67);
  border-radius: 2px;
  top: 9px;
  right: 10px;
  pointer-events: none;
  opacity: 0;
  transition: .3s;
  z-index: 99;
}
.ui_grid_tile_item {
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin: 9px;
}
.ui_grid_tile_item_checkbox_checked {
  border-color: #2687e8;
  background: #2687e8;
  transition: .1s;
}

.disk_folder_list_no_data_inner {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  height: 100%;
  transform: translate(-50%, -50%);
  animation: disk_folder_list_no_data_inner_show .1s linear forwards;
  animation-delay: .4s;
  font-family: 'OpenSans_Light', Helvetica, Arial, sans-serif;
  color: #535c69
}

.bitrix24_light_theme .disk_folder_list_no_data_inner {
  color: rgba(255, 255, 255, .7)
}

.bitrix24_dark_theme .disk_folder_list_no_data_inner {
  color: rgba(51, 51, 51, .7)
}

@keyframes disk_folder_list_no_data_inner_show {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

.disk_folder_list_no_data_inner_message {
  display: block;
  overflow: hidden;
  font-size: 32px;
  margin-bottom: 70px;
  text-align: center;
  white-space: nowrap
}

.disk_folder_list_no_data_inner_variable {
  display: flex;
  overflow: hidden;
  font-size: 0
}

.disk_folder_list_no_data_inner_create_file, .disk_folder_list_no_data_inner_create_folder {
  position: relative;
  display: flex;
  flex: 1;
  height: 115px;
  max-width: calc(50% - 9px);
  margin-right: 9px;
  padding: 0 90px;
  border: 2px dashed rgba(83, 92, 105, .3);
  border-radius: 3px;
  color: rgba(83, 92, 105, .7);
  font-size: 22px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background: transparent;
  transition: .1s
}

.disk_folder_list_no_data_inner_create_folder {
  margin-left: 9px
}

.bitrix24_light_theme .disk_folder_list_no_data_inner_create_file, .bitrix24_light_theme .disk_folder_list_no_data_inner_create_folder {
  background: rgba(255, 255, 255, .18);
  border-color: rgba(255, 255, 255, .4);
  color: rgba(255, 255, 255, .85)
}

.bitrix24_dark_theme .disk_folder_list_no_data_inner_create_file, .bitrix24_dark_theme .disk_folder_list_no_data_inner_create_folder {
  border-color: rgba(51, 51, 51, .3);
  color: rgba(51, 51, 51, .5)
}

.disk_folder_list_no_data_inner_create_file:before, .disk_folder_list_no_data_inner_create_folder:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
  transition: .1s;
  opacity: .7
}

.disk_folder_list_no_data_inner_create_file:before {
  width: 32px;
  height: 42px
}

.disk_folder_list_no_data_inner_create_folder:before {
  width: 45px;
  height: 34px
}

.disk_folder_list_no_data_inner_create_file:before {
  background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2232px%22%20height%3D%2241px%22%20viewBox%3D%220%200%2032%2041%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20stroke%3D%22%23535c69%22%20stroke-width%3D%222%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%2C1%20L1%2C40%20L31%2C40%20L31%2C9.77882515%20L22.429578%2C1%20L1%2C1%20Z%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24%2C3.41421356%20L24%2C9%20L29.5857864%2C9%20L24%2C3.41421356%20Z%22%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') center center no-repeat
}

.disk_folder_list_no_data_inner_create_folder:before {
  background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2243px%22%20height%3D%2234px%22%20viewBox%3D%220%200%2043%2034%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-1086.000000%2C%20-544.000000%29%22%20stroke%3D%22%23535c69%22%20stroke-width%3D%222%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1107.08453%2C545%20L1087%2C545%20L1087%2C576.082471%20L1128%2C576.082471%20L1128%2C549.712329%20L1111.84611%2C549.712329%20L1107.08453%2C545%20Z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no-repeat
}

.bitrix24_light_theme .disk_folder_list_no_data_inner_create_file:before {
  background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2232px%22%20height%3D%2241px%22%20viewBox%3D%220%200%2032%2041%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%2C1%20L1%2C40%20L31%2C40%20L31%2C9.77882515%20L22.429578%2C1%20L1%2C1%20Z%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24%2C3.41421356%20L24%2C9%20L29.5857864%2C9%20L24%2C3.41421356%20Z%22%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') center center no-repeat
}

.bitrix24_light_theme .disk_folder_list_no_data_inner_create_folder:before {
  background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2243px%22%20height%3D%2234px%22%20viewBox%3D%220%200%2043%2034%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-1086.000000%2C%20-544.000000%29%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1107.08453%2C545%20L1087%2C545%20L1087%2C576.082471%20L1128%2C576.082471%20L1128%2C549.712329%20L1111.84611%2C549.712329%20L1107.08453%2C545%20Z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no-repeat
}

.bitrix24_dark_theme .disk_folder_list_no_data_inner_create_file:before {
  background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2232px%22%20height%3D%2241px%22%20viewBox%3D%220%200%2032%2041%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20stroke%3D%22%23333%22%20stroke-width%3D%222%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%2C1%20L1%2C40%20L31%2C40%20L31%2C9.77882515%20L22.429578%2C1%20L1%2C1%20Z%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24%2C3.41421356%20L24%2C9%20L29.5857864%2C9%20L24%2C3.41421356%20Z%22%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') center center no-repeat
}

.bitrix24_dark_theme .disk_folder_list_no_data_inner_create_folder:before {
  background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2243px%22%20height%3D%2234px%22%20viewBox%3D%220%200%2043%2034%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-1086.000000%2C%20-544.000000%29%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1107.08453%2C545%20L1087%2C545%20L1087%2C576.082471%20L1128%2C576.082471%20L1128%2C549.712329%20L1111.84611%2C549.712329%20L1107.08453%2C545%20Z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no-repeat
}

.disk_folder_list_no_data_inner_create_file:hover, .disk_folder_list_no_data_inner_create_folder:hover {
  background: rgba(83, 92, 105, .1);
  border-color: rgba(83, 92, 105, .4);
  color: rgba(83, 92, 105, .95)
}

.bitrix24_light_theme .disk_folder_list_no_data_inner_create_file:hover, .bitrix24_light_theme .disk_folder_list_no_data_inner_create_folder:hover {
  background: rgba(255, 255, 255, .28);
  border-color: rgba(255, 255, 255, .6);
  color: rgba(255, 255, 255, .9)
}

.bitrix24_dark_theme .disk_folder_list_no_data_inner_create_file:hover, .bitrix24_dark_theme .disk_folder_list_no_data_inner_create_folder:hover {
  background: rgba(51, 51, 51, .1);
  border-color: rgba(51, 51, 51, .5);
  color: rgba(51, 51, 51, .75)
}

.disk_folder_list_no_data_inner_create_file:hover:before, .disk_folder_list_no_data_inner_create_folder:hover:before {
  opacity: .9
}

.disk_folder_list_no_data_disabled {
  cursor: not-allowed;
  opacity: .4
}

.bitrix24_default_theme .pagetitle_align_right_container {
  margin-right: 9px
}

div.disk_folder_list_search_progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-ack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 12px 0 16px;
  height: 0;
  background: #ddf5fd;
  font: 13px 'OpenSans_Regular', "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: #716e62;
  box-sizing: border-box;
  margin-bottom: 4px
}

.disk_folder_list_search_progress_info {
  padding: 0 15px 0 0;
  box-sizing: border-box
}
</style>
