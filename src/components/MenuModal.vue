<template>
    <div>
        <div class="popup_window_content">
            <div class="menu_popup" style="display: block;">
                <div class="menu_popup_items">
                    <a class="menu_popup_item disk_folder_list_context_menu_item ">
                        <span class="menu_popup_item_icon"></span>
                        <span class="menu_popup_item_text">Открыть</span>
                    </a>
                    <span class="menu_popup_item disk_folder_list_context_menu_item ">
              <span class="menu_popup_item_icon"></span>
              <span class="menu_popup_item_text">Удалить</span>
            </span>
                </div>
            </div>
        </div>
        <div class="popup_window_angly popup_window_angly_left" style="top: 10px;"></div>
    </div>
</template>
<script>
export default {
  name: 'menuModal'
}
</script>
<style>

    .main_grid_cell_head * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .main_grid_row td {
        position: relative;
    }

    .main_grid_cell_content a:hover {
        text-decoration: underline;
    }

    .main_grid_cell * {
        -khtml-user-drag: none;
        -webkit-user-drag: none;
    }

    .kb_disk_object_name tr td {
        padding: 0 !important;
        border: none !important;
        max-width: 180px;
        text-overflow: ellipsis;
        overflow: hidden
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

    .menu_popup_item {
        position: relative;
    }

    .menu_popup_item_upload_file input {
        position: absolute;
        top: -100px;
        height: 100px
    }

    td {
        vertical-align: middle !important;
    }

    li {
        list-style-type: none;
    }

    .popup_window.popup_window_no_paddings, .popup_window.popup_window_no_paddings .popup_window_content {
        padding: 0;
    }

    .popup_window_show_animation_opacity {
        animation: popupWindowShowAnimationOpacity 400ms;
        animation-fill-mode: both;
    }

    .popup_window {
        background-color: #fff;
        box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
        padding: 10px;
        font: 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .menu_popup {
        padding: 8px 0;
    }

    .menu_popup .menu_popup_item {
        background-color: transparent;
        display: block;
        cursor: pointer;
        height: 36px;
        position: relative;
        text-decoration: none;
        outline: 0;
        white-space: nowrap;
        -webkit-transition: background-color .3s linear;
        transition: background-color .3s linear;
    }

    .popup_window_angly_left::before {
        left: 8px;
        top: 8px;
    }

    .popup_window_angly_left {
        display: block;
        left: -14px;
        top: 10px;
        height: 30px;
        width: 14px;
    }

    .popup_window_angly:before {
        background-color: #fff;
        -webkit-box-shadow: 0 0 21px rgba(83, 92, 105, .13);
        box-shadow: 0 0 21px rgba(83, 92, 105, .13);
        content: '';
        height: 15px;
        position: absolute;
        left: 9px;
        top: 16px;
        transform: rotate(45deg);
        transform-origin: 50% 50%;
        width: 15px;
    }

    .popup_window_angly {
        /*display: none;*/
        height: 22px;
        position: absolute;
        /*overflow: hidden;*/
        width: 33px;
    }

    td {
        vertical-align: middle !important;
    }
</style>
