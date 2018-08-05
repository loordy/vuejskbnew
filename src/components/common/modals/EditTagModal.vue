<template>
    <div class="tree-edit-modal edit-modal">
        <i class="modal-angle right"></i>

        <div class="edit-modal-wrap">
          <div class="edit-modal-header">
            <div class="edit-modal-title">Редактировать тега</div>

            <div class="close-modal" @click="$emit('close')">
              <i class="fas fa-times"></i>
            </div>

          </div>

          <div class="edit-modal-content">

            <div class="edit-group">
              <div class="edit-group-label">НАЗВАНИЕ РАЗДЕЛА</div>
              <input type="text" class="kb-input">
            </div>

            <div class="edit-group btn-group m-b-0">
              <button class="kb-btn green-btn">
                Сохранить
              </button>
            </div>

          </div>
        </div>

    </div>
</template>
<script>
export default {
  name: 'EditTagModal',
  props: {
    top: '10',
    left: '10'
  },
  methods: {
    closeModal () {
      this.iSshowModal = false
    }
  }
}
</script>
<style scoped>

    .category-item-add_btn {
        color: #9aa5ab;
        display: block;
        font-family: "ProximaNova-Light";
        font-size: 16px;
        text-decoration: none;
        line-height: 36px;
        padding: 0 16px;
        border-radius: 4px;
        position: relative;
    }

    .category-item-add_btn:hover {
        background-color: #f6f9fb;
    }

    .category-item-add_btn:hover .cat-item-in_icon {
        color: #3bc7ab;
    }

    .cat-item-in_icon {
        position: absolute;
        right: 15px;
        top: 0;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #9aa5ab;
        font-size: 12px;
    }

    .tag-item span {
        color: #556066;
        padding: 0 4px;
    }

    /*------modal css start----*/
    .edit-modal {
        width: 285px;
        z-index: 100;
        border: 1px solid rgba(0, 0, 0, .06);
        background-color: #fff;
      box-shadow: 0 7px 21px rgba(83,92,105,.12), 0 -1px 6px 0 rgba(83,92,105,.06);
        margin-bottom: 14px;
        box-sizing: border-box;
        position: absolute;
    }

    .edit-modal-wrap{
      padding: 24px;
      background-color: #fff;
      position: relative;
      z-index: 100;
    }

    .edit-modal-header {
        position: relative;
        padding-right: 30px;
    }

    .edit-modal-header .close-modal {
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      text-align: center;
      position: absolute;
      right: -10px;
      top: -10px;
      color: #c4c7cc;
      cursor: pointer;
    }

    .edit-modal-header .close-modal:hover{
      color: #556066;
    }

    .edit-modal-title {
        font-family: "ProximaNova-Semibold";
        font-size: 16px;
        color: #556066;
        margin-bottom: 25px;
    }

    .edit-group {
        margin-bottom: 20px;
    }

    .edit-group-label {
        color: #545c6a;
        font-size: 12px;
        line-height: 1;
        margin-bottom: 8px;
    }

    .kb-input {
        width: 100%;
        font-family: "ProximaNova-Regular";
        color: #556066;
        font-size: 14px;
        padding: 0 16px !important;
        margin: 0;
        border: none;
        display: inline-block;
        line-height: inherit;
        width: 100%;
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #e4e5e9;
        height: 35px;
        line-height: 35px;
    }

    .kb-input:hover {
        border-color: #c4c7cc;
    }

    .kb-input:focus {
        border-color: #56c1e4;
    }

    .edit-modal .modal-angle {
      height: 12px;
      background-color: #fff;
      width: 12px;
      position: absolute;
      transform: rotate(45deg);
      top: 70px;
    }

    .edit-modal .modal-angle.right {
      right: -6px;
    }

    .edit-modal .modal-angle.right:after{
      background-color: #fff;
      -webkit-box-shadow: 0 0 21px rgba(83,92,105,.13);
      box-shadow: 0 0 21px rgba(83,92,105,.13);
      content: '';
      height: 15px;
      position: absolute;
      left: 0px;
      top: 0px;
      transform: rotate(90deg);
      transform-origin: 50% 50%;
      width: 15px;
    }

    .radio-button-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .btn-group {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
    }

    .tree-edit-modal .category-item-add_btn {
        position: relative;
        margin-top: 35px;
    }

    .tree-edit-modal .category-item-add_btn:after {
        content: "";
        position: absolute;
        left: 0;
        top: -12px;
        right: 0;
        z-index: 2;
        height: 1px;
        background-color: #f5f5f7;
    }

    /* ------modal css end---- */
</style>
