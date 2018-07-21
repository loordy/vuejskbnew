<template>
  <table style="width:100%">
    <tr class="kb_layout_inner_inner_top_row">
      <td class="kb_layout_inner_inner_cont">
        <div class="page_header">
          <div class="pagetitle_below">
            <div class="disk_folder_list_toolbar" >
              <div class="disk_breadcrumbs"  style="opacity: 1;">
                <div class="disk_breadcrumbs_item js_disk_breadcrumbs_folder">
                  <router-link to='/' class="disk_breadcrumbs_item_title js_disk_breadcrumbs_folder_link">База знаний</router-link>
                  <span class="disk_breadcrumbs_item_arrow js_disk_breadcrumbs_arrow"></span>
                </div>
              </div>
              <div class="disk_folder_list_config">
                <div class="disk_folder_list_sorting">
                  <span class="disk_folder_list_sorting_text">По дате изменения</span>
                </div>
                <div class="disk_folder_list_view">
                  <div v-bind:class="[this.$store.state.settings.viewType === 'list' ? activeClass : '', list]" @click="viewChange('list')"></div>
                  <div v-bind:class="[this.$store.state.settings.viewType === 'grid' ? activeClass : '', grid]" @click="viewChange('grid')"></div>
                  <div v-bind:class="[this.$store.state.settings.viewType === 'grid_tile' ? activeClass : '', gridtile]" @click="viewChange('grid_tile')"></div>
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
export default {
  name: 'middle',
  data () {
    return {
      activeClass: 'disk_folder_list_view_item_active',
      grid: 'disk_folder_list_view_item disk_folder_list_view_item_grid',
      list: 'disk_folder_list_view_item disk_folder_list_view_item_lines',
      gridtile: 'disk_folder_list_view_item disk_folder_list_view_item_grid_tile'
    }
  },
  methods: {
    viewChange (type) {
      this.$store.commit('setView', type)
    }
  }

}
</script>

<style>
  .kb_layout_inner_inner_top_row .kb_layout_inner_inner_cont {
    height: 74px;
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
  .page_header {
    border-top: 1px solid rgba(255,255,255,.15);
  }
  .page_header,
  #sidebar,
  #workarea_content {
    opacity: 0.96;
  }
  .tasks_pagetitle_view .pagetitle_below {
    border-top: 1px solid rgba(255,255,255,.4);
  }
  .bitrix24_light_theme .disk_folder_list_toolbar{margin:0 0 20px 0;border-color:rgba(255,255,255,.4)}.bitrix24_dark_theme .disk_folder_list_toolbar{margin:0 0 20px 0;border-color:#dce2e6}
  .disk_breadcrumbs_item{flex:0 1 auto;flex-shrink:0;white-space:nowrap}.disk_breadcrumbs_item_title,.disk_breadcrumbs_item_title:hover{display:inline-block;vertical-align:middle;font-size:13px;color:#525c69;transition:.1s;cursor:pointer}.bitrix24_light_theme .disk_breadcrumbs_item_title{color:#fff;opacity:1}.bitrix24_dark_theme .disk_breadcrumbs_item_title{color:rgba(51,51,51,.8);opacity:1}.bitrix24_dark_theme .disk_breadcrumbs_item_title:hover{color:#1f2127}.disk_breadcrumbs_item_title:hover{opacity:1}.disk_breadcrumbs_item_arrow{display:inline-block;vertical-align:middle;width:20px;height:100%;margin:0 4px;opacity:.5;transition:.1s;cursor:pointer;background:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%239299A2%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no-repeat}.bitrix24_light_theme .disk_breadcrumbs_item_arrow{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%23fff%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')}.bitrix24_dark_theme .disk_breadcrumbs_item_arrow{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%23333%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')}.disk_breadcrumbs_item_arrow:hover{opacity:1}.disk_breadcrumbs_item:last-child .disk_breadcrumbs_item_arrow{opacity:0}.disk_breadcrumbs_item_back{display:inline-block;vertical-align:top;height:54px;width:30px;opacity:.5;background:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2213px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2013%2012%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23535C6A%22%20d%3D%22M4.65%2C7%20L8.2%2C10.55%20L6.8%2C11.95%20L2.25%2C7.4%20L2.2%2C7.45%20L0.8%2C6.05%20L0.85%2C6%20L0.8%2C5.95%20L2.2%2C4.55%20L2.25%2C4.6%20L6.8%2C0.05%20L8.2%2C1.45%20L4.65%2C5%20L13%2C5%20L13%2C7%20L4.65%2C7%20Z%22%3E%3C/path%3E%3C/svg%3E') 2px 21px no-repeat;cursor:pointer;transition:.1s}.bitrix24_light_theme .disk_breadcrumbs_item_back{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2213px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2013%2012%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M4.65%2C7%20L8.2%2C10.55%20L6.8%2C11.95%20L2.25%2C7.4%20L2.2%2C7.45%20L0.8%2C6.05%20L0.85%2C6%20L0.8%2C5.95%20L2.2%2C4.55%20L2.25%2C4.6%20L6.8%2C0.05%20L8.2%2C1.45%20L4.65%2C5%20L13%2C5%20L13%2C7%20L4.65%2C7%20Z%22%3E%3C/path%3E%3C/svg%3E')}.disk_breadcrumbs_item_back:hover{opacity:1}
  .disk_folder_list_config{display:block;overflow:hidden;height:54px;font-size:0;font-family:'OpenSans_Regular',"Helvetica Neue",Helvetica,sans-serif}.disk_folder_list_config:before{content:'';display:inline-block;vertical-align:middle;margin-left:-1px;width:1px;height:100%}
  .disk_tile_grid,.bitrix24_dark_theme .disk_tile_grid,.bitrix24_light_theme .disk_folder_list_config,.bitrix24_dark_theme .disk_folder_list_config{margin-right:0}
  .disk_folder_list_sorting{display:inline-block;vertical-align:middle;height:26px}.disk_folder_list_sorting:before{content:'';display:inline-block;vertical-align:middle;width:1px;margin-left:-1px;height:100%}.disk_folder_list_sorting_text{display:inline-block;vertical-align:middle;position:relative;padding-right:28px;line-height:26px;font-size:13px;color:#535c69;cursor:pointer}.bitrix24_light_theme .disk_folder_list_sorting_text{color:#fff}.disk_folder_list_sorting_text:after{content:'';position:absolute;width:28px;height:10px;right:0;top:9px;opacity:.5;transition:.1s;background:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2210px%22%20height%3D%227px%22%20viewBox%3D%220%200%2010%207%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1064.000000%2C%20-218.000000%29%22%3E%3Cg%20transform%3D%22translate%281064.000000%2C%20215.000000%29%22%20fill%3D%22%23535C6A%22%3E%3Cpath%20d%3D%22M2.93258411%2C6.14035112%20L7.74423462%2C6.14035112%20L7.74423462%2C7.74423462%20L2.93258411%2C7.74423462%20L1.3287006%2C7.74423462%20L1.3287006%2C1.3287006%20L2.93258411%2C1.3287006%20L2.93258411%2C6.14035112%20Z%22%20transform%3D%22translate%284.536468%2C%204.536468%29%20rotate%28-45.000000%29%20translate%28-4.536468%2C%20-4.536468%29%20%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E') center center no-repeat}.bitrix24_light_theme .disk_folder_list_sorting_text:after{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2210px%22%20height%3D%227px%22%20viewBox%3D%220%200%2010%207%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1064.000000%2C%20-218.000000%29%22%3E%3Cg%20transform%3D%22translate%281064.000000%2C%20215.000000%29%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2.93258411%2C6.14035112%20L7.74423462%2C6.14035112%20L7.74423462%2C7.74423462%20L2.93258411%2C7.74423462%20L1.3287006%2C7.74423462%20L1.3287006%2C1.3287006%20L2.93258411%2C1.3287006%20L2.93258411%2C6.14035112%20Z%22%20transform%3D%22translate%284.536468%2C%204.536468%29%20rotate%28-45.000000%29%20translate%28-4.536468%2C%20-4.536468%29%20%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}.disk_folder_list_sorting_text:hover:after{opacity:1}.disk_folder_list_view{display:inline-block;vertical-align:middle;padding:0 7px;height:26px;font-size:0}.disk_folder_list_sorting+.disk_folder_list_view{border-left:1px solid rgba(82,92,105,.1)}.bitrix24_light_theme .disk_folder_list_sorting+.disk_folder_list_view{border-left:1px solid rgba(255,255,255,.4)}
  .disk_folder_list_sorting_menu{animation:disk_folder_list_sorting_menu_show .1s linear forwards}@keyframes disk_folder_list_sorting_menu_show{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
  html:not(.kb_ie) .menu_popup .disk_folder_list_context_menu_item.menu_popup_item,html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup .menu_popup_item{display:flex}html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_icon,html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_text,html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_icon,html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_text{flex:1}html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_icon,html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_icon{order:1;margin:auto;width:32px;position:relative}
  .menu_popup_item_upload_file{position:relative}#inputContainerLabelFolderList,.menu_popup_item_upload_file label{position:absolute;top:0;left:0;bottom:0;right:0;height:100%;width:100%;overflow:hidden}.menu_popup_item_upload_file input{position:absolute;top:-100px;height:100px}
  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_text,html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_text{order:0;padding:0 13px 0 20px}html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_no_icon .menu_popup_item_text,html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_no_icon .menu_popup_item_text{padding:0 13px 0 20px}html:not(.kb_ie) .disk_folder_list_context_menu_item.menu_popup_item_accept .menu_popup_item_icon:before,html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_accept .menu_popup_item_icon{background:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2212px%22%20height%3D%229px%22%20viewBox%3D%220%200%2012%209%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28-200.000000%2C%20-682.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%2859.000000%2C%20492.000000%29%22%20fill%3D%22%230063C6%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%22142.360083%20193.446392%20145.013295%20196.099605%20151.316057%20190%20152.67614%20191.360083%20146.376563%20197.459687%20145.013295%20198.81977%20143.653213%20197.459687%20141%20194.806475%22%3E%3C/polygon%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') left center no-repeat}html:not(.kb_ie) .disk_folder_list_context_menu_item.menu_popup_item_accept .menu_popup_item_icon{background:0}html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_icon:before{background:transparent left center no-repeat;content:'';position:absolute;left:0;top:0;width:0;height:100%;transition:.3s}html:not(.kb_ie) .disk_folder_list_context_menu_item_accept_animate.menu_popup_item_accept .menu_popup_item_icon:before{width:32px}@keyframes disk_folder_list_item_pointer-events{from{pointer-events:none}to{pointer-events:auto}}@keyframes disk_folder_list_item_show{from{opacity:0}to{opacity:1}}disk_folder_list_search_progress_bar{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;margin:2px 0 0 0;height:8px;width:100%;border-radius:5px;overflow:hidden;background:#c0e6f3}.disk_folder_list_search_progress_bar:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background-image:-webkit-gradient(linear,0 0,100% 100%,color-stop(.25,rgba(255,255,255,.2)),color-stop(.25,transparent),color-stop(.5,transparent),color-stop(.5,rgba(255,255,255,.2)),color-stop(.75,rgba(255,255,255,.2)),color-stop(.75,transparent),to(transparent));background-image:-moz-linear-gradient(-45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent);z-index:1;-webkit-background-size:25px 25px;-moz-background-size:25px 25px;background-size:25px 25px;-webkit-animation:diskFolderListSearchMove 8s linear infinite;-moz-animation:diskFolderListSearchMove 8s linear infinite;-webkit-border-radius:20px 8px 8px 20px;-moz-border-radius: 20px 8px 8px 20px;border-radius:20px 8px 8px 20px;overflow:hidden}.disk_folder_list_search_progress_bar_line{position:absolute;height:100%;background:#49c8f5;border-radius:5px;-webkit-transition:width 1s linear;transition:width 1s linear;z-index:2}.disk_folder_list_search_progress_steps{padding:0 0 0 10px;text-align:right;box-sizing:border-box}.disk_folder_list_search_progress_show.disk_folder_list_search_progress{height:42px;opacity:1;visibility:visible}
  .lenta_sort_item .menu_popup_item_icon, .lenta_sort_item_selected .menu_popup_item_icon {
    width: 10px;}
  .disk_folder_list_view_item{display:inline-block;vertical-align:middle;width:24px;height:26px;background:center center no-repeat;opacity:.3;cursor:pointer;margin-left:4px;transition:.1s}.disk_folder_list_view_item:first-child{margin-left:0}.disk_folder_list_view_item_active,.disk_folder_list_view_item:hover{opacity:.82}.disk_folder_list_view_item_lines{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2217px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2017%2014%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1108.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281108.000000%2C%20213.000000%29%22%20fill%3D%22%23525C69%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}.bitrix24_light_theme .disk_folder_list_view_item_lines{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2217px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2017%2014%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1108.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281108.000000%2C%20213.000000%29%22%20fill%3D%22%23fff%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%2217%22%20height%3D%222%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}.disk_folder_list_view_item_grid{background-image:url('data:image/svg+xml;charset=US_ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1139.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281139.000000%2C%20213.000000%29%22%20fill%3D%22%23525C69%22%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}.bitrix24_light_theme .disk_folder_list_view_item_grid{background-image:url('data:image/svg+xml;charset=US_ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1139.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281139.000000%2C%20213.000000%29%22%20fill%3D%22%23fff%22%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%226%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}.disk_folder_list_view_item_grid_tile{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1168.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281168.000000%2C%20213.000000%29%22%20fill%3D%22%23525C69%22%3E%3Crect%20%20x%3D%220%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}.bitrix24_light_theme .disk_folder_list_view_item_grid_tile{background-image:url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20stroke-width%3D%221%22%20transform%3D%22translate%28-1168.000000%2C%20-213.000000%29%22%3E%3Cg%20transform%3D%22translate%281168.000000%2C%20213.000000%29%22%20fill%3D%22%23fff%22%3E%3Crect%20%20x%3D%220%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%220%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%226%22%20height%3D%226%22%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}
  .disk_breadcrumbs {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    padding-left: 12px;
    font-family: OpenSans-Regular,Helvetica Neue,Helvetica,sans-serif;
    font-size: 0;
  }
  .disk_folder_list_config {
    margin-right: 3px;
  }
  .disk_folder_list_config {
    display: block;
    overflow: hidden;
    height: 54px;
    font-size: 0;
    font-family: OpenSans-Regular,Helvetica Neue,Helvetica,sans-serif;
  }
  .disk_folder_list_toolbar {
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    margin: 0 12px 20px 0;
    border-top: 1px solid rgba(82,92,105,.1);
    border-bottom: 1px solid rgba(82,92,105,.1);
  }
  .page_header {
    min-width: 800px;
  }
  .page_header {
    border-top: 1px solid hsla(0,0%,100%,.15);
  }
  .kb_layout_inner_inner_top_row .kb_layout_inner_inner_cont {
    height: 74px;
  }
  td.kb_layout_inner_inner_cont {
    vertical-align: top;
    padding: 0 20px 0 0;
  }
  .kb_layout_inner_inner_cont {
    height: 100%;
    width: 100%;
  }
</style>
