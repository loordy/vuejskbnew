<template>
  <table style="width:100%">
    <tr class="kb_layout_inner_inner_top_row">
      <td class="kb_layout_inner_inner_cont">
        <div class="page_header">
          <div class="pagetitle_below">
            <div class="disk_folder_list_toolbar" >
              <div class="disk_breadcrumbs"  style="opacity: 1;">
                <div class="disk_breadcrumbs_item js_disk_breadcrumbs_folder">
                  <a class="disk_breadcrumbs_item_title js_disk_breadcrumbs_folder_link" href="">База знаний</a>
                  <span class="disk_breadcrumbs_item_arrow js_disk_breadcrumbs_arrow"></span>
                </div>
              </div>
              <div class="disk_folder_list_config">
                <div class="disk_folder_list_sorting">
                  <span class="disk_folder_list_sorting_text">По дате изменения</span>
                </div>
                <div class="disk_folder_list_view">
                  <div v-bind:class="[active === 'list' ? activeClass : '', list]"></div>
                  <div v-bind:class="[active === 'grid' ? activeClass : '', grid]"></div>
                  <div v-bind:class="[active === 'grid_tile' ? activeClass : '', gridtile]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'middle',
  data () {
    return {
      activeclass: 'disk_folder_list_view_item_active',
      grid: 'disk_folder_list_view_item disk_folder_list_view_item_grid',
      list: 'disk_folder_list_view_item disk_folder_list_view_item_lines',
      gridtile: 'disk_folder_list_view_item disk_folder_list_view_item_grid_tile',
      active: ''
    }
  },
  computed: {
    viewlist () {
      return this.$store.getters.getviewType()
    },
    ...mapGetters({
      active: 'getviewType'
    })
  },
  methods: {
    viewChange (type) {
      this.store.commit('setView', type)
    }
  }

}
</script>

<style>
  .kb_layout_inner_inner_top_row .kb_layout_inner_inner_cont {
    height: 74px;
  }
  .kb_layout_inner_inner_cont {
    height: 100%;
    width: 100%;
  }
  .page_header {
    min-width: 800px;
    /*max_width: calc(100vw _ 240px);*/
  }

  disk_folder_list_toolbar {
    display: flex;
    overflow: hidden;
    margin: 0 12px 20px 0;
    border-top: 1px solid rgba(82, 92, 105, .1);
    border-bottom: 1px solid rgba(82, 92, 105, .1)
  }

  disk_breadcrumbs {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    overflow: hidden;
    padding-left: 12px;
    font-family: 'OpenSans-Regular', "Helvetica Neue", Helvetica, sans-serif;
    font-size: 0
  }

  .disk_breadcrumbs_item {
    flex: 0 1 auto;
    flex-shrink: 0;
    white-space: nowrap
  }

  .disk_breadcrumbs_item_title, .disk_breadcrumbs_item_title:hover {
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
    color: #525c69;
    transition: .1s;
    cursor: pointer
  }

  .bitrix24_light_theme .disk_breadcrumbs_item_title {
    color: #fff;
    opacity: 1
  }

  .bitrix24_dark_theme .disk_breadcrumbs_item_title {
    color: rgba(51, 51, 51, .8);
    opacity: 1
  }

  .bitrix24_dark_theme .disk_breadcrumbs_item_title:hover {
    color: #1f2127
  }

  .disk_breadcrumbs_item_title:hover {
    opacity: 1
  }

  .disk_breadcrumbs_item_arrow {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 100%;
    margin: 0 4px;
    opacity: .5;
    transition: .1s;
    cursor: pointer;
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%239299A2%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no_repeat
  }

  .bitrix24_light_theme .disk_breadcrumbs_item_arrow {
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%23fff%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')
  }

  .bitrix24_dark_theme .disk_breadcrumbs_item_arrow {
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%23333%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')
  }

  .disk_breadcrumbs_item_arrow:hover {
    opacity: 1
  }

  .disk_breadcrumbs_item:last-child .disk_breadcrumbs_item_arrow {
    opacity: 0
  }

  .disk_breadcrumbs_item_back {
    display: inline-block;
    vertical-align: top;
    height: 54px;
    width: 30px;
    opacity: .5;
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2213px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2013%2012%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23535C6A%22%20d%3D%22M4.65%2C7%20L8.2%2C10.55%20L6.8%2C11.95%20L2.25%2C7.4%20L2.2%2C7.45%20L0.8%2C6.05%20L0.85%2C6%20L0.8%2C5.95%20L2.2%2C4.55%20L2.25%2C4.6%20L6.8%2C0.05%20L8.2%2C1.45%20L4.65%2C5%20L13%2C5%20L13%2C7%20L4.65%2C7%20Z%22%3E%3C/path%3E%3C/svg%3E') 2px 21px no_repeat;
    cursor: pointer;
    transition: .1s
  }

  .bitrix24_light_theme .disk_breadcrumbs_item_back {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2213px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2013%2012%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M4.65%2C7%20L8.2%2C10.55%20L6.8%2C11.95%20L2.25%2C7.4%20L2.2%2C7.45%20L0.8%2C6.05%20L0.85%2C6%20L0.8%2C5.95%20L2.2%2C4.55%20L2.25%2C4.6%20L6.8%2C0.05%20L8.2%2C1.45%20L4.65%2C5%20L13%2C5%20L13%2C7%20L4.65%2C7%20Z%22%3E%3C/path%3E%3C/svg%3E')
  }

  .disk_breadcrumbs_item_back:hover {
    opacity: 1
  }

  .kb_disk_popup_title {
    padding-top: 10px;
    padding-left: 10px
  }

  .kb_disk_form_bizproc_start_table {
    width: 100%
  }

  .kb_disk_form_bizproc_start_div {
    padding: 10px;
    width: 550px
  }

  .kb_disk_form_bizproc_start_td_title {
    text-align: center;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #7f858d
  }

  .kb_disk_form_bizproc_start_td_error {
    text-align: left;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: red
  }

  .kb_disk_form_bizproc_start_td_name_bizproc {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
    height: 30px;
    color: #4f5359
  }

  .field_name {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #abaeaf
  }

  .kb_disk_form_bizproc_start_td_button_bizproc {
    text-align: right
  }

  div.bizproc_status_inprogress { /*background-image: ;:url('/bitrix/components/bitrix/disk.folder.list/templates/.default/images/bizproc/bizproc_inprogress.gif');*/
    float: right
  }

  div.bizproc_status_attention { /*background-image: ;:url('/bitrix/components/bitrix/disk.folder.list/templates/.default/images/bizproc/bizproc_attention.gif')!important;*/
    float: right
  }

  div.bizproc_statuses {
    width: 22px;
    height: 18px;
    margin-right: 6px;
    float: right; /*background-image: ;:url('/bitrix/components/bitrix/disk.folder.list/templates/.default/images/bizproc/bizproc_finished.gif');*/
    background-position: left center
  }

  .kb_hide_button {
    display: none
  }

  .kb_disk_form_bizproc_start_table {
    table_layout: fixed
  }

  .kb_disk_form_bizproc_start_table textarea {
    width: 95%
  }

  .kb_disk_form_bizproc_start_td_name_bizproc {
    overflow: hidden
  }

  .kb_disk_form_bizproc_start_table td {
    width: 70%;
    text-align: left
  }

  .kb_disk_form_bizproc_start_table td:first_child {
    width: 30%
  }

  .kb_disk_col_table_right {
    width: 70%
  }

  .kb_disk_col_table_left {
    width: 30%
  }

  .kb_disk_form_bizproc_start_table select {
    width: 95%
  }

  .disk_popup_menu_hidden_item {
    display: none !important
  }

  .disk_folder_list_toolbar {
    display: flex;
    overflow: hidden;
    margin: 0 12px 20px 0;
    border-top: 1px solid rgba(82, 92, 105, .1);
    border-bottom: 1px solid rgba(82, 92, 105, .1)
  }

  .bitrix24_light_theme .disk_folder_list_toolbar {
    margin: 0 0 20px 0;
    border-color: rgba(255, 255, 255, .4)
  }

  .bitrix24_dark_theme .disk_folder_list_toolbar {
    margin: 0 0 20px 0;
    border-color: #dce2e6
  }

  .disk_folder_list_config {
    display: block;
    overflow: hidden;
    height: 54px;
    font-size: 0;
    font-family: 'OpenSans-Regular', "Helvetica Neue", Helvetica, sans-serif
  }

  .disk_folder_list_config:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-left: -1px;
    width: 1px;
    height: 100%
  }

  .disk_folder_list_sorting {
    display: inline-block;
    vertical-align: middle;
    height: 26px
  }

  .disk_folder_list_sorting:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    margin-left: -1px;
    height: 100%
  }

  .disk_folder_list_sorting_text {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-right: 28px;
    line-height: 26px;
    font-size: 13px;
    color: #535c69;
    cursor: pointer
  }

  .bitrix24_light_theme .disk_folder_list_sorting_text {
    color: #fff
  }

  .disk_folder_list_sorting_text:after {
    content: '';
    position: absolute;
    width: 28px;
    height: 10px;
    right: 0;
    top: 9px;
    opacity: .5;
    transition: .1s;
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2210px%22%20height%3D%227px%22%20viewBox%3D%220%200%2010%207%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1064.000000%2C%20-218.000000%29%22%3E%3Cg%20transform%3D%22translate%281064.000000%2C%20215.000000%29%22%20fill%3D%22%23535C6A%22%3E%3Cpath%20d%3D%22M2.93258411%2C6.14035112%20L7.74423462%2C6.14035112%20L7.74423462%2C7.74423462%20L2.93258411%2C7.74423462%20L1.3287006%2C7.74423462%20L1.3287006%2C1.3287006%20L2.93258411%2C1.3287006%20L2.93258411%2C6.14035112%20Z%22%20transform%3D%22translate%284.536468%2C%204.536468%29%20rotate%28-45.000000%29%20translate%28-4.536468%2C%20-4.536468%29%20%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E') center center no_repeat
  }

  .bitrix24_light_theme .disk_folder_list_sorting_text:after {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2210px%22%20height%3D%227px%22%20viewBox%3D%220%200%2010%207%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1064.000000%2C%20-218.000000%29%22%3E%3Cg%20transform%3D%22translate%281064.000000%2C%20215.000000%29%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2.93258411%2C6.14035112%20L7.74423462%2C6.14035112%20L7.74423462%2C7.74423462%20L2.93258411%2C7.74423462%20L1.3287006%2C7.74423462%20L1.3287006%2C1.3287006%20L2.93258411%2C1.3287006%20L2.93258411%2C6.14035112%20Z%22%20transform%3D%22translate%284.536468%2C%204.536468%29%20rotate%28-45.000000%29%20translate%28-4.536468%2C%20-4.536468%29%20%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
  }

  .disk_folder_list_sorting_text:hover:after {
    opacity: 1
  }

  .disk_folder_list_view {
    display: inline-block;
    vertical-align: middle;
    padding: 0 7px;
    height: 26px;
    font-size: 0
  }

  .disk_folder_list_sorting + .disk_folder_list_view {
    border-left: 1px solid rgba(82, 92, 105, .1)
  }

  .bitrix24_light_theme .disk_folder_list_sorting + .disk_folder_list_view {
    border-left: 1px solid rgba(255, 255, 255, .4)
  }

  .disk_folder_list_view_item {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 26px;
    background: center center no-repeat;
    opacity: .3;
    cursor: pointer;
    margin-left: 4px;
    transition: .1s
  }

  .disk_folder_list_view_item:first-child {
    margin-left: 0
  }

  .disk_folder_list_view_item_active, .disk_folder_list_view_item:hover {
    opacity: .82
  }

  .disk_folder_list_view_item_lines {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2217px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2017%2014%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1108.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281108.000000%2C%20213.000000%29%22%20fill%3D%22%23525C69%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
  }

  .bitrix24_light_theme .disk_folder_list_view_item_lines {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2217px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2017%2014%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1108.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281108.000000%2C%20213.000000%29%22%20fill%3D%22%23fff%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
  }

  .disk_folder_list_view_item_grid {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1139.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281139.000000%2C%20213.000000%29%22%20fill%3D%22%23525C69%22%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
  }

  .bitrix24_light_theme .disk_folder_list_view_item_grid {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1139.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281139.000000%2C%20213.000000%29%22%20fill%3D%22%23fff%22%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
  }

  .disk_folder_list_view_item_grid_tile {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1168.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281168.000000%2C%20213.000000%29%22%20fill%3D%22%23525C69%22%3E%3Crect%20%20x%3D%220%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
  }

  .bitrix24_light_theme .disk_folder_list_view_item_grid_tile {
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-1168.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281168.000000%2C%20213.000000%29%22%20fill%3D%22%23fff%22%3E%3Crect%20%20x%3D%220%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
  }

  .disk_folder_list_sorting_menu {
    animation: disk_folder_list_sorting_menu_show .1s linear forwards
  }

  @keyframes disk_folder_list_sorting_menu_show {
    from {
      opacity: 0;
      transform: translateY(5px)
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }

  html:not(.kb_ie) .menu_popup .disk_folder_list_context_menu_item.menu_popup_item, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup .menu_popup_item {
    display: flex
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

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_text, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_text {
    order: 0;
    padding: 0 13px 0 20px
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_no_icon .menu_popup_item_text, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_no_icon .menu_popup_item_text {
    padding: 0 13px 0 20px
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item.menu_popup_item_accept .menu_popup_item_icon:before, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_accept .menu_popup_item_icon {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2212px%22%20height%3D%229px%22%20viewBox%3D%220%200%2012%209%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28-200.000000%2C%20-682.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%2859.000000%2C%20492.000000%29%22%20fill%3D%22%230063C6%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%22142.360083%20193.446392%20145.013295%20196.099605%20151.316057%20190%20152.67614%20191.360083%20146.376563%20197.459687%20145.013295%20198.81977%20143.653213%20197.459687%20141%20194.806475%22%3E%3C/polygon%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') left center no_repeat
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item.menu_popup_item_accept .menu_popup_item_icon {
    background: 0
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_icon:before {
    background: transparent left center no_repeat;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    transition: .3s
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item_accept_animate.menu_popup_item_accept .menu_popup_item_icon:before {
    width: 32px
  }

  .kb_disk_interface_filelist.disk_running_filter .main_grid_row_empty {
    visibility: hidden
  }

  .disk_tile_grid {
    margin-right: 12px
  }

  .disk_folder_list_config {
    margin-right: 3px
  }

  .bitrix24_light_theme .disk_tile_grid, .bitrix24_dark_theme .disk_tile_grid, .bitrix24_light_theme .disk_folder_list_config, .bitrix24_dark_theme .disk_folder_list_config {
    margin-right: 0
  }

  .kb_disk_container {
    background: none !important;
    padding: 0;
    margin: 0;
    overflow: visible
  }

  .kb_disk_interface_filelist {
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
    animation-delay: .5s
  }

  .ui_grid_tile_item_active {
    opacity: .5
  }

  .ui_grid_tile_item_checkbox {
    animation: disk_grid_tile_item_checkbox 1s linear forwards
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

  .ui_grid_tile_item {
    animation: disk-folder-list-item-pointer-events 1.15s linear forwards
  }

  @keyframes disk_folder_list_item_pointer_events {
    from {
      pointer-events: none
    }
    to {
      pointer-events: auto
    }
  }

  @keyframes disk_folder_list_item_show {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

  .ui_grid_tile_item_droppable .disk_folder_list_item:before, .ui_grid_tile_item_selected .disk_folder_list_item:before {
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

  .ui_grid_tile_item_draggable, .ui_grid_tile_item_draggable_single {
    opacity: .9
  }

  .disk_folder_list_item_image {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
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
    min_width: 100%;
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
    max_width: 100%;
    white_space: nowrap;
    text_overflow: ellipsis;
    font_family: 'OpenSans_Semibold', Arial, sans-serif;
    color: #000;
    font_size: 12px;
    text_decoration: none;
    opacity: 1;
    border_bottom: 1px solid transparent;
    transition: none;
    cursor: pointer
  }

  .disk_folder_list_item_title_link:hover {
    color: #000;
    text_decoration: none;
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
    font-family: 'OpenSans-Semibold', Arial, sans-serif;
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
    animation: disk-folder-list-item-title-link-renamed .5s linear forwards
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
    margin_left: 3px;
    width: 14px;
    height: 14px;
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-918.000000%2C%20-759.000000%29%22%3E%3Cpath%20d%3D%22M925%2C770.968127%20C924.075211%2C770.968127%20923.209972%2C770.714648%20922.468465%2C770.274535%20L929.274437%2C763.468465%20C929.714549%2C764.209972%20929.968127%2C765.075211%20929.968127%2C766%20C929.968127%2C768.743803%20927.743803%2C770.968127%20925%2C770.968127%20M925%2C761.031972%20C925.924789%2C761.031972%20926.790127%2C761.285549%20927.531634%2C761.725563%20L920.725563%2C768.531634%20C920.285451%2C767.790127%20920.031972%2C766.924887%20920.031972%2C766%20C920.031972%2C763.256296%20922.256197%2C761.031972%20925%2C761.031972%20M925%2C759%20C921.134028%2C759%20918%2C762.134028%20918%2C766%20C918%2C769.86607%20921.134028%2C773%20925%2C773%20C928.865972%2C773%20932%2C769.86607%20932%2C766%20C932%2C762.134028%20928.865972%2C759%20925%2C759%22%20fill%3D%22%23FF5752%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no_repeat
  }

  .disk_folder_list_item_shared {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill_rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22%20fill%3D%22%232FC6F6%22/%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M7.53921791%2C6.29597386%20C7.53921791%2C6.29597386%207.46634358%2C6.52026144%207.45481283%2C6.5503268%20C7.4283655%2C6.58886738%207.40605702%2C6.62997406%207.38824198%2C6.67299346%20C7.40361631%2C6.67299346%207.55843583%2C6.74379739%207.55843583%2C6.74379739%20L8.1606484%2C6.92809804%20L8.15188503%2C7.20770588%20C8.03791808%2C7.25219075%207.93762087%2C7.32468058%207.86069519%2C7.4181634%20C7.83165243%2C7.48026865%207.79610134%2C7.53926171%207.7546123%2C7.59419608%20C8.30316845%2C7.81216993%208.62403075%2C8.1311634%208.63709893%2C8.48833987%20C8.64601604%2C8.5519281%208.97887032%2C9.72192157%208.99793449%2C9.98544444%20L11.5320856%2C9.98544444%20C11.534238%2C9.97447059%2011.4552139%2C8.46083007%2011.4552139%2C8.44955556%20C11.4552139%2C8.44955556%2011.3097727%2C8.08501307%2011.0791578%2C8.04788235%20C10.850594%2C8.01958389%2010.6296853%2C7.94875765%2010.4283623%2C7.83922876%20C10.2954059%2C7.7635328%2010.1553166%2C7.70050666%2010.0100267%2C7.65101961%20C9.93581317%2C7.58719722%209.87812111%2C7.50708985%209.84167781%2C7.41726144%20C9.76485939%2C7.32366942%209.66453022%2C7.25115649%209.55048797%2C7.20680392%20L9.54187834%2C6.92704575%20L10.1440909%2C6.7427451%20C10.1440909%2C6.7427451%2010.2993717%2C6.67194118%2010.3142848%2C6.67194118%20C10.2901635%2C6.62258981%2010.2624171%2C6.5750121%2010.2312634%2C6.5295817%20C10.2198864%2C6.49951634%2010.1631551%2C6.29597386%2010.1631551%2C6.29597386%20C10.251033%2C6.40619284%2010.3540974%2C6.50398216%2010.4694118%2C6.58655556%20C10.3669278%2C6.39905823%2010.2791446%2C6.20422644%2010.2068182%2C6.00373856%20C10.1585468%2C5.8184369%2010.1249822%2C5.62976708%2010.1064238%2C5.43941176%20C10.0649726%2C5.08565128%2010.0005263%2C4.73483043%209.91347594%2C4.38907843%20C9.85099705%2C4.21657068%209.74070643%2C4.06443965%209.59491979%2C3.9496732%20C9.37928688%2C3.80330692%209.12760947%2C3.71586439%208.86586898%2C3.69637255%20C8.8609492%2C3.69637255%208.85618316%2C3.69637255%208.85049465%2C3.69637255%20C8.84480615%2C3.69637255%208.84050134%2C3.69637255%208.83512032%2C3.69637255%20C8.57384245%2C3.71602899%208.32265423%2C3.80346752%208.10745321%2C3.9496732%20C7.96180728%2C4.06466111%207.85159583%2C4.21686042%207.7890508%2C4.38937908%20C7.70190881%2C4.73510458%207.63751218%2C5.0859344%207.59625668%2C5.43971242%20C7.58034915%2C5.63438642%207.54836883%2C5.82748402%207.50062834%2C6.01711765%20C7.4282675%2C6.21412862%207.33892924%2C6.40477635%207.2335762%2C6.58700654%20C7.34867489%2C6.50421775%207.45152731%2C6.40628146%207.53921791%2C6.29597386%20Z%20M8.34514037%2C8.51043791%20C8.34514037%2C8.2338366%207.97615642%2C7.918%207.24818182%2C7.734%20C7.0017175%2C7.6667055%206.76743871%2C7.56238797%206.55372326%2C7.42477778%20C6.50760027%2C7.39862092%206.51405749%2C7.15719608%206.51405749%2C7.15719608%20L6.27959893%2C7.12156863%20C6.27959893%2C7.10187582%206.2596123%2C6.81234641%206.2596123%2C6.81234641%20C6.54004011%2C6.72019608%206.51113636%2C6.17646405%206.51113636%2C6.17646405%20C6.68917112%2C6.27342484%206.80509358%2C5.84379085%206.80509358%2C5.84379085%20C7.01572193%2C5.2460915%206.70024064%2C5.28216993%206.70024064%2C5.28216993%20C6.75542733%2C4.91720596%206.75542733%2C4.54629077%206.70024064%2C4.1813268%20C6.56002674%2C2.97059477%204.44851604%2C3.29920915%204.69881016%2C3.69411765%20C4.08168449%2C3.58227451%204.22220588%2C4.95686275%204.22220588%2C4.95686275%20L4.35611631%2C5.31223529%20C4.09321524%2C5.47879739%204.2758623%2C5.68068627%204.28477941%2C5.91354248%20C4.29769385%2C6.25643791%204.51170455%2C6.18533333%204.51170455%2C6.18533333%20C4.52492647%2C6.7511634%204.80981283%2C6.82557516%204.80981283%2C6.82557516%20C4.86346925%2C7.18094771%204.83010695%2C7.12051634%204.83010695%2C7.12051634%20L4.57627674%2C7.1505817%20C4.57970223%2C7.23125355%204.57298985%2C7.31203156%204.55629011%2C7.39110458%20C4.25725936%2C7.52128758%204.19360963%2C7.59765359%203.89719251%2C7.72467974%20C3.32434492%2C7.97031373%202.70153075%2C8.2899085%202.59037433%2C8.71999346%20C2.51627005%2C9.00671678%202.42364528%2C9.55375599%202.3125%2C10.3611111%20L8.875%2C10.3611111%20C8.52176025%2C9.12732898%208.34514037%2C8.51043791%208.34514037%2C8.51043791%20Z%22/%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E%0A') center center no_repeat
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
    box_shadow: 0 4px 0 #525c69, 0 8px 0 #525c69
  }

  .disk_folder_list_no_data_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: disk_folder_list_no_data_inner_show .1s linear forwards;
    animation_delay: .4s;
    font_family: 'OpenSans_Light', Helvetica, Arial, sans-serif;
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
    font_size: 32px;
    margin_bottom: 70px;
    text-align: center;
    white_space: nowrap
  }

  .disk_folder_list_no_data_inner_variable {
    display: flex;
    overflow: hidden;
    font_size: 0
  }

  .disk_folder_list_no_data_inner_create_file, .disk_folder_list_no_data_inner_create_folder {
    position: relative;
    display: flex;
    flex: 1;
    height: 115px;
    max_width: calc(50% _ 9px);
    margin_right: 9px;
    padding: 0 90px;
    border: 2px dashed rgba(83, 92, 105, .3);
    border-radius: 3px;
    color: rgba(83, 92, 105, .7);
    font_size: 22px;
    text_decoration: none;
    cursor: pointer;
    text-align: center;
    align-items: center;
    justify_content: center;
    white_space: nowrap;
    background: transparent;
    transition: .1s
  }

  .disk_folder_list_no_data_inner_create_folder {
    margin_left: 9px
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
    margin_right: 20px;
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
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2232px%22%20height%3D%2241px%22%20viewBox%3D%220%200%2032%2041%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20stroke%3D%22%23535c69%22%20stroke_width%3D%222%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%2C1%20L1%2C40%20L31%2C40%20L31%2C9.77882515%20L22.429578%2C1%20L1%2C1%20Z%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24%2C3.41421356%20L24%2C9%20L29.5857864%2C9%20L24%2C3.41421356%20Z%22%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') center center no_repeat
  }

  .disk_folder_list_no_data_inner_create_folder:before {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2243px%22%20height%3D%2234px%22%20viewBox%3D%220%200%2043%2034%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-1086.000000%2C%20-544.000000%29%22%20stroke%3D%22%23535c69%22%20stroke_width%3D%222%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1107.08453%2C545%20L1087%2C545%20L1087%2C576.082471%20L1128%2C576.082471%20L1128%2C549.712329%20L1111.84611%2C549.712329%20L1107.08453%2C545%20Z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no_repeat
  }

  .bitrix24_light_theme .disk_folder_list_no_data_inner_create_file:before {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2232px%22%20height%3D%2241px%22%20viewBox%3D%220%200%2032%2041%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20stroke%3D%22%23fff%22%20stroke_width%3D%222%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%2C1%20L1%2C40%20L31%2C40%20L31%2C9.77882515%20L22.429578%2C1%20L1%2C1%20Z%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24%2C3.41421356%20L24%2C9%20L29.5857864%2C9%20L24%2C3.41421356%20Z%22%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') center center no_repeat
  }

  .bitrix24_light_theme .disk_folder_list_no_data_inner_create_folder:before {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2243px%22%20height%3D%2234px%22%20viewBox%3D%220%200%2043%2034%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-1086.000000%2C%20-544.000000%29%22%20stroke%3D%22%23fff%22%20stroke_width%3D%222%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1107.08453%2C545%20L1087%2C545%20L1087%2C576.082471%20L1128%2C576.082471%20L1128%2C549.712329%20L1111.84611%2C549.712329%20L1107.08453%2C545%20Z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no_repeat
  }

  .bitrix24_dark_theme .disk_folder_list_no_data_inner_create_file:before {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2232px%22%20height%3D%2241px%22%20viewBox%3D%220%200%2032%2041%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20stroke%3D%22%23333%22%20stroke_width%3D%222%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%2C1%20L1%2C40%20L31%2C40%20L31%2C9.77882515%20L22.429578%2C1%20L1%2C1%20Z%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24%2C3.41421356%20L24%2C9%20L29.5857864%2C9%20L24%2C3.41421356%20Z%22%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') center center no_repeat
  }

  .bitrix24_dark_theme .disk_folder_list_no_data_inner_create_folder:before {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2243px%22%20height%3D%2234px%22%20viewBox%3D%220%200%2043%2034%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20transform%3D%22translate%28-1086.000000%2C%20-544.000000%29%22%20stroke%3D%22%23333%22%20stroke_width%3D%222%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1107.08453%2C545%20L1087%2C545%20L1087%2C576.082471%20L1128%2C576.082471%20L1128%2C549.712329%20L1111.84611%2C549.712329%20L1107.08453%2C545%20Z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no_repeat
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
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 12px 0 16px;
    height: 0;
    background: #ddf5fd;
    font: 13px 'OpenSans-Regular', "Helvetica Neue", Arial, Helvetica, sans-serif;
    color: #716e62;
    box-sizing: border-box;
    margin_bottom: 4px
  }

  .disk_folder_list_search_progress_info {
    padding: 0 15px 0 0;
    box-sizing: border-box;
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

  .disk_folder_list_search_progress_bar {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    margin: 2px 0 0 0;
    height: 8px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    background: #c0e6f3
  }

  .disk_folder_list_search_progress_bar:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: -webkit-gradient(linear, 0 0, 100% 100%, color_stop(.25, rgba(255, 255, 255, .2)), color_stop(.25, transparent), color_stop(.5, transparent), color_stop(.5, rgba(255, 255, 255, .2)), color_stop(.75, rgba(255, 255, 255, .2)), color_stop(.75, transparent), to(transparent));
    background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    z-index: 1;
    -webkit-background-size: 25px 25px;
    -moz-background-size: 25px 25px;
    background-size: 25px 25px;
    -webkit-animation: diskFolderListSearchMove 8s linear infinite;
    -moz-animation: diskFolderListSearchMove 8s linear infinite;
    -webkit-border-radius: 20px 8px 8px 20px;
    -moz-border-radius: 20px 8px 8px 20px;
    border-radius: 20px 8px 8px 20px;
    overflow: hidden
  }

  .disk_folder_list_search_progress_bar_line {
    position: absolute;
    height: 100%;
    background: #49c8f5;
    border-radius: 5px;
    -webkit-transition: width 1s linear;
    transition: width 1s linear;
    z-index: 2
  }

  .disk_folder_list_search_progress_steps {
    padding: 0 0 0 10px;
    text-align: right;
    box-sizing: border-box;
  }

  .disk_folder_list_search_progress_show.disk_folder_list_search_progress {
    height: 42px;
    opacity: 1;
    visibility: visible
  }

  .disk_folder_list_search_progress_animate_to_show.disk_folder_list_search_progress {
    -webkit-animation: diskFolderListSearchshow .3s linear forwards;
    animation: diskFolderListSearchshow .3s linear forwards
  }

  .disk_folder_list_search_progress_hide.disk_folder_list_search_progress {
    -webkit-animation: diskFolderListSearchhidden .3s linear forwards;
    animation: diskFolderListSearchhidden .3s linear forwards
  }

  @keyframes diskFolderListSearchMove {
    0% {
      background-position: 100% 50%
    }
    99.999% {
      background-position: 50% 0
    }
    100% {
      background-position: 50% 0
    }
  }

  @-webkit-keyframes diskFolderListSearchMove {
  0% {
    background-position: 100% 50%
  }99.999% {
    background-position: 50% 0
  }100% {
    background-position: 50% 0
  }
  } @-webkit-keyframes diskFolderListSearchhidden {
  0% {
    height: 42px;
    opacity: 1;
    visibility: visible
  }50% {
    opacity: 1
  }99.999% {
    visibility: visible
  }100% {
    height: 0;
    opacity: 0;
    visibility: hidden
  }
  } @keyframes diskFolderListSearchhidden {
      0% {
        height: 42px;
        opacity: 1;
        visibility: visible
      }
      50% {
        opacity: 1
      }
      99.999% {
        visibility: visible
      }
      100% {
        height: 0;
        opacity: 0;
        visibility: hidden
      }
    }

  @-webkit-keyframes diskFolderListSearchshow {
  0% {
    opacity: 0
  }50% {
    opacity: 0
  }100% {
    height: 42px;
    opacity: 1;
    visibility: visible
  }
  } @keyframes diskFolderListSearchshow {
      0% {
        opacity: 0
      }
      50% {
        opacity: 0
      }
      100% {
        height: 42px;
        opacity: 1;
        visibility: visible
      }
    }

  .disk_folder_list_popup_info_content {
    display: block;
    overflow: hidden;
    padding: 8px;
    color: #b1b6bb
  }

  .disk_folder_list_popup_info {
    animation: disk_folder_list_popup_info .1s linear forwards
  }

  @keyframes disk_folder_list_popup_info {
    from {
      opacity: 0;
      transform: translateY(5px)
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
</style>
