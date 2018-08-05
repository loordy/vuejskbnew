<template>
    <div class="content-edit-btn-content">
        <i class="modal-angle top"></i>
        <div class="content-edit-btn-content-wrap">
            <ul class="content-edit_list">
                <li>
                    <a href="#"> <i class="fas fa-pencil-alt"></i> <span>Редактировать</span></a>
                </li>
                <li>
                    <a href="#"> <i class="fas fa-lock"></i> <span>Закрепить запись</span></a>
                </li>
                <li>
                    <a href="#"> <i class="far fa-star"></i> <span>Добавить в избранное</span></a>
                </li>
                <li>
                    <a href="#"> <i class="far fa-trash-alt"></i> <span>Удалить в корзину</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'modal_artic_edit',
  props: {
    data: {}
  }
}
</script>
<style scoped>

    .kb_disk_container td {
        vertical-align: top
    }

    @keyframes disk_folder_list_no_data_inner_show {
        from {
            opacity: 0
        }
        to {
            opacity: 1
        }
    }

    .kb_disk_interface_filelist td {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        vertical-align: middle !important
    }

    @keyframes disk_grid_tile_item_checkbox {
        from {
            display: none
        }
        to {
            display: block
        }
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

    td {
        vertical-align: middle !important;
    }

    .ui_icon_file_folder-el i {
        background-position: 0 calc(100% / var(--icon-file-col) * 1);
    }
</style>
