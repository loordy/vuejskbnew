<template>
  <table style="width:100%">
    <tr class="kb_layout_inner_inner_top_row">
      <td class="kb_layout_inner_inner_cont">
        <div class="page_header">
          <div class="pagetitle_below">
            <div class="disk_folder_list_toolbar" >
              <div class="disk_breadcrumbs js_disk_breadcrumbs"  style="opacity: 1;">
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
                  <div v_bind:class="[viewlist.viewList ? activeClass : '', list]"></div>
                  <div v_bind:class="[viewlist.viewGrid ? activeClass : '', grid]"></div>
                  <div v_bind:class="[viewlist.viewGrid_tile ? activeClass : '', gridtile]"></div>
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
      activeclass: 'disk_folder_list_view_item_active',
      grid: 'disk_folder_list_view_item disk_folder_list_view_item_grid',
      list: 'disk_folder_list_view_item disk_folder_list_view_item_lines',
      gridtile: 'disk_folder_list_view_item disk_folder_list_view_item_grid_tile'
    }
  },
  computed: {
    viewlist () {
      return this.$store.getters.getviewType()
    }
  },
  methods: {
    viewChange (type) {
      this.store.commit('setView', type)
    }
  }
}
</script>

<style scoped>
  #live_search {
    background:#f5f5f5;
    padding:25px 0;
    border_top:1px solid #e8e8e8;
    border_bottom:1px solid #e8e8e8;
  }
  #live_search #searchform {
    width:100%;
    background:#fff;
    border:1px solid #d1d1d1;
    position:relative;
    _moz_border_radius:99px;
    _webkit_border_radius:99px;
    border_radius:99px;
  }
  #live_search #s {
    float: left;
    width: 80%;
    background:none;
    color:#595959;
    font_size:16px;
    padding:20px 25px;
    border:none;
    box_shadow:none;
    position:relative;
    outline: 0;
  }
  #live_search i.live_search_loading {
    font_size: 24px;
    position:absolute;
    right: 160px;
    top: 18px;
    display:none;
  }
  #live_search #s.live_search_loading + i.live_search_loading {
    display:inline_block;
  }
  #live_search #searchsubmit {
    position:absolute;
    right:0;
    top:0;
    color:#fff;
    margin:12px 25px 0 0;
    padding: 10px 18px;
    text_transform:uppercase;
    border:none;
    _moz_border_radius:99px;
    _webkit_border_radius:99px;
    border_radius:99px;
  }
  #live_search #searchsubmit:hover {
    background_color:#4A4A4A;
  }
  #live_search #searchsubmit i {
    margin:0 5px 0 0;
  }
  #search_wrap {
    position:relative;
  }
  #search_result {
    position:absolute;
    background:#fff;
    list_style:none;
    min_width: 260px;
    font_size:13px;
    top:20px;
    left: 5px;
    margin: 0;
    padding: 10px 5px;
    border:1px solid #d1d1d1;
    box_shadow:1px 1px 2px rgba(0,0,0,0.1);
    z_index:9999;
    _moz_border_radius:5px;
    _webkit_border_radius:5px;
    border_radius:5px;
  }
  #search_result:before {
    border_color: transparent transparent #ccc;
    border_style: solid;
    border_width: 12px;
    content: "";
    height: 0;
    left: 40px;
    position: absolute;
    top: _25px;
    width: 0;
  }
  #search_result:after {
    border_color: transparent transparent #fff;
    border_style: solid;
    border_width: 12px;
    content: "";
    height: 0;
    left: 40px;
    position: absolute;
    top: _24px;
    width: 0;
    z_index: 999;
  }
  #search_result li {
    margin:0;
  }
  #search_result li.standard a:before,
  #search_result li.video a:before,
  #search_result li.faq a:before {
    display: inline_block;
    font_family: FontAwesome;
    font_weight: normal;
    font_size: 16px;
    margin:0 10px 0 0;
    position: absolute;
    left: 10px;
  }
  #search_result li.standard a:before {
    content:"\f0f6";
  }
  #search_result li.video a:before {
    content:"\f008";
    font_size: 12px;
  }
  #search_result li.faq a:before {
    content:"\f059";
  }
  #search_result li:last_child {
    margin:0;
  }
  #search_result a {
    display:block;
    color:#444;
    line_height: 1.4;
    padding: 5px 10px 5px 32px;
    position: relative;}
  #search_result a:hover {
    text_decoration:none;
    background:#F5F5F5;
    _moz_border_radius:99px;
    _webkit_border_radius:99px;
    border_radius:99px;
  }
  #search_result img {
    vertical_align:middle;
    margin:0 10px 0 0;
  }
  #search_result .nothing_here {
    padding:0 5px;
  }
  #jquery_live_search {
    overflow:visible  !important;
  }
</style>
