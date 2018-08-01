<template>
  <div>
  <div class="liset-item article" v-for="fb_element in fb_elements" :key="fb_element.CODE" :id="fb_element.CODE">
    <div class="article-cover"
         :style="{ backgroundImage: 'url(' + require('@/components/images/article.jpg') + ')' }">
    </div>
    <div class="article-content">
      <div class="content-title">
        <h3><router-link :to="'/artic/' + fb_element.CODE">Существуют ли B2B-продажи?</router-link></h3>
        <div class="content-edit-btn">
          <i class="fas fa-ellipsis-h"></i>
          <modal_artic_edit/>
        </div>
      </div>
      <div class="article-source-line">
        <span class="source-line-item">{{fb_element.DATE_CREATE}}</span>
        <span class="source-line-item cnt-none">Альберт Эйнштейн</span>
      </div>
      <div class="content-text-wrap">
        {{ fb_element.PREVIEW_TEXT}}
      </div>
      <div class="article-collapse">
        <button class="artc-collapse-btn">
          <span class="fas fa-angle-down"></span>
        </button>
      </div>
      <div class="article-footer">
        <div class="article-footer-tags">
               <span class="tag-item">
                  <span class="icon-list"><i class="fas fa-list-ul"></i></span>
                  <span>брендинг</span>
              </span>
          <span class="tag-item">
                  <span>обучение менеджеров</span>
              </span>
        </div>
        <div class="article-footer-pin">
          <div class="pin-item">
            <i class="far fa-comments"></i>
          </div>
          <div class="pin-item like-btn">
            <i class="far fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Modal_artic_edit from '../modals/Modal_artic_edit'

export default {
  name: 'fileView',
  components: {Modal_artic_edit},
  data: function () {
    return {
      checked: [],
      targetId: false,
      popup: false
    }
  },
  computed: {
    elements () {
      return this.$store.getters.getElementsByParentID(this.$route.params.id)
    },
    sections () {
      return
    }
  },
  methods: {
    onClick: function () {
      console.log('asdasda')
    },
    select: function (event) {
      /* console.log(event)
      console.log(this.$store.getters.getSectionsByParentID(event.currentTarget.id)) */
    },
    modal: function (event) {
      if (this.popup !== event.currentTarget.id) { this.popup = event.currentTarget.id } else { this.popup = false }
    }
  }
}
</script>
<style scoped>
.kb_disk_interface_listing {
  display: flex;
  flex-wrap: wrap;
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
    display: none;
    position: absolute;
    width: 18px;
    height: 18px;
    background: #fff;
    border: 1px solid rgba(130, 139, 149, .67);
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

  .kb_disk_interface_filelist.disk_running_filter .main_grid_row_empty {
    visibility: hidden
  }

  .disk_folder_list_config {
    margin-right: 3px
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
    background: url(../../images/sprite_files.min.svg) no-repeat center;
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

  .main_dropdown_item_selected .menu_popup_item_icon,
  .main_dropdown_item_not_selected .menu_popup_item_icon {
    width: 12px;
  }

  .main_dropdown_item_selected .menu_popup_item_icon {
    /*background: url("templates/bitrix24/images/template_sprite.png?9") no-repeat -79px -1446px;*/
  }

  .menu_popup_item.icon .menu_popup_item_icon {
    background: url(../../images/sprite_interface.min.svg) 999px 999px no-repeat;
  }

  .menu_popup_item.icon.edit .menu_popup_item_icon {
    background-position: 50% -247px;
  }

  .menu_popup_item.icon.add .menu_popup_item_icon {
    background-position: 50% -277px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .menu_popup_item.icon.remove .menu_popup_item_icon {
    background-position: 50% -277px;
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_icon, html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_text, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_icon, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_text {
    flex: 1
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_icon, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_icon {
    order: 1;
    margin: auto;
    width: 32px;
    position: relative
  }

  .menu_popup_item_upload_file {
    position: relative
  }

  #inputContainerLabelFolderList, .menu_popup_item_upload_file label {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow: hidden
  }

  .menu_popup_item_upload_file input {
    position: absolute;
    top: -100px;
    height: 100px
  }

  .kb_disk_folder_icon {
    display: inline-block;
    position: relative;
    float: left;
    width: 36px;
    height: 29px;
    margin-right: 10px;
    vertical-align: middle;
    background: url(../../images/icons_files2.png) no-repeat;
    background-position: 0 0 !important;
  }

  td {
    vertical-align: middle !important;
  }

  li {
    list-style-type: none;
  }

  .main_grid_row_action_button:before {
    display: block;
    position: absolute;
    content: "";
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px;
  }

  .main_grid_row_action_button {
    display: inline-block;
    position: relative;
    width: 14px;
    height: 12px;
    top: 3px;
    cursor: pointer;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMzAxIiB2aWV3Qm94PSIwIDAgMTYgMzAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5Hcm91cDwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTAuMjU3IDIxNy45OTJsLTMuMDQ1IDMtMy4wNDQtMy0xLjE4IDEuMTYyIDMuMDQ1IDMgMS4xOCAxLjE2MiAxLjE4LTEuMTYyIDMuMDQ0LTN6IiBmaWxsPSIjMjA1MDZCIi8+PHBhdGggZD0iTTEyLjAzMiAyNTEuODEybC0yLjkxNC0yLjg3OEwxMS4wODYgMjQ3IDE0IDI0OS44NzdsLTEuOTY4IDEuOTM1ek0wIDI2MC45OTZsMS4xNjgtNC4yMDQgMi45MTUgMi44NzdMLjAwMyAyNjEgMCAyNjAuOTk2em00Ljk1NC0yLjE4N2wtMi45MTQtMi44OCA2LjEyLTYuMDQyIDIuOTE1IDIuODc3LTYuMTIgNi4wNDR6TTExLjIyIDI2Ny43N2MwIDEuNzctLjQ3IDEuOTM4LTIuMjI1IDEuOTM4SDV2LTMuMzkzbC01IDQuNzk4IDUgNC45MTZ2LTMuNTA3aDMuOTk0YzMuMjg4IDAgNS4wMDYtMS40MzMgNS4wMDYtNC43NiAwLTMuNzgtMi4zMTUtNC42MTItNS45NjQtNC42MTJWMjYzdjMuMDI2YzEuNzU3IDAgMy4xODUtLjAyNyAzLjE4NSAxLjc0NHpNMTMuMTUgMjg4LjAxNWwtMy45NC0zLjk0IDMuOTQtMy45NEwxMS4wMTQgMjc4bC0zLjk0IDMuOTQtMy45NC0zLjk0TDEgMjgwLjEzNWwzLjk0IDMuOTQtMy45NCAzLjk0IDIuMTM0IDIuMTM1IDMuOTQtMy45NCAzLjk0IDMuOTR6IiBmaWxsPSIjNzM3Qjg2Ii8+PHBhdGggZD0iTTQuMDEgMjM3Ljk4bDUuNDgtNy45OWgyLjVMNi40NiAyMzhsNS41IDcuOTUtMi40OS4wNnoiIGZpbGw9IiM1MzVDNjkiLz48cGF0aCBkPSJNNy4yNyAyOTUuMTVsLTMuMDQ2IDMtMy4wNDQtM0wwIDI5Ni4zMTJsMy4wNDUgMyAxLjE4IDEuMTYyIDEuMTgtMS4xNjIgMy4wNDQtM3oiIGZpbGw9IiM3MzdCODYiLz48cGF0aCBkPSJNMTQgMjAydjEuOTlIMFYyMDJoMTR6bS02LjU3NSAzLjk4SDE0djEuOTlIMHYtMS45OWg3LjQyNXpNMTQgMjA5Ljk3djEuOTlIMHYtMS45OWgxNHoiIGZpbGw9IiM1MzVDNjkiLz48cGF0aCBkPSJNOSAxOTNINGExIDEgMCAwIDAgMCAyaDVhMSAxIDAgMCAwIDAtMnptLTUtMWg1YTEgMSAwIDAgMCAwLTJINGExIDEgMCAwIDAgMCAyem0tMy01YTEgMSAwIDAgMC0xIDF2OWExIDEgMCAwIDAgMSAxaDExYTEgMSAwIDAgMCAxLTF2LTlhMSAxIDAgMCAwLTEtMUgxem0xMCAydjdIMnYtN2g5eiIgZmlsbD0iIzUxNUE2NyIvPjxwYXRoIGQ9Ik05LjE4NiA0MC40MmMyLjAwNSAwIDMuNjM4LS4wMyAzLjYzOCAxLjk3cy0uNTM4IDIuMTktMi41NDMgMi4xOUg1LjU2bC0uMTgyLTMuNzlMMCA0Ni4xNjZsNS41MjIgNS41MjIuMDM4LTMuOTNoNC43MThjMy43NiAwIDUuNzIyLTEuNjIgNS43MjItNS4zOCAwLTQuMjctMi42NDYtNS4yMS02LjgxNi01LjIxVjM3bC4wMDIgMy40MnpNMTIgMjkuODlMOC4xMDggMjYgMTIgMjIuMTEgOS44OTIgMjAgNiAyMy44OSAyLjEwOCAyMCAwIDIyLjExIDMuODkyIDI2IDAgMjkuODkgMi4xMDggMzIgNiAyOC4xMSA5Ljg5MiAzMnpNMTIuODkyIDUuMTU1TDkuNzcgMi4wNzMgMTEuODc4IDAgMTUgMy4wODNsLTIuMTA4IDIuMDcyek0wIDE0Ljk5NWwxLjI1Mi00LjUwNCAzLjEyMiAzLjA4NEwuMDA0IDE1IDAgMTQuOTk2em01LjMwOC0yLjM0M0wyLjE4NiA5LjU3bDYuNTU3LTYuNDc2IDMuMTIzIDMuMDgzLTYuNTU4IDYuNDc1ek0xNiAxMDEuODhINC40OGwtNC40MSA4LjUzNGgxMS41OTJMMTYgMTAxLjg4em0tNC4zNzMtMS4xMDJ2LTIuNTZoLTYuMDF2LTEuNTNoLTMuOThMMCA5OC4zMjZ2OS44MTNsMy43MzMtNy4zNmg3Ljg5NHpNNi4zODggNzYuNjlIMHYxNC43OTdoMTF2LTEwLjE0TDYuMzg4IDc2LjY5em0tLjkzIDUuNTd2LTMuNzA3TDkuMTYgODIuMjZINS40NTd6IiBmaWxsPSIjNTM1QzY5Ii8+PGcgZmlsbD0iIzUzNUM2OSI+PHBhdGggZD0iTTQuODc1IDU2LjY5aDUuMjUyYy4yNjMgMCAuMjYzLjI2LjI2My4yNnY2LjA3NGwyLjE2LS4wMDJjLjg0NSAwIC4xMTYuNy4xMTYuN0w4LjIgNjguMTNzLS40NTMuNDM4LS42ODYuNDM4Yy0uMjMzIDAtLjcxNC0uNDQtLjcxNC0uNDRsLTQuNTIzLTQuNDkzcy0uNjMtLjYxLjE3NC0uNjEzbDIuMTYuMDAydi02LjA0MnMwLS4yOTMuMjY1LS4yOTN6Ii8+PHBhdGggZD0iTS4wMyA2Ny40aDEuMTM4djIuMzYzYzAgLjI3Ni40OTYuNDk3LjQ5Ni40OTdoMTEuNjczYy4yNzUgMCAuNDk3LS40OTcuNDk3LS40OTdWNjcuNGgxLjEzN3YyLjUxYy0uMDIgMS43Mi0xLjcyIDEuNzItMS43MiAxLjcySDEuNzVzLTEuNzIyIDAtMS43Mi0xLjcyYy0uMDAyLS4wMDIgMC0yLjUxIDAtMi41MXoiLz48L2c+PHBhdGggZD0iTTEuNDMgMTE1LjY5bDUuNDQgNS4xNy0xLjQzIDEuMzZMMCAxMTcuMDVsMS40My0xLjM2em00LjAyIDMuODJjMC0uMDE4IDQtMy44MiA0LTMuODJsMS40MyAxLjM2cy00LjAxNCAzLjgyMy00LjAxNCAzLjgxbC0xLjQxNy0xLjM1eiIgZmlsbD0iIzUzNUM2OSIvPjxwYXRoIGQ9Ik0xNiAxNzIuNjl2MmgtMi4wOWE1Ljg1OCA1Ljg1OCAwIDAgMS0xIDIuNDFsMi4xIDEuODItMS40NCAxLjc4LTIuMzEtMi4wMWE1Ljk2NCA1Ljk2NCAwIDAgMS0yLjI2Ljl2Mi4xSDd2LTIuMDlhNS45IDUuOSAwIDAgMS0yLjI2LS45bC0yLjMxIDItMS40NC0xLjc4IDIuMS0xLjgzYTUuOTM4IDUuOTM4IDAgMCAxLS45OS0yLjRIMHYtMmgyLjA5YTUuODU4IDUuODU4IDAgMCAxIDEtMi40MWwtMi4xLTEuODIgMS40NC0xLjc4IDIuMzEgMi4wMWE2LjAzIDYuMDMgMCAwIDEgMi4yNi0uOXYtMi4xaDJ2Mi4xYTUuOTY0IDUuOTY0IDAgMCAxIDIuMjYuOWwyLjMxLTIuMDEgMS40NCAxLjc4LTIuMSAxLjgyYy41MS43MTcuODUyIDEuNTQgMSAyLjQxSDE2em0tOC0yYTMgMyAwIDEgMCAwIDYgMyAzIDAgMCAwIDAtNnpNMCAxNDYuNjloMTZ2Mkgwdi0yem0xNCAyaDJ2MTBoLTJ2LTEwem0tMTQgMGgydjEySDB2LTEyem0yIDEwaDE0djJIMnYtMnptMi04aDh2Mkg0di0yem0wIDRoOHYySDR2LTJ6TTQgMTMxLjY5aDJ2Mkg0di0yem0tNC00aDE2djJIMHYtMnptMTQgMmgydjEwaC0ydi0xMHptLTE0IDBoMnYxMkgwdi0xMnptMTYgMTB2Mkgydi0yaDE0em0tOS04aDJ2Mkg3di0yem0zIDBoMnYyaC0ydi0yem0tNiA0aDJ2Mkg0di0yem0zIDBoMnYySDd2LTJ6bTMgMGgydjJoLTJ2LTJ6IiBmaWxsPSIjNTM1QzY4Ii8+PC9nPjwvc3ZnPg==) 0 -201px no-repeat;
    opacity: .3;
    transition: opacity .2s ease;
  }

  html:not(.bx-ie) .disk_folder_list_context_menu_item .menu_popup_item_text, html:not(.bx-ie) .disk_folder_list_sorting_menu .menu_popup_item_text {
    order: 0;
    padding: 0 13px 0 20px;
  }

  td {
    vertical-align: middle !important;
  }

  .ui_icon_file_folder-el i {
    background-position: 0 calc(100% / var(--icon-file-col) * 1);
  }
</style>
