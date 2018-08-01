<template>
  <div class="main_grid_container">
    <table class="main_grid_table">
      <thead class="main_grid_header">
      <tr class="main_grid_row_head">
        <th class="main_grid_cell_head main_grid_cell_static main_grid_cell_checkbox">
          <span class="main_grid_cell_head_container">
            <span class="main_grid_checkbox_container main_grid_head_checkbox_container">
              <input class="main_grid_checkbox main_grid_row_checkbox main_grid_check_all" type="checkbox"
                     title="Отметить все/снять отметку у всех">
              <label class="main_grid_checkbox" for=""></label>
            </span>
          </span>
        </th>
        <th class="main_grid_cell_head main_grid_cell_static main_grid_cell_action">
          <span class="main_grid_interface_settings_icon"></span>
        </th>
        <th class="main_grid_cell_head main_grid_cell_left main_grid_col_sortable  main_grid_draggable ">
          <span class="main_grid_cell_head_container">
            <span class="main_grid_head_title">Название</span>
            <span class="main_grid_resize_button" title=""></span>
            <span class="main_grid_control_sort main_grid_control_sort_hover_asc"></span>
          </span>
        </th>
        <th class="main_grid_cell_head main_grid_cell_left main_grid_col_sortable  main_grid_draggable ">
          <span class="main_grid_cell_head_container">
            <span class="main_grid_head_title">Изменен</span>
            <span class="main_grid_resize_button" title=""></span>
            <span class="main_grid_control_sort main_grid_control_sort_DESC"></span>
          </span>
        </th>
        <th class="main_grid_cell_head main_grid_cell_static main_grid_special_empty"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="section in sections" :key="'section ' + section.ID" class="main_grid_row main_grid_row_body"
          :id="'section ' + section.ID" @click="select" style="position:relative;">
        <td class="main_grid_cell main_grid_cell_checkbox">
          <span class="main_grid_cell_content">
            <input :id="'main_grid_row_checkbox_el' + section.ID" type="checkbox"
                   class="main_grid_row_checkbox main_grid_checkbox" :name="section.ID" :value="section.ID"
                   title="Отметить для редактирования">
            <label class="main_grid_checkbox" :for="'main_grid_row_checkbox_el' + section.ID"></label>
          </span>
        </td>
        <td class="main_grid_cell main_grid_cell_action">
          <span class="main_grid_cell_content">
            <a @click="modal" class="main_grid_row_action_button" :id="'section ' + section.ID"></a>
          </span>
        </td>
        <td class="main_grid_cell main_grid_cell_left">
                                       <span class="main_grid_cell_content">
                                          <table class="kb_disk_object_name">
                                             <tbody>
                                                <tr>
                                                   <td style="width: 45px;">
                                                      <div class="kb_disk_folder_icon"></div>
                                                   </td>
                                                   <td><router-link :to="'/section/' + section.CODE"
                                                                    class="bx_disk_folder_title"
                                                   >{{ section.NAME }}</router-link></td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </span>
        </td>
        <td class="main_grid_cell main_grid_cell_left"><span
          class="main_grid_cell_content">{{ frontEndDateFormat(section.DATE_CREATE) }}</span></td>
        <td class="main_grid_cell"></td>
        <menuModal v-if="popup === 'section ' + section.ID" pos ="left:75px;" :ID="section.CODE" type="section"></menuModal>
        </tr>
      <tr v-for="element in elements" :key="'artic ' + element.ID" class="main_grid_row main_grid_row_body"
          :id="'artic ' + element.ID" @click="select" style="position:relative;">
        <td class="main_grid_cell main_grid_cell_checkbox"><span class="main_grid_cell_content"><input
          type="checkbox" class="main_grid_row_checkbox main_grid_checkbox"
          title="Отметить для редактирования"><label
          class="main_grid_checkbox" for=""></label></span></td>
        <td class="main_grid_cell main_grid_cell_action"><span class="main_grid_cell_content"><a @click="modal"
                                                                                                 class="main_grid_row_action_button"
                                                                                                 :id="'artic ' + element.CODE"></a></span>
        </td>
        <td class="main_grid_cell main_grid_cell_left element">
                                       <span class="main_grid_cell_content">
                                          <table class="kb_disk_object_name">
                                             <tbody>
                                                <tr>
                                                   <td style="width: 45px;">
                                                      <div class="kb_disk_folder_icon ui_icon_file_folder-el"></div>
                                                   </td>
                                                    <td><router-link :to="'/artic/' + element.ID"
                                                                     class="bx_disk_folder_title"
                                                    >{{ element.NAME }}</router-link></td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </span>
        </td>
        <td class="main_grid_cell main_grid_cell_left"><span
          class="main_grid_cell_content">{{frontEndDateFormat(element.DATE_CREATE) }}</span></td>
        <td class="main_grid_cell"></td>
        <menuModal v-if="popup === 'artic ' + element.CODE" pos ="left:75px;" :CODE="element.CODE" type="artic"></menuModal>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MenuModal from '../modals/MenuModal'

export default {
  name: 'filelist',
  components: {MenuModal},
  data: function () {
    return {
      popup: false
    }
  },
  methods: {
    select: function (event) {
      // console.log(event.currentTarget.id)
    },
    modal: function (event) {
      if (this.popup !== event.currentTarget.id) { this.popup = event.currentTarget.id } else { this.popup = false }
    },
    frontEndDateFormat: function (date) {
      return date.substring(0, 10)
    }
  },
  computed: {
    elements () {
      return this.$store.getters.getElementsByParentID(this.$route.params.id)
    },
    sections () {
      return this.$store.getters.getSectionsByParentID(this.$route.params.id)
    }
  }
}
</script>
<style scoped>
  .main_grid_container {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .main_grid_table {
    background: #eef2f4;
    min-width: 100%;
    border: none;
    border-spacing: 0;
    table-layout: inherit;
    transition: opacity 150ms linear;
    opacity: 1;
    overflow: hidden;
  }

  .main_grid_row_head {
    background-color: #ffffff;
    border-bottom: 2px #eef2f4 solid;
  }

  .main_grid_cell_head {
    position: relative;
    background-color: #ffffff;
    border-bottom: 3px #eef2f4 solid;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0;
    min-width: 70px;
    height: 48px;
    -webkit-transition: background_col-r .3s cubic-bezier(.000, .465, .750, .750);
    -moz-transition: background_col-r .3s cubic-bezier(.000, .465, .750, .750);
    -o-transition: background_col-r .3s cubic-bezier(.000, .465, .750, .750);
    transition: background_col-r .3s cubic-bezier(.000, .465, .750, .750);
  }

  .main_grid_cell_head {
    white-space: nowrap;
  }

  .main_grid_cell_head * {
    display:none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .main_grid_cell_head:last-child {
    border-right: 0;
  }

  .main_grid_row_head .main_grid_cell_head.main_grid_cell_last {
    border-right-color: transparent;
  }

  .main_grid_border .main_grid_cell_head {
    border-right: 1px solid #C1EAF9 !important;
    border-bottom: 1px solid #C1EAF9 !important;
    border-top: 1px solid #C1EAF9 !important;
  }

  .main_grid_border .main_grid_row_head .main_grid_cell_head:first-child {
    border-left: 1px solid #C1EAF9;
  }

  .main_grid_cell_head_container {
    padding-top: 15px;
    padding-bottom: 11px;
    padding-left: 16px;
    padding-right: 16px;
    display: block;
    max-width: 100%;
    min-width: 100%;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .main_grid_head_title {
    font-family: 'OpenSans_Semibold', "Helvetica Neue", Arial, Helvetica, sans-serif;
    display: inline-block;
    max-width: 100%;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #535c69;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 11px;
    line-height: 12px;
    text-align: left;
    z-index: 7;
    letter-spacing: .5px;
    padding-right: 21px;
  }

  .main_grid_col_no_sortable {
    cursor: default;
  }

  .main_grid_compact .main_grid_cell_head_container {
    padding: 9px 10px;
  }

  .main_grid_compact .main_grid_head_title {
    font-size: 13px;
  }

  .main_grid_cell_sortable_up,
  .main_grid_cell_sortable_down {
    position: relative;
    padding-right: 21px;
  }

  .main_grid_compact .main_grid_cell_sortable_up,
  .main_grid_compact .main_grid_cell_sortable_down {
    padding-right: 21px;
  }

  .main_grid_cell_sortable {
    background-color: #c1eaf9;
  }

  .main_grid_cell_sortable_up:before,
  .main_grid_cell_sortable_down:before {
    content: '';
    position: absolute;
    width: 21px;
    height: 12px;
    right: 0;
    top: 50%;
    z-index: 1;
    margin-top: -6px;
    background: url(../../images/sprite_interface.min.svg) 1px -214px no-repeat;
    opacity: 0;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  .main_grid_cell_sortable_up:before {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    o-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .main_grid_cell_sortable.main_grid_cell_sortable_up:before,
  .main_grid_cell_sortable.main_grid_cell_sortable_down:before,
  .main_grid_cell_sortable_up:hover:before,
  .main_grid_cell_sortable_down:hover:before {
    opacity: .6;
  }

  .main_grid_cell {
    background: #ffffff;
    vertical-align: top;
    padding: 0;
    border-bottom: 1px #eef2f4 solid;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    -khtml-user-drag: none;
    -webkit-user-drag: none;
  }

  .main_grid_cell,
  .main_grid_cell_head {
    box-sizing: border-box;
    /*padding-right: 5px;*/
  }

  .main_grid_cell_head.main_grid_cell_static.main_grid_cell_drag {
    width: 21px;
  }

  .main_grid_cell_head.main_grid_cell_static.main_grid_cell_checkbox {
    cursor: auto;
    width: 27px;
  }

  .main_grid_cell_head.main_grid_cell_static.main_grid_cell_checkbox .main_grid_cell_head_container {
    max-width: 27px;
    min-width: 27px;
  }

  .main_grid_cell_head.main_grid_cell_static.main_grid_cell_action {
    width: 36px;
  }

  .main_grid_cell_head.main_grid_cell_checkbox,
  .main_grid_cell.main_grid_cell_checkbox,
  .main_grid_control_panel_cell.main_grid_cell_checkbox {
    display: none;
    width: 1%;
    min-width: 18px;
    text-align: center;
    border-right: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .main_grid_cell_checkbox .main_grid_cell_content,
  .main_grid_cell_action .main_grid_cell_content {
    margin-left: 0;
    margin-right: 0;
    top: 1px;
  }

  .main_grid_cell_checkbox .main_grid_cell_head_container {
    padding-left: 0;
    padding-right: 0;
    padding-top: 12px;
    padding-bottom: 10px;
  }

  .main_grid_cell_drag .main_grid_cell_content,
  .main_grid_cell_checkbox .main_grid_cell_content,
  .main_grid_cell_action .main_grid_cell_content {
    top: -1px;
  }

  .main_grid_cell_checkbox:first-child .main_grid_cell_content,
  .main_grid_cell_checkbox:first-child .main_grid_cell_head_container {
    padding-left: 9px;
  }

  .main_grid_panel_cell.main_grid_cell_checkbox {
    padding-left: 0;
    padding-right: 5px;
    text-align: center;
    width: 55px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .main_grid_cell_head_drag .main_grid_cell_head_container {
    background: rgba(35, 174, 225, 0.51);
    /*position: relative;*/
    z-index: 99;
  }

  .main_grid_border .main_grid_cell_head_ondrag .main_grid_cell_head_container,
  .main_grid_border .main_grid_cell_head_drag .main_grid_cell_head_container {
    top: 1px;
  }

  .main_grid_cell_head_ondrag .main_grid_cell_head_container,
  .main_grid_triangle_top {
    /*position:absolute;*/
    top: 0;
    z-index: 20;
    -webkit-transition: left 0.2s ease-out;
    -moz-transition: left 0.2s ease-out;
    -o-transition: left 0.2s ease-out;
    transition: left 0.2s ease-out;
  }

  .main_grid_cell_head_ondrag.main_grid_cell_last .main_grid_cell_head_container {
    border-right-color: transparent;
  }

  .main_grid_cell_head_drag_dest .main_grid_cell_head_container {
    position: absolute;
    top: 1px;
    border: none;
    background: none;
    width: 0;
    display: block;
  }

  .main_grid_cell_drag,
  .main_grid_cell_drag .main_grid_cell_head_container,
  .main_grid_cell_drag .main_grid_cell_content {
    width: 1%;
    min-width: 10px;
    min-height: 20px;
  }

  .main_grid_cell_drag .main_grid_cell_head_container {
    padding: 0;
  }

  .main_grid_head_checkbox_container label.main_grid_checkbox {
    display: none;
  }

  label.main_grid_checkbox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .main_grid_row_checkbox[disabled] + .main_grid_checkbox {
    opacity: .4;
    pointer-events: none;
  }

  .main_grid_row_body .main_grid_row_checkbox,
  .main_grid_row_body .main_grid_row_checkbox + label {
    /*pointer-events: none;*/
  }

  .main_grid_cell_head:nth-last-of-type(2) .main_grid_resize_button {
    right: 0;
    width: 3px;
  }

  .main_grid_cell_head:hover .main_grid_resize_button {
    opacity: 1;
  }

  .main_grid_cell_head:nth-last-of-type(2) .main_grid_resize_button::before {
    right: 0;
    width: 1px;
  }

  html:not(.kb_firefox) .main_grid_cell_head:nth-last-of-type(2) .main_grid_resize_button::after {
    right: 1px;
  }

  .main_grid_cell_last .main_grid_resize_button,
  .main_grid_cell_head_drag .main_grid_resize_button {
    right: 0;
  }

  .main_grid_cell_head_drag {
    position: absolute;
    top: 0;
    z-index: 30;
  }

  .main_grid_cell_head_drag::after {
    position: absolute;
    background: rgba(0, 0, 0, .07);
    content: "";
    width: 100%;
    height: 1000px;
    top: 100%;
  }

  .main_grid_control_sort_desc,
  .main_grid_cell_head:hover .main_grid_control_sort_hover_desc,
  .main_grid_cell_head:active .main_grid_control_sort_hover_desc {
    visibility: visible;
  }

  .main_grid_control_sort_asc,
  .main_grid_cell_head:hover .main_grid_control_sort_hover_asc,
  .main_grid_cell_head:active .main_grid_control_sort_hover_asc {
    background: url(../../images/sprite_interface.min.svg) 3px -291px no-repeat;
    visibility: visible;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    o-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .main_grid_col_no_sortable .main_grid_control_sort_asc,
  .main_grid_col_no_sortable.main_grid_cell_head:hover .main_grid_control_sort_hover_asc,
  .main_grid_col_no_sortable.main_grid_cell_head:active .main_grid_control_sort_hover_asc,
  .main_grid_col_no_sortable .main_grid_control_sort_desc,
  .main_grid_col_no_sortable.main_grid_cell_head:hover .main_grid_control_sort_hover_desc,
  .main_grid_col_no_sortable.main_grid_cell_head:active .main_grid_control_sort_hover_desc {
    visibility: hidden;
  }

  .main_grid_cell_head.load .main_grid_control_sort {
    visibility: visible;
    /*background: url(images/loader.png) no-repeat 0 0;*/
    background-size: 100%;
    -webkit-animation: grid_load 2s linear infinite;
    animation: grid_load 2s linear infinite;
  }

  .main_grid_cell_action {
    width: 1%;
    min-width: 36px;
    text-align: center;
    cursor: default;
  }

  .main_grid_interface_settings_icon {
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
    width: 16px;
    min-width: 16px;
    height: 17px;
    background: url(../../images/grid_gear.svg) 50% 50% no-repeat;
    cursor: pointer;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
    opacity: .5;
    background-size: 13px;
    transform: translateY(-50%) translateX(-50%);
  }

  .main_grid_interface_settings_icon.main_grid_interface_settings_icon_active {
    opacity: 1;
  }

  .main_grid_interface_settings_icon:hover {
    opacity: 1;
  }

  .main_grid_cell_left {
    text-align: left;
  }

  .main_grid_resize_button {
    display: block;
    width: 11px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -4px;
    z-index: 10;
    cursor: col-resize;
    -webkit-transition: opacity 200ms;
    -moz-transition: opacity 200ms;
    -ms-transition: opacity 200ms;
    -o-transition: opacity 200ms;
    transition: opacity 200ms;
    opacity: 0;
  }

  html:not(.kb_firefox) .main_grid_resize_button::after {
    display: inline-block;
    content: '';
    width: 1px;
    background: #eef2f4;
    position: absolute;
    top: 100%;
    right: 5px;
    z-index: 1;
    opacity: 0;
    -webkit-transition: opacity 200ms;
    -moz-transition: opacity 200ms;
    -ms-transition: opacity 200ms;
    -o-transition: opacity 200ms;
    transition: opacity 200ms;
  }

  .main_grid_resize_button::before {
    background: rgba(0, 0, 0, .1);
    display: inline-block;
    width: 1px;
    height: 26px;
    font-size: 13px;
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -13px;
    right: 4px;
  }

  .main_grid_resize_button:hover::before,
  .main_grid_resize_button:active::before {
    opacity: 1;
    background: rgba(0, 0, 0, .2);
  }

  html:not(.kb_firefox) .main_grid_resize_button:hover::after,
  html:not(.kb_firefox) .main_grid_resize_button:active::after {
    opacity: 1;
    height: 50000px;
  }

  .main_grid_control_sort {
    background: url(../../images/sprite_interface.min.svg) 3px -290px no-repeat;
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;
    top: 0;
    left: -18px;
    visibility: hidden;
  }

  .main_grid_special_empty {
    min-width: 0 !important;
    cursor: default;
  }

  .main_grid_row_custom > .main_grid_cell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .main_grid_row_custom:hover > .main_grid_cell {
    background: #ffffff !important;
  }

  .main_grid .main_grid_row.main_grid_row_empty > td.main_grid_cell {
    background: rgba(255, 255, 255, .8);
    line-height: 44px;
    vertical-align: middle;
  }

  .main_grid .main_grid_row.main_grid_row_empty:hover > td.main_grid_cell {
    /*background: none;*/
    background: rgba(255, 255, 255, .8);
  }

  .main_grid_row_custom .main_grid_minus_button,
  .main_grid_row_custom .main_grid_plus_button {
    position: absolute;
    float: left;
    top: 16px;
    left: 12px;
    z-index: 1;
  }

  .main_grid_row_custom .main_grid_minus_button + .main_grid_cell_content,
  .main_grid_row_custom .main_grid_plus_button + .main_grid_cell_content {
    margin-left: 34px;
  }

  .main_grid_row_custom .main_grid_minus_button + .main_grid_cell_content .tasks_grid_wrapper,
  .main_grid_row_custom .main_grid_plus_button + .main_grid_cell_content .tasks_grid_wrapper {
    margin: -16px -50px;
    padding: 0 29px;
  }

  .main_grid_row_expand .main_grid_plus_button {
    opacity: .7;
  }

  .main_grid_row_expand .main_grid_plus_button:hover {
    opacity: 1;
  }

  .main_grid_row_expand .main_grid_plus_button:before {
    content: '';
    background-image: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill_rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%226.5%22%20stroke%3D%22%23525C69%22%20opacity%3D%22.234%22/%3E%0A%20%20%20%20%3Crect%20width%3D%226%22%20height%3D%222%22%20x%3D%224%22%20y%3D%226%22%20fill%3D%22%23A6AAAF%22/%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E%0A');
  }

  .main_grid_row_body {
    -webkit-transition: opacity, border 200ms;
    -moz-transition: opacity, border 200ms;
    -ms-transition: opacity, border 200ms;
    -o-transition: opacity, border 200ms;
    transition: opacity, border 200ms;
  }

  .main_grid_row_body:last-child .main_grid_cell {
    border-bottom: none;
  }

  .main_grid_row_body:hover .main_grid_cell_drag .main_grid_cell_content,
  .main_grid_table_fake .main_grid_cell_content {
    opacity: 1;
  }

  .main_grid_row_body {
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  }

  .main_grid_row td {
    position: relative;
  }

  .main_grid_on_row_drag.main_grid_row {
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  .main_grid:not(.main_grid_ondrag) .main_grid_row:hover > .main_grid_cell,
  .main_grid:not(.main_grid_ondrag) .main_grid_row.main_grid_row_over > .main_grid_cell {
    background-color: #f6f8f9;
  }

  .main_grid_row_checked .main_grid_cell,
  .main_grid_row_checked .main_grid_cell {
    background-color: #f5fcde;
  }

  .main_grid:not(.main_grid_ondrag) .main_grid_row_checked:hover > .main_grid_cell,
  .main_grid:not(.main_grid_ondrag) .main_grid_row.main_grid_row_checked.main_grid_row_over > .main_grid_cell,
  .main_grid_row_checked:hover > .main_grid_cell {
    background-color: #FAFFEB;
  }

  .main_grid_row .main_grid_cell:last-child {
    border-right: none;
  }

  .main_grid_border .main_grid_cell {
    border-right: 1px solid #edeef0 !important;
    border-bottom: 1px solid #edeef0 !important;
  }

  .main_grid_border .main_grid_row .main_grid_cell:first-child {
    border-left: 1px solid #edeef0;
  }

  .main_grid_row:hover .main_grid_cell_text_limited:before {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(245, 245, 245, 1) 100%);
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(245, 245, 245, 1) 100%);
    background: linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(245, 245, 245, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#f5f5f5', GradientType=0);
  }

  .main_grid_row_checked .main_grid_cell_text_limited:before {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(245, 252, 222, 1) 100%);
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(245, 252, 222, 1) 100%);
    background: linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(245, 252, 222, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#f5fcde', GradientType=0);
  }

  .main_grid_row_checked:hover .main_grid_cell_text_limited:before {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(250, 255, 235, 1) 100%);
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(250, 255, 235, 1) 100%);
    background: linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(250, 255, 235, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#faffeb', GradientType=0);
  }

  .main_grid_cell_text_limited {
    display: block;
    line-height: 16px;
    max-height: 58px;
    position: relative;
    overflow: hidden;
  }

  .main_grid_cell_text_limited:before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 16px;
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    background: linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff', GradientType=0);
    -webkit-transition: background 300ms ease;
    -moz-transition: background 300ms ease;
    -o-transition: background 300ms ease;
    transition: background 300ms ease;
  }

  .main_grid_cell_text_limited_btn {
    /*position: absolute;*/
    /*bottom:0;*/
    line-height: 15px;
    vertical-align: bottom;
    font-size: 12px;
    cursor: pointer;
    color: #2067b0;
    border-bottom: 1px dashed;
    -webkit-transition: border 300ms ease;
    -moz-transition: border 300ms ease;
    -o-transition: border 300ms ease;
    transition: border 300ms ease;
  }

  .main_grid_cell_text_limited_btn:hover {
    border-bottom-color: transparent;
  }

  .main_grid_cell_foot {
    background-color: #fff;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    vertical-align: top;
    -webkit-transition: background 300ms ease;
    -moz-transition: background 300ms ease;
    -o-transition: background 300ms ease;
    transition: background 300ms ease;
  }

  .main_grid_cell_foot .main_grid_cell_content {
    padding: 10px 13px 22px;
  }

  .main_grid_compact .main_grid_cell_foot .main_grid_cell_content {
    padding: 10px 10px 15px;
  }

  .main_grid_cell_content_edit {
    border: 1px solid #b5bac0;
    background: #fff;
    max-width: 100%;
    color: #000;
    padding: 3px 10px;
    font-size: 14px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    height: 38px;
    vertical-align: top;
  }

  textarea.main_grid_cell_content_edit {
    height: auto;
  }

  input[type="file"].main_grid_cell_content_edit {
    display: none;
  }

  .main_grid_cell_content,
  .main_grid_editor_container {
    color: #535c69;
    font-size: 13px;
    position: relative;
    display: block;
    vertical-align: top;
    margin: 16px 16px 16px;
  }

  .main_grid_cell_content a:hover {
    text-decoration: underline;
  }

  .main_grid_compact .main_grid_cell_content {
    padding: 10px 10px 8px;
  }

  .main_grid_cell_content.main_grid_cell_text_line {
    display: block;
    max-width: 100%;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .main_grid_cell_center {
    text-align: center;
  }

  .main_grid_cell_right {
    text-align: right;
  }

  .main_grid_cell_justify {
    text-align: justify;
  }

  .main_grid_cell_overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .main_grid_cell_content .main_grid_disk_icon {
    vertical-align: middle;
    position: relative;
    top: -2px;
  }

  .main_grid_cell_btn_link {
    display: inline;
    cursor: pointer;
    font-size: 13px;
    color: #2067b0;
    border: none;
    padding: 0;
    background-color: transparent;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  .main_grid_cell_btn_link:hover {
    text-decoration: underline;
  }

  .main_grid_cell_plus {
    width: 22px;
    min-width: 22px;
    max-width: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .main_grid_cell_no_border {
    border-bottom: none;
  }

  .main_grid_cell_drag .main_grid_cell_content {
    /*background: url(images/drag.svg) 50% 50% no-repeat;*/
    margin-right: 5px;
    margin-left: 6px;
    cursor: move;
    opacity: 0;
    -webkit-transition: opacity 200ms ease;
    -moz-transition: opacity 200ms ease;
    -ms-transition: opacity 200ms ease;
    -o-transition: opacity 200ms ease;
    transition: opacity 200ms ease;
  }

  .main_grid_cell_drag .main_grid_cell_content {
    top: -2px;
  }

  .main_grid_cell * {
    -khtml-user-drag: none;
    -webkit-user-drag: none;
  }

  .kb_disk_object_name {
    width: 100%
  }

  .kb_disk_object_name tr td {
    padding: 0 !important;
    border: none !important;
    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden
  }

  .kb_disk_folder_icon.double {
    position: relative;
    top: -6px;
    width: 40px;
    height: 35px;
    background: url(../../images/sprite.png) 0 -1120px !important
  }

  .kb_disk_interface_tile .kb_disk_folder_icon {
    display: block;
    float: none;
    margin: 30px auto 10px
  }

  [id*="popup_window_content_menu_popup_main_grid_actions_menu"] .menu_popup_item_text,
  [id*="menu_popup_main_grid_submenu"] .menu_popup_item_text {
    padding-right: 22px;
  }

  .popup_window[id*="_grid_settings_window"] .popup_window_content .main_grid_settings_window {
    opacity: 1;
    height: auto;
    overflow: auto;
  }

  .main_grid_popup_window_buttons_wrapper {
    background: #ffffff;
    position: sticky;
    position: -webkit-sticky;
    /*position: _moz_sticky;*/
    /*position: -ms-sticky;*/
    /*position: _o_sticky;*/
    bottom: 0;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: -10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    box-sizing: border-box;
    box-shadow: 0 -2px 9px -2px rgba(0, 0, 0, .5);
    z-index: 9999;
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_text, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_text {
    order: 0;
    padding: 0 13px 0 20px
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_no_icon .menu_popup_item_text, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_no_icon .menu_popup_item_text {
    padding: 0 13px 0 20px
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item.menu_popup_item_accept .menu_popup_item_icon:before, html:not(.kb_ie) .disk_folder_list_sorting_menu .menu_popup_item_accept .menu_popup_item_icon {
    background: url('data:image/svg+xml;charset=US_ASCII,%3Csvg%20width%3D%2212px%22%20height%3D%229px%22%20viewBox%3D%220%200%2012%209%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28-200.000000%2C%20-682.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%2859.000000%2C%20492.000000%29%22%20fill%3D%22%230063C6%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%22142.360083%20193.446392%20145.013295%20196.099605%20151.316057%20190%20152.67614%20191.360083%20146.376563%20197.459687%20145.013295%20198.81977%20143.653213%20197.459687%20141%20194.806475%22%3E%3C/polygon%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E') left center no-repeat
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item.menu_popup_item_accept .menu_popup_item_icon {
    background: 0
  }

  html:not(.kb_ie) .disk_folder_list_context_menu_item .menu_popup_item_icon:before {
    background: transparent left center no-repeat;
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

  @keyframes disk_folder_list_item_pointer-events {
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

  disk_folder_list_search_progress_bar {
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
    background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)), color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent), to(transparent));
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
    box-sizing: border-box
  }

  .disk_folder_list_search_progress_show.disk_folder_list_search_progress {
    height: 42px;
    opacity: 1;
    visibility: visible
  }

  .lenta_sort_item .menu_popup_item_icon, .lenta_sort_item_selected .menu_popup_item_icon {
    width: 10px;
  }

  .lenta_sort_item_selected .menu_popup_item_icon {
    /*background: url("images/template_sprite.png?11") no-repeat -79px -1446px;*/
  }

  .language_icon .menu_popup_item_icon {
    width: 24px;
    height: 18px;
    /*background: url(images/flags.png?3) no-repeat -34px -28px;*/
    background-size: 100px 400px;
    border: 1px solid #ccd3d7;
  }

  .ru .kb_lang_btn_icon,
  .ru .menu_popup_item_icon {
    background-position: 0 0;
  }

  .de .kb_lang_btn_icon,
  .de .menu_popup_item_icon {
    background-position: 0 -28px;
  }

  .en .kb_lang_btn_icon,
  .en .menu_popup_item_icon {
    background-position: 0 -56px;
  }

  .ua .kb_lang_btn_icon,
  .ua .menu_popup_item_icon {
    background-position: 0 -84px;
  }

  .la .kb_lang_btn_icon,
  .la .menu_popup_item_icon {
    background-position: 0 -112px;
  }

  .tc .kb_lang_btn_icon,
  .tc .menu_popup_item_icon {
    background-position: -34px 0;
  }

  .sc .kb_lang_btn_icon,
  .sc .menu_popup_item_icon {
    background-position: 0 -140px;
  }

  .br .kb_lang_btn_icon,
  .br .menu_popup_item_icon {
    background-position: 0 -168px;
  }

  .in .kb_lang_btn_icon,
  .in .menu_popup_item_icon {
    background-position: 0 -308px;
  }

  .fr .kb_lang_btn_icon,
  .fr .menu_popup_item_icon {
    background-position: 0 -252px;
  }

  .pl .kb_lang_btn_icon,
  .pl .menu_popup_item_icon {
    background-position: 0 -224px;
  }

  .tr .kb_lang_btn_icon,
  .tr .menu_popup_item_icon {
    background-position: 0 -336px;
  }

  .nl .kb_lang_btn_icon,
  .nl .menu_popup_item_icon {
    background-position: 0 -196px;
  }

  .vn .kb_lang_btn_icon,
  .vn .menu_popup_item_icon {
    background-position: 0 -280px;
  }

  .ja .kb_lang_btn_icon,
  .ja .menu_popup_item_icon {
    background-position: -34px -56px;
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

  .ui_icon_file_folder-el {
    background-position: 0 -433px !important;
    height: 35px;
  }
</style>
