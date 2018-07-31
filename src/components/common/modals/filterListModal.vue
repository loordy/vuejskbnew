<template>
  <div class="filter-list-modal">
      <div class="edit-modal-header">
          <div class="edit-modal-title">Фильтр и вид</div>
          <div class="close-modal" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </div>
      </div>

      <div class="edit-group m-b-0">
        <div class="edit-group-label">ВИД</div>
          <div class="ful-w-btn-group">
            <a href="#" class="active">Лента</a>
            <a href="#">Таблица</a>
          </div>
      </div>
      <i class="modal-angle top"></i>
  </div>

</template>
<script>

export default {
  name: 'filterListModal',
  data () {
    return {
      showSecMod: false,
      show: false
    }
  },
  components: {

  },
  methods: {

  }
}
</script>
<style scoped>
  .filter-list-modal{
    position: absolute;
    width: 285px;
    width: 285px;
    top: 40px;
    left: -242px;
    z-index: 110;
    background: #fff;
    padding: 24px;
    border: 1px solid rgba(0,0,0,.06);
    box-shadow: 0 3px 36px rgba(158,157,163,.54);
    margin-bottom: 14px;
    background-color: #fff;
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
    right: 0;
    top: 0;
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

  .modal-angle{
    height: 12px;
    background-color: #fff;
    width: 12px;
    position: absolute;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 70px;
  }

  .modal-angle.top{
    top: -6px;
    right: 20px;
  }

  .edit-group {
    margin-bottom: 20px;
  }

  .edit-group-label {
    color: #afbcc2;
    font-size: 12px;
    font-family: "ProximaNova-Light";
    line-height: 1;
    margin-bottom: 8px;
  }

  .ful-w-btn-group{
    display: flex;
  }

  .ful-w-btn-group a{
    display: block;
    width: 50%;
    color: #535b69;
    text-decoration: none!important;
    border: 1px solid #c6cdd3;
    height: 35px;
    line-height: 35px;
    text-align: center;
    transition: all ease 0.3s;
    font-family: "ProximaNova-Semibold";
    font-size: 14px;
  }
  .ful-w-btn-group a:first-child{
    border-radius: 2px 0px 0px 2px;
  }

  .ful-w-btn-group a:last-child{
    border-radius: 0px 2px 2px 0px;
  }

  .ful-w-btn-group a.active:hover,
  .ful-w-btn-group a.active{
    background-color: #2fc7f7;
    color: #fff;
    border-color: #2fc7f7;
  }

  .ful-w-btn-group a:hover{
    background-color: #cfd4d8;
  }

</style>
