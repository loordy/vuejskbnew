<template>
  <div class="tree-edit-modal edit-modal" :style="'top:'+ modalData.top +';'">
    <i class="modal-angle right"></i>
    <div class="edit-modal-wrap">
      <div class="edit-modal-header">
        <div class="edit-modal-title">Редактировать раздел</div>

        <div class="close-modal" @click="close">
          <i class="fas fa-times"></i>
        </div>

      </div>

      <div class="edit-modal-content">

        <div class="edit-group">
          <div class="edit-group-label">НАЗВАНИЕ ЭЛЕМЕНТА</div>
          <input type="text" class="kb-input" v-model="modalData.element.NAME">
        </div>

        <div class="edit-group">
          <div class="edit-group-label">РОДИТЕЛЬСКИЙ РАЗДЕЛ</div>
          <div class="select-input">
            <input type="text" class="kb-input" v-model="modalData.element.SECTION">
            <div class="select-input-angle">
              <i class="fas fa-angle-down"></i>
            </div>
          </div>

        </div>

        <div class="inner-cat-list">

          <div class="inner-cat-list-search">
            <div class="inner-cat-list-search-wrap">
              <input type="text" placeholder="Поиск по разделам...">
              <button>
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div class="inner-cat-list-content">
              <ul class="inner-cat-list-list">
                  <li class="inner-cat-list-list-item">
                      <div class="inner-cat-list-list-item_link"><span>Родительский раздел</span></div>
                      <ul class="inner-cat-list-list">
                        <li class="inner-cat-list-list-item">
                            <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                        </li>
                        <li class="inner-cat-list-list-item">
                          <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                        </li>
                        <li class="inner-cat-list-list-item">
                          <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                          <ul class="inner-cat-list-list">
                            <li class="inner-cat-list-list-item">
                              <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                            </li>
                            <li class="inner-cat-list-list-item">
                              <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                            </li>
                            <li class="inner-cat-list-list-item">
                              <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                  </li>
                  <li class="inner-cat-list-list-item">
                    <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                  </li>
                  <li class="inner-cat-list-list-item">
                    <div class="inner-cat-list-list-item_link"><span>Подраздел</span></div>
                  </li>
              </ul>
          </div>
        </div>

        <div class="edit-group" style="display:none">
          <div class="edit-group-label">ДОСТУП К РАЗДЕЛУ</div>
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

        <div class="edit-group btn-group">
          <button class="kb-btn red-btn" @click="deleteElement">
            Удалить
          </button>
          <button class="kb-btn green-btn" @click="updateElement">
            Сохранить
          </button>
        </div>

        <a href="#" class="category-item-add_btn">
          Новый элемент
          <span class="cat-item-in_icon">
                  <i class="fas fa-plus"></i>
                </span>
        </a>

      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'editCatModal',
  props: {
    modalData: {}
  },
  methods: {
    deleteElement () {

    },
    updateElement () {
      this.$emit('close')
    },
    close () {
      Object.assign(this.modalData.element, this._beforeEditingCache)
      this._beforeEditingCache = null
      this.$emit('close')
    }
  },
  mounted () {
    this._beforeEditingCache = Object.assign({}, this.modalData.element)
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
    color: #36b5df;
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
    box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
    margin-bottom: 14px;
    box-sizing: border-box;
    position: absolute;
    left: calc(100% - 550px)
  }

  .edit-modal .edit-modal-wrap {
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

  /* ------modal css end---- */

  .inner-cat-list-search{
    padding: 10px 15px;
    border-bottom: 1px solid #f5f5f7;
  }

  .inner-cat-list-search-wrap{
    position: relative;
  }

  .inner-cat-list-search-wrap input{
    height: 30px;
    width: 100%;
    padding-right: 40px;
    line-height: 30px;
    border: 0;
    outline: none;
  }

  .inner-cat-list-search-wrap input::placeholder{
    font-size: 14px;
  }

  .inner-cat-list-search-wrap button{
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    color: #bfc0c1;
    transition: color ease 0.3s;
    cursor: pointer;
    background-color: transparent!important;
    border: 0!important;
    outline: none;
  }

  .inner-cat-list-search-wrap button:hover{
    color: #556066;
  }

  .inner-cat-list{
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 5px;
    box-shadow: 0 3px 36px rgba(158,157,163,.54);
    margin-bottom: 10px;
  }

  .inner-cat-list-list{
    list-style: none;
    padding-left: 0;
    margin: 0px;
  }

  .inner-cat-list-content{
    padding: 10px 5px;
  }

  .inner-cat-list-list{
    overflow: hidden;
  }

  .inner-cat-list-list-item .inner-cat-list-list-item_link{
    color: #979797;
    font-size: 14px;
    display: block;
    padding: 8px;
    cursor: pointer;
    position: relative;
    font-family: "ProximaNova-Regular";
  }

  .inner-cat-list-list-item > .inner-cat-list-list-item_link:hover{
    background-color: #f6f9fb;
    color: #333;
  }

  .inner-cat-list-list-item > .inner-cat-list-list-item_link:hover:before{
    content: "";
    position: absolute;
    left: -100%;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 246px;
    min-width: 246px;
    background-color: #f6f9fb;
    z-index: -1;
  }

  .inner-cat-list-list .inner-cat-list-list{
    padding-left: 15px;
    overflow: visible;
  }

  .inner-cat-list-list-item_link span{
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .select-input{
    position: relative;
  }

  .select-input input{
    padding-right: 35px!important;
    cursor: pointer;
  }

  .select-input .select-input-angle{
    width: 35px;
    height: 35px;
    line-height: 38px;
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 0;
    color: #bfc0c1;
    text-align: center;
  }

</style>
