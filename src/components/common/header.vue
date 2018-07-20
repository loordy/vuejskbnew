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

<style scoped>
  .kb_layout_inner_inner_top_row .kb_layout_inner_inner_cont {
    height: 74px;
  }
  .kb_layout_inner_inner_cont {
    height: 100%;
    width: 100%;
  }
  .page_header {
    min_width: 800px;
    /*max_width: calc(100vw _ 240px);*/
  }

  disk_folder_list_toolbar {
    display: flex;
    overflow: hidden;
    margin: 0 12px 20px 0;
    border_top: 1px solid rgba(82, 92, 105, .1);
    border_bottom: 1px solid rgba(82, 92, 105, .1)
  }

  disk_breadcrumbs {
    display: flex;
    flex: 1;
    flex_wrap: wrap;
    overflow: hidden;
    padding_left: 12px;
    font_family: 'OpenSans_Regular', "Helvetica Neue", Helvetica, sans_serif;
    font_size: 0
  }

  .disk_breadcrumbs_item {
    flex: 0 1 auto;
    flex_shrink: 0;
    white_space: nowrap
  }

  .disk_breadcrumbs_item_title, .disk_breadcrumbs_item_title:hover {
    display: inline-block;
    vertical_align: middle;
    font_size: 13px;
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
    vertical_align: middle;
    width: 20px;
    height: 100%;
    margin: 0 4px;
    opacity: .5;
    transition: .1s;
    cursor: pointer;
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%239299A2%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E') center center no_repeat
  }

  .bitrix24_light_theme .disk_breadcrumbs_item_arrow {
    background_image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%23fff%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')
  }

  .bitrix24_dark_theme .disk_breadcrumbs_item_arrow {
    background_image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%20%3Cg%20stroke_width%3D%221%22%20transform%3D%22translate%28-478.000000%2C%20-217.000000%29%22%3E%3Cpath%20d%3D%22M477.5%2C223.5%20L482%2C223.5%20L482%2C225%20L477.5%2C225%20L476%2C225%20L476%2C219%20L477.5%2C219%20L477.5%2C223.5%20Z%22%20id%3D%22Path%22%20fill%3D%22%23333%22%20transform%3D%22translate%28479.000000%2C%20222.000000%29%20scale%28-1%2C%201%29%20rotate%2845.000000%29%20translate%28-479.000000%2C%20-222.000000%29%20%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')
  }

  .disk_breadcrumbs_item_arrow:hover {
    opacity: 1
  }

  .disk_breadcrumbs_item:last_child .disk_breadcrumbs_item_arrow {
    opacity: 0
  }

  .disk_breadcrumbs_item_back {
    display: inline-block;
    vertical_align: top;
    height: 54px;
    width: 30px;
    opacity: .5;
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2213px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2013%2012%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23535C6A%22%20d%3D%22M4.65%2C7%20L8.2%2C10.55%20L6.8%2C11.95%20L2.25%2C7.4%20L2.2%2C7.45%20L0.8%2C6.05%20L0.85%2C6%20L0.8%2C5.95%20L2.2%2C4.55%20L2.25%2C4.6%20L6.8%2C0.05%20L8.2%2C1.45%20L4.65%2C5%20L13%2C5%20L13%2C7%20L4.65%2C7%20Z%22%3E%3C/path%3E%3C/svg%3E') 2px 21px no_repeat;
    cursor: pointer;
    transition: .1s
  }

  .bitrix24_light_theme .disk_breadcrumbs_item_back {
    background_image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2213px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2013%2012%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M4.65%2C7%20L8.2%2C10.55%20L6.8%2C11.95%20L2.25%2C7.4%20L2.2%2C7.45%20L0.8%2C6.05%20L0.85%2C6%20L0.8%2C5.95%20L2.2%2C4.55%20L2.25%2C4.6%20L6.8%2C0.05%20L8.2%2C1.45%20L4.65%2C5%20L13%2C5%20L13%2C7%20L4.65%2C7%20Z%22%3E%3C/path%3E%3C/svg%3E')
  }

  .disk_breadcrumbs_item_back:hover {
    opacity: 1
  }
</style>
