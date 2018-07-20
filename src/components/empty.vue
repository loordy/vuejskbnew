<template>
  <td class="kb_layout_inner_inner_cont">
      <div id="workarea">
        <div id="sidebar"></div>
        <div id="workarea_content">
          <div class="workarea_content_paddings">
            <div class="kb_disk_container posr" id="kb_disk_container" style="position: relative;">
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
</template>
<script>
export default {
  name: 'empty'
}
</script>
