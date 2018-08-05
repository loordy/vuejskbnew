<template>
  <div class="add-notebook-modal edit-modal">
    <div class="edit-modal-wrap">
      <div class="edit-modal-container">
        <div class="edit-modal-header">
          <div class="edit-modal-title">Добавить Базу знаний</div>

          <div class="close-modal" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </div>
          <div class="edit-modal-content">

            <div class="edit-group">
              <div class="edit-group-label">НАЗВАНИЕ БАЗЫ ЗНАНИЙ</div>
              <input v-model="NAME" type="text" class="kb-input">
            </div>

            <div class="edit-group" style="display:none">
              <div class="edit-group-label" >ДОСТУП К БАЗЕ ЗНАНИЙ</div>
              <div class="radio-button-row">

                <div class="radio-button-label">
                  <input type="radio" class="radio" id="radio1" name="list"/>
                  <label for="radio1">Всем</label>
                </div>

                <div class="radio-button-label">
                  <input type="radio" class="radio" id="radio2" name="list"/>
                  <label for="radio2">Мне</label>
                </div>

                <div class="radio-button-label">
                  <input type="radio" class="radio" id="radio3" name="list"/>
                  <label for="radio3">Список</label>
                </div>

              </div>
            </div>

            <div class="edit-group text-right m-b-0">
              <button class="kb-btn green-btn" @click="addNewBase">
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modalAddNewBase',
  data () {
    return {
      NAME: ''
    }
  },
  methods: {
    addNewBase () {
      if (this.NAME) {
        this.$store.dispatch('addNewBase', {NAME: this.NAME})
        this.$emit('close')
      }
    }
  }
}
</script>
<style scoped>

  .edit-modal {
    width: 285px;
    z-index: 100;
    border: 1px solid rgba(0, 0, 0, .06);
    background-color: #fff;
    box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
    margin-bottom: 14px;
    box-sizing: border-box;
  }

  .add-notebook-modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .edit-modal .edit-modal-wrap {
    display: table-cell;
    vertical-align: middle;
  }

  .edit-modal-container {
    width: 350px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
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

  .edit-modal-header .close-modal:hover {
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

  .edit-modal .modal-angle.right:after {
    background-color: #fff;
    -webkit-box-shadow: 0 0 21px rgba(83, 92, 105, .13);
    box-shadow: 0 0 21px rgba(83, 92, 105, .13);
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

  .category-item-add_btn:hover {
    background-color: #ebf1f4;
  }

</style>
