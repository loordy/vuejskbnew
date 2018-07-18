<template>
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
                    <div class="bx-disk-interface-filelist ">
                      <div>
                        <div class="disk-tile-grid">
                          <div class="ui-grid-tile" style="min-height: 231px;">
                            <div class="disk-folder-list-no-data-inner">
                              <div class="disk-folder-list-no-data-inner-message">В данной папке нет файлов или папок</div>
                              <div class="disk-folder-list-no-data-inner-variable">
                                <div id="disk-folder-list-no-data-upload-file" class="disk-folder-list-no-data-inner-create-file">Создать файл</div>
                                <div id="disk-folder-list-no-data-create-folder" class="disk-folder-list-no-data-inner-create-folder">Создать папку</div>
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
  </tr>
</template>
<script>
export default {
  name: 'empty'
}
</script>
