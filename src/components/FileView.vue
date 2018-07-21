<template>
  <tbody>
    <td class="kb_layout_inner_inner_cont">
      <div id="workarea">
        <div id="workarea_content">
          <div class="workarea_content_paddings">
            <div class="kb_disk_container" style="position: relative;">
              <table style="width: 100%;" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div class="kb_disk_interface_filelist">
                      <div>
                        <div>
                          <div class="ui_grid_tile_item" v-for="section in sections" :key="'section' + section.ID">
                            <div class="ui_grid_tile_item_checkbox"></div>
                            <div>
                              <div class="disk_folder_list_item ">
                                <div class="disk_folder_list_item_image" :id="section.ID" @click="select">
                                  <div class="ui_icon ui_icon_file ui_icon_file_folder" style="width: 85%;">
                                    <i></i>
                                  </div>
                                </div>
                                <div class="disk_folder_list_item_action">
                                </div>
                                <div class="disk_folder_list_item_bottom">
                                  <div class="disk_folder_list_item_title">
                                    <div class="disk_folder_list_item_title_wrapper">
                                      <input class="disk_folder_list_item_title_input" type="text" value="Test">
                                      <router-link :to='"/section/" + section.ID' class="disk_folder_list_item_title_link" :title="section.NAME">{{section.NAME}}</router-link>
                                    </div>
                                  </div>
                                  <div class="disk_folder_list_item_icons">
                                    <div class="disk_folder_list_item_locked" style="display: none;">
                                    </div>
                                    <div class="disk_folder_list_item_shared" style="display: none;">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="ui_grid_tile_item" v-for="element in elements" :key="'element' + element.ID">
                            <div class="ui_grid_tile_item_checkbox"></div>
                            <div>
                              <div class="disk_folder_list_item">
                                <div class="disk_folder_list_item_image" :id="element.ID" @click="select">
                                  <div class="ui_icon ui_icon_file ui_icon_file_folder" style="width: 85%;">
                                    <i></i>
                                  </div>
                                </div>
                                <div class="disk_folder_list_item_action">
                                </div>
                                <div class="disk_folder_list_item_bottom">
                                  <div class="disk_folder_list_item_title">
                                    <div class="disk_folder_list_item_title_wrapper">
                                      <input class="disk_folder_list_item_title_input" type="text" value="Test">
                                      <router-link :to='"/element/" + element.ID' class="disk_folder_list_item_title_link" :title="element.NAME">{{element.NAME}}</router-link>
                                    </div>
                                  </div>
                                  <div class="disk_folder_list_item_icons">
                                    <div class="disk_folder_list_item_locked" style="display: none;">
                                    </div>
                                    <div class="disk_folder_list_item_shared" style="display: none;">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
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
  name: 'fileView',
  data: function () {
    return {
      checked: [],
      targetId: false
    }
  },
  computed: {
    elements () {
      return this.$store.getters.getElementsByParentID(this.$route.params.id)
    },
    sections () {
      return this.$store.getters.getSectionsByParentID(this.$route.params.id)
    }
  },
  methods: {
    onClick: function () {
      console.log('asdasda')
    },
    select: function (event) {
      console.log(event)
      console.log(this.$store.getters.getSectionsByParentID(event.currentTarget.id))
    }
  }
}
</script>
<style scoped>
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
  .kb_disk_interface_filelist.disk_running_filter .main_grid_row_empty {
    visibility: hidden
  }

  .disk_folder_list_config {
    margin-right: 3px
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
  .bitrix24_light_theme .kb_disk_interface_filelist {
    padding: 0 !important
  }

  .kb_disk_interface_filelist_loader {
    display: block;
    height: 350px;
    position: relative
  }

  .kb_disk_interface_filelist_loader_container {
    display: block;
    height: 180px;
    position: relative
  }

  .kb_disk_interface_filelist_loader_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .kb_disk_interface_filelist_loader_text {
    display: block;
    text-align: center;
    font-size: 24px;
    color: #bfc3c8
  }

  .bitrix24_dark_theme .no_background .kb_disk_interface_filelist_loader_text {
    color: rgba(0, 0, 0, .2)
  }

  .bitrix24_light_theme .no_background .kb_disk_interface_filelist_loader_text {
    color: rgba(255, 255, 255, .8)
  }

  .bitrix24_dark_theme .no_background .kb_disk_interface_filelist_loader_wrapper .main_ui_loader_svg_circle {
    stroke: rgba(0, 0, 0, .2)
  }

  .bitrix24_light_theme .no_background .kb_disk_interface_filelist_loader_wrapper .main_ui_loader_svg_circle {
    stroke: rgba(255, 255, 255, .7)
  }

  .kb_disk_interface_filelist {
    padding: 0 20px 13px 0
  }

  .kb_disk_interface_filelist td {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    vertical-align: middle !important
  }

  .ui_grid_tile_item {
    animation: disk_folder_list_item_pointer-events 1.15s linear forwards
  }

  .disk_folder_list_item:before, .ui_grid_tile_item_selected .disk_folder_list_item:before {
    display: block
  }

  .ui_grid_tile_item_droppable .disk_folder_list_item {
    opacity: .8
  }

  .disk_folder_list_item:before, .ui_grid_tile_item_draggable .disk_folder_list_item:before, .ui_grid_tile_item_draggable_single .disk_folder_list_item:before {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(47, 198, 246, .35);
    z-index: 9;
    pointer-events: none
  }

  .disk_folder_list_item {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 17px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
    opacity: 0;
    animation: disk_folder_list_item_show .15s linear forwards;
    animation_delay: .5s
  }

  @keyframes disk_grid_tile_item_checkbox {
    from {
      display: none
    }
    to {
      display: block
    }
  }

  .disk_folder_list_item_icons {
    float: right;
    overflow: hidden;
    height: 17px;
    margin-right: -7px
  }

  .ui_grid_tile_item_draggable .disk_folder_list_item, .ui_grid_tile_item_draggable_single .disk_folder_list_item {
    opacity: 1;
    animation: none
  }

  .disk_folder_list_item_image {
    display: flex;
    position: relative;
    height: calc(100% - 30px);
    margin: 10px;
    background: no-repeat center center;
    background-size: contain
  }

  .disk_folder_list_item_image_img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%)
  }

  .disk_folder_list_item_image_folder {
    margin: 10px 35px
  }

  .disk_folder_list_item_bottom {
    clear: both;
    display: flex;
    height: 19px;
    min-width: 100%;
    margin: 0
  }

  .disk_folder_list_item_title {
    flex: 1;
    position: relative
  }

  .disk_folder_list_item_title_wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0
  }

  .disk_folder_list_item_title_link {
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: 'OpenSans_Semibold', Arial, sans-serif;
    color: #000;
    font-size: 12px;
    text-decoration: none;
    opacity: 1;
    border-bottom: 1px solid transparent;
    transition: none;
    cursor: pointer
  }

  .ui_icon {
    display: inline-block;
    width: 39px
  }

  .ui_icon_xs {
    width: 26px
  }

  .ui_icon_sm {
    width: 31px
  }

  .ui_icon_md {
    width: 39px
  }

  .ui_icon_lg {
    width: 47px
  }

  .ui_icon_file i {
    display: block;
    padding-top: 100%;
    max-width: 100%;
    width: 100%;
    height: 0;
    background: url(images/sprite_files.min.svg?v1.2) no-repeat center;
    background-size: 100% auto;
    --icon-file-col: 14
  }

  .ui_icon_file i, .ui_icon_file_empty i {
    background-position: 0 calc(100% / var(--icon-file-col) * 0)
  }

  .ui_icon_file_txt i {
    background-position: 0 calc(100% / var(--icon-file-col) * 1)
  }

  .ui_icon_file_doc i {
    background-position: 0 calc(100% / var(--icon-file-col) * 2)
  }

  .ui_icon_file_xls i {
    background-position: 0 calc(100% / var(--icon-file-col) * 3)
  }

  .ui_icon_file_php i {
    background-position: 0 calc(100% / var(--icon-file-col) * 4)
  }

  .ui_icon_file_pdf i {
    background-position: 0 calc(100% / var(--icon-file-col) * 5)
  }

  .ui_icon_file_ppt i {
    background-position: 0 calc(100% / var(--icon-file-col) * 6)
  }

  .ui_icon_file_rar i {
    background-position: 0 calc(100% / var(--icon-file-col) * 7)
  }

  .ui_icon_file_zip i {
    background-position: 0 calc(100% / var(--icon-file-col) * 8)
  }

  .ui_icon_file_set i {
    background-position: 0 calc(100% / var(--icon-file-col) * 9)
  }

  .ui_icon_file_mov i {
    background-position: 0 calc(100% / var(--icon-file-col) * 10)
  }

  .ui_icon_file_img i {
    background-position: 0 calc(100% / var(--icon-file-col) * 11)
  }

  .ui_icon_file_folder i {
    background-position: 0 calc(100% / var(--icon-file-col) * 12)
  }

  .ui_icon_file_folder_shared i {
    background-position: 0 calc(100% / var(--icon-file-col) * 13)
  }

  .ui_icon_file_folder_shared-2 i {
    background-position: 0 calc(100% / var(--icon-file-col) * 14)
  }

  .kb_ie .ui_icon_file i, .kb_ie .ui_icon_file_empty i {
    background-position: 0 0
  }

  .kb_ie .ui_icon_file_txt i {
    background-position: 0 7.14%
  }

  .kb_ie .ui_icon_file_doc i {
    background-position: 0 14.28%
  }

  .kb_ie .ui_icon_file_xls i {
    background-position: 0 21.42%
  }

  .kb_ie .ui_icon_file_php i {
    background-position: 0 28.58%
  }

  .kb_ie .ui_icon_file_pdf i {
    background-position: 0 35.72%
  }

  .kb_ie .ui_icon_file_ppt i {
    background-position: 0 42.86%
  }

  .kb_ie .ui_icon_file_rar i {
    background-position: 0 50%
  }

  .kb_ie .ui_icon_file_zip i {
    background-position: 0 57.14%
  }

  .kb_ie .ui_icon_file_set i {
    background-position: 0 64.28%
  }

  .kb_ie .ui_icon_file_mov i {
    background-position: 0 71.42%
  }

  .kb_ie .ui_icon_file_img i {
    background-position: 0 78.58%
  }

  .kb_ie .ui_icon_file_folder i {
    background-position: 0 85.72%
  }

  .kb_ie .ui_icon_file_folder_shared i {
    background-position: 0 92.86%
  }

  .kb_ie .ui_icon_file_folder_shared-2 i {
    background-position: 0 100%
  }

  .ui_icon_common i {
    display: block;
    padding-top: 100%;
    max-width: 100%;
    width: 100%;
    height: 0;
    border-radius: 50%; /*background:#7b8691 url(/bitrix/js/ui/icons/images/sprite_common.svg) no-repeat center;*/
    background-size: 100% auto;
    --icon-common-col: 8
  }

  .ui_icon_common i, .ui_icon_common_user i {
    background-position: 0 calc(100% / var(--icon-common-col) * 0)
  }

  .ui_icon_common_phone i {
    background-position: 0 calc(100% / var(--icon-common-col) * 1)
  }

  .ui_icon_common_notification i {
    background-position: 0 calc(100% / var(--icon-common-col) * 2)
  }

  .ui_icon_common_user_group i {
    background-position: 0 calc(100% / var(--icon-common-col) * 3)
  }

  .ui_icon_common_company i {
    background-position: 0 calc(100% / var(--icon-common-col) * 4)
  }

  .ui_icon_common_bitrix24 i {
    background-position: 0 calc(100% / var(--icon-common-col) * 5)
  }

  .ui_icon_common_cloud i {
    background-position: 0 calc(100% / var(--icon-common-col) * 6)
  }

  .ui_icon_common_folder i {
    background-position: 0 calc(100% / var(--icon-common-col) * 7)
  }

  .ui_icon_common_info i {
    background-position: 0 calc(100% / var(--icon-common-col) * 8)
  }

  .kb_ie .ui_icon_common i {
    display: block;
    padding-top: 100%;
    max-width: 100%;
    width: 100%;
    height: 0;
    border-radius: 50%; /*background:#7b8691 url(/bitrix/js/ui/icons/images/sprite_common.svg) no-repeat center;*/
    background-size: 100% auto;
    --icon-common-col: 8
  }

  .kb_ie .ui_icon_common i, .kb_ie .ui_icon_common_user i {
    background-position: 0 0
  }

  .kb_ie .ui_icon_common_phone i {
    background-position: 0 12.5%
  }

  .kb_ie .ui_icon_common_notification i {
    background-position: 0 25%
  }

  .kb_ie .ui_icon_common_user_group i {
    background-position: 0 37.5%
  }

  .kb_ie .ui_icon_common_company i {
    background-position: 0 50%
  }

  .kb_ie .ui_icon_common_bitrix24 i {
    background-position: 0 62.5%
  }

  .kb_ie .ui_icon_common_cloud i {
    background-position: 0 75%
  }

  .kb_ie .ui_icon_common_folder i {
    background-position: 0 87.5%
  }

  .kb_ie .ui_icon_common_info i {
    background-position: 0 100%
  }

  .disk_folder_list_item_action {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 30px;
    cursor: pointer;
    opacity: .2;
    transition: .1s
  }

  .disk_folder_list_item_action:hover {
    opacity: .5
  }

  .disk_folder_list_item_action:before {
    content: '';
    display: block;
    width: 12px;
    height: 2px;
    margin: 12px auto;
    background: #525c69;
    box-shadow: 0 4px 0 #525c69, 0 8px 0 #525c69
  }

  .disk_folder_list_item_title_link:hover {
    color: #000;
    text-decoration: none;
    border-color: rgba(0, 0, 0, .25)
  }

  .disk_folder_list_item_title_input {
    position: absolute;
    width: 0;
    left: -6px;
    top: -4px;
    padding: 0 5px;
    height: 24px;
    background: #fff;
    opacity: 0;
    border: 1px solid rgba(130, 139, 149, .67);
    pointer-events: none;
    font-family: 'OpenSans_Semibold', Arial, sans-serif;
    color: #000;
    font-size: 12px;
    border-radius: 2px;
    box-sizing: border-box;
    z-index: 99;
    transition: .2s
  }

  .disk_folder_list_item_title_rename .disk_folder_list_item_title_link {
    transition: .2s;
    pointer-events: none;
    opacity: 0
  }

  .disk_folder_list_item_title_link_renamed {
    animation: disk_folder_list_item_title_link_renamed .5s linear forwards
  }

  @keyframes disk_folder_list_item_title_link_renamed {
    0% {
      opacity: 1
    }
    50% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  .disk_folder_list_item_title_rename .disk_folder_list_item_title_input {
    pointer-events: auto;
    width: 100%;
    opacity: 1
  }

  .disk_folder_list_item_bottom_without_icons .disk_folder_list_item_title_rename .disk_folder_list_item_title_input {
    width: calc(100% + 12px)
  }

  .disk_folder_list_item_locked, .disk_folder_list_item_shared {
    display: inline-block;
    vertical-align: middle;
    margin-left: 3px;
    width: 14px;
    height: 14px;
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-918.000000%2C%20-759.000000%29%22%3E%3Cpath%20d%3D%22M925%2C770.968127%20C924.075211%2C770.968127%20923.209972%2C770.714648%20922.468465%2C770.274535%20L929.274437%2C763.468465%20C929.714549%2C764.209972%20929.968127%2C765.075211%20929.968127%2C766%20C929.968127%2C768.743803%20927.743803%2C770.968127%20925%2C770.968127%20M925%2C761.031972%20C925.924789%2C761.031972%20926.790127%2C761.285549%20927.531634%2C761.725563%20L920.725563%2C768.531634%20C920.285451%2C767.790127%20920.031972%2C766.924887%20920.031972%2C766%20C920.031972%2C763.256296%20922.256197%2C761.031972%20925%2C761.031972%20M925%2C759%20C921.134028%2C759%20918%2C762.134028%20918%2C766%20C918%2C769.86607%20921.134028%2C773%20925%2C773%20C928.865972%2C773%20932%2C769.86607%20932%2C766%20C932%2C762.134028%20928.865972%2C759%20925%2C759%22%20fill%3D%22%23FF5752%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no-repeat
  }

  .disk_folder_list_item_shared {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill_rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22%20fill%3D%22%232FC6F6%22/%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M7.53921791%2C6.29597386%20C7.53921791%2C6.29597386%207.46634358%2C6.52026144%207.45481283%2C6.5503268%20C7.4283655%2C6.58886738%207.40605702%2C6.62997406%207.38824198%2C6.67299346%20C7.40361631%2C6.67299346%207.55843583%2C6.74379739%207.55843583%2C6.74379739%20L8.1606484%2C6.92809804%20L8.15188503%2C7.20770588%20C8.03791808%2C7.25219075%207.93762087%2C7.32468058%207.86069519%2C7.4181634%20C7.83165243%2C7.48026865%207.79610134%2C7.53926171%207.7546123%2C7.59419608%20C8.30316845%2C7.81216993%208.62403075%2C8.1311634%208.63709893%2C8.48833987%20C8.64601604%2C8.5519281%208.97887032%2C9.72192157%208.99793449%2C9.98544444%20L11.5320856%2C9.98544444%20C11.534238%2C9.97447059%2011.4552139%2C8.46083007%2011.4552139%2C8.44955556%20C11.4552139%2C8.44955556%2011.3097727%2C8.08501307%2011.0791578%2C8.04788235%20C10.850594%2C8.01958389%2010.6296853%2C7.94875765%2010.4283623%2C7.83922876%20C10.2954059%2C7.7635328%2010.1553166%2C7.70050666%2010.0100267%2C7.65101961%20C9.93581317%2C7.58719722%209.87812111%2C7.50708985%209.84167781%2C7.41726144%20C9.76485939%2C7.32366942%209.66453022%2C7.25115649%209.55048797%2C7.20680392%20L9.54187834%2C6.92704575%20L10.1440909%2C6.7427451%20C10.1440909%2C6.7427451%2010.2993717%2C6.67194118%2010.3142848%2C6.67194118%20C10.2901635%2C6.62258981%2010.2624171%2C6.5750121%2010.2312634%2C6.5295817%20C10.2198864%2C6.49951634%2010.1631551%2C6.29597386%2010.1631551%2C6.29597386%20C10.251033%2C6.40619284%2010.3540974%2C6.50398216%2010.4694118%2C6.58655556%20C10.3669278%2C6.39905823%2010.2791446%2C6.20422644%2010.2068182%2C6.00373856%20C10.1585468%2C5.8184369%2010.1249822%2C5.62976708%2010.1064238%2C5.43941176%20C10.0649726%2C5.08565128%2010.0005263%2C4.73483043%209.91347594%2C4.38907843%20C9.85099705%2C4.21657068%209.74070643%2C4.06443965%209.59491979%2C3.9496732%20C9.37928688%2C3.80330692%209.12760947%2C3.71586439%208.86586898%2C3.69637255%20C8.8609492%2C3.69637255%208.85618316%2C3.69637255%208.85049465%2C3.69637255%20C8.84480615%2C3.69637255%208.84050134%2C3.69637255%208.83512032%2C3.69637255%20C8.57384245%2C3.71602899%208.32265423%2C3.80346752%208.10745321%2C3.9496732%20C7.96180728%2C4.06466111%207.85159583%2C4.21686042%207.7890508%2C4.38937908%20C7.70190881%2C4.73510458%207.63751218%2C5.0859344%207.59625668%2C5.43971242%20C7.58034915%2C5.63438642%207.54836883%2C5.82748402%207.50062834%2C6.01711765%20C7.4282675%2C6.21412862%207.33892924%2C6.40477635%207.2335762%2C6.58700654%20C7.34867489%2C6.50421775%207.45152731%2C6.40628146%207.53921791%2C6.29597386%20Z%20M8.34514037%2C8.51043791%20C8.34514037%2C8.2338366%207.97615642%2C7.918%207.24818182%2C7.734%20C7.0017175%2C7.6667055%206.76743871%2C7.56238797%206.55372326%2C7.42477778%20C6.50760027%2C7.39862092%206.51405749%2C7.15719608%206.51405749%2C7.15719608%20L6.27959893%2C7.12156863%20C6.27959893%2C7.10187582%206.2596123%2C6.81234641%206.2596123%2C6.81234641%20C6.54004011%2C6.72019608%206.51113636%2C6.17646405%206.51113636%2C6.17646405%20C6.68917112%2C6.27342484%206.80509358%2C5.84379085%206.80509358%2C5.84379085%20C7.01572193%2C5.2460915%206.70024064%2C5.28216993%206.70024064%2C5.28216993%20C6.75542733%2C4.91720596%206.75542733%2C4.54629077%206.70024064%2C4.1813268%20C6.56002674%2C2.97059477%204.44851604%2C3.29920915%204.69881016%2C3.69411765%20C4.08168449%2C3.58227451%204.22220588%2C4.95686275%204.22220588%2C4.95686275%20L4.35611631%2C5.31223529%20C4.09321524%2C5.47879739%204.2758623%2C5.68068627%204.28477941%2C5.91354248%20C4.29769385%2C6.25643791%204.51170455%2C6.18533333%204.51170455%2C6.18533333%20C4.52492647%2C6.7511634%204.80981283%2C6.82557516%204.80981283%2C6.82557516%20C4.86346925%2C7.18094771%204.83010695%2C7.12051634%204.83010695%2C7.12051634%20L4.57627674%2C7.1505817%20C4.57970223%2C7.23125355%204.57298985%2C7.31203156%204.55629011%2C7.39110458%20C4.25725936%2C7.52128758%204.19360963%2C7.59765359%203.89719251%2C7.72467974%20C3.32434492%2C7.97031373%202.70153075%2C8.2899085%202.59037433%2C8.71999346%20C2.51627005%2C9.00671678%202.42364528%2C9.55375599%202.3125%2C10.3611111%20L8.875%2C10.3611111%20C8.52176025%2C9.12732898%208.34514037%2C8.51043791%208.34514037%2C8.51043791%20Z%22/%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E%0A') center center no-repeat
  }

  .ui_grid_tile_item_droppable .ui_grid_tile_item_draggable, .ui_grid_tile_item_draggable_single {
    opacity: .9
  }

  .disk_folder_list_search_progress_inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
  }
</style>
