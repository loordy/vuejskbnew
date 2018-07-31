<template>
  <div class="header-line">

    <div class="top-tags-line">
      <span class="tag-item">
          <span class="icon-list"><i class="fa fa-home"></i></span>
          <span>Домой</span>
          <span class="icon-delete"><i class="fas fa-times"></i></span>
      </span>

      <span class="tag-item">
          <span class="icon-list"><i class="fas fa-list-ul"></i></span>
          <span>брендинг</span>
          <span class="icon-delete"><i class="fas fa-times"></i></span>
      </span>

      <span class="tag-item">
          <span>инструкции</span>
          <span class="icon-delete"><i class="fas fa-times"></i></span>
      </span>

      <span class="tag-item">
          <span>копирайтинг</span>
          <span class="icon-delete"><i class="fas fa-times"></i></span>
      </span>

      <span class="tag-item">
          <span>продажи b2b</span>
          <span class="icon-delete"><i class="fas fa-times"></i></span>
      </span>

      <span class="tag-item">
          <span>творчество</span>
          <span class="icon-delete"><i class="fas fa-times"></i></span>
      </span>

    </div>

    <div class="header-line-filter">

      <div class="header-filter-btn"  @click="filterListModalMethod" :class="{active:filterListModal}">
          <i class="fas fa-filter"></i>
      </div>

      <!-- modal -->
      <filterListModal v-if="filterListModal"  @close="filterListModal= false"/>
      <!-- modal end-->

    </div>




    <!-- Grid edit line
    <div class="header-line_edit">

        <div class="article-select-all">
          <div class="select-check">
            <input type="checkbox">
          </div>
          <div class="select-num">
            1 из 10
          </div>
        </div>

      <div class="line-edit-item">
        <i class="far fa-star"></i>
        <span>В избранное</span>
      </div>

      <div class="line-edit-item">
        <i class="far fa-star"></i>
        <span>Убрать из избранного</span>
      </div>

      <div class="line-edit-item add-trash">
        <i class="far fa-trash-alt"></i>
        <span>Удалить</span>
      </div>

    </div>
    -->

  </div>
</template>

<script>
import filterListModal from "./modals/filterListModal";
export default {
  components: {
    filterListModal,
  },
  name: 'middle',
  data () {
    return {
      activeClass: 'disk_folder_list_view_item_active',
      grid: 'disk_folder_list_view_item disk_folder_list_view_item_grid',
      list: 'disk_folder_list_view_item disk_folder_list_view_item_lines',
      gridtile: 'disk_folder_list_view_item disk_folder_list_view_item_grid_tile',
      filterListModal: false
    }
  },
  methods: {
    viewChange (type) {
      this.$store.commit('setView', type)
    },

    filterListModalMethod (event) {
      this.filterListModal = !this.filterListModal
      console.log(event)
      console.log(event.currentTarget)
    },
  }

}
</script>

<style>
  .tag-item{
    display: inline-block;
    margin: 0 0 4px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid rgba(184,184,184,.44);
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 24px;
    text-align: center;
    transition: border-color .2s ease;
    font-size:  13px;
    font-family: "ProximaNova-Regular";
    padding: 0 8px;
    text-decoration: none!important;
    vertical-align: middle;
  }

  .tag-item:hover{
    border-color: #9aa5ab;
  }

  .tag-item span{
    color:rgba(32, 32, 33, 0.7);
    padding: 0 4px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 23px;
    vertical-align: middle;
    display: inline-block;
  }



  .tag-item .icon-list{
    font-size: 14px;
    display: inline-block;
    padding: 3px 0px 3px 0px;
    line-height: 20px;
    margin-left:  0px;
    margin-right: 2px;
    transition: all ease 0.3s;
    color: #9aa5ab;
  }

  .tag-item .icon-delete{
    font-size: 12px;
    display: inline-block;
    padding: 4px 0px 1px 0px;
    line-height: 20px;
    margin-left:  5px;
    transition: all ease 0.3s;
    color: #c4c7cc;
  }

  .tag-item .icon-delete:hover{
    color: #f45e5e;
  }

  .top-tags-line .tag-item{
    margin-bottom:  4px;
  }

  .header-line{
    position: relative;
    padding-right:  50px;
    margin-bottom:  10px;
  }

  .header-line .header-line-filter{
    position: absolute;
    right: 0;
    top: 0;
  }

  .header-filter-btn{
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    color: #717a89;
    cursor: pointer;
    transition: color ease 0.3s;
  }

  .header-filter-btn.active,
  .header-filter-btn:hover{
    color: #4fabf8;
  }

  .header-line_edit{
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding-left: 18px;
    flex-wrap: wrap;
  }

  .header-line_edit .select-check{
    padding: 5px;
    cursor: pointer;
  }

  .select-check input[type="checkbox"]{
    cursor: pointer;
  }

  .header-line_edit .select-num{
    color: #979797;
    font-size: 14px;
  }

  .article-select-all{
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .header-line_edit .line-edit-item{
    margin:  0 10px;
    color: #979797;
    text-decoration: none!important;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    transition: color ease 0.3s;
  }

  .header-line_edit .line-edit-item:hover{
    color: #62717b;
  }

  .header-line_edit .line-edit-item i{
    margin-right: 5px;
    color: #e9a93f;
    font-size: 16px;
  }

  .header-line_edit .line-edit-item.add-trash i{
    color: #f76b64;
  }
</style>
