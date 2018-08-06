<template>
  <div>
    <div class="content-edit-btn">
      <i class="fas fa-ellipsis-h"></i>
      <div class="content-edit-btn-content">
        <i class="modal-angle top"></i>
        <div class="content-edit-btn-content-wrap">
          <ul class="content-edit_list">
            <li>
              <div @click="openModal" class="content-edit_list-item"><i class="fas fa-pencil-alt"></i> <span>Редактировать</span>
              </div>
            </li>
            <li>
              <div class="content-edit_list-item"><i class="fas fa-lock"></i> <span>Закрепить запись</span></div>
            </li>
            <li>
              <div class="content-edit_list-item"><i class="far fa-star"></i> <span>Добавить в избранное</span></div>
            </li>
            <li>
              <div class="content-edit_list-item"><i class="far fa-trash-alt"></i> <span>Удалить в корзину</span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contentEditBtn',
  props: {
    data: {}
  },
  methods: {
    openModal () {
      this.$store.commit('openModal',
        {
          openModal: 'modalAll',
          modalData: {
            element: this.data
          }
        })
    }
  }
}
</script>
<style scoped>
  .article-cover img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .article .article-content img {
    max-width: 100%;
  }

  .content-edit-btn {
    width: 40px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    color: #9aa5ab;
    cursor: pointer;
    transition: color ease 0.3s;
  }

  .content-title .content-edit-btn {
    position: absolute;
    right: 10px;
    top: 0px;
  }

  .content-title h3 {
    font-size: 26px;
    color: #555;
    line-height: 30px;
    font-family: "ProximaNova-Bold";
    margin: 0;
  }

  .content-title a {
    color: #555;
    text-decoration: none !important;
    transition: color ease 0.3s;
  }

  .content-title a:hover {
    color: #2c77b1;
  }

  .article .content-text-wrap h1 {
    font-size: 26px;
    line-height: 30px;
  }

  .article .content-text-wrap h2 {
    font-size: 24px;
    line-height: 28px;
  }

  .article .content-text-wrap h3 {
    font-size: 22px;
    line-height: 26px;
  }

  .article .content-text-wrap h4 {
    font-size: 20px;
    line-height: 24px;
  }

  .article .content-text-wrap h5 {
    font-size: 18px;
    line-height: 22px;
  }

  .article .content-text-wrap h6 {
    font-size: 16px;
    line-height: 20px;
  }

  .article .content-text-wrap h1,
  .article .content-text-wrap h2,
  .article .content-text-wrap h3,
  .article .content-text-wrap h4,
  .article .content-text-wrap h5,
  .article .content-text-wrap h6 {
    color: #333;
    font-family: "ProximaNova-Bold";
    margin-top: 0;
    margin-bottom: 16px;
    text-rendering: optimizeLegibility;
    letter-spacing: -.5px;
  }

  .content-text-wrap a:hover {
    text-decoration: none;
  }

  .article .content-text-wrap ol {
    list-style-position: inside;
    counter-reset: item;
    list-style-type: none;
  }

  .article .content-text-wrap ol li:before {
    content: counter(item) ". ";
    left: 0;
    top: 0;
    font-weight: 700;
    counter-increment: item;
    position: absolute;
    z-index: 1;
  }

  .article .content-text-wrap ol,
  .article .content-text-wrap ul {
    padding-left: 0;
  }

  .article .content-text-wrap ol li,
  .article .content-text-wrap ul li {
    position: relative;
    padding-left: 26px;
    margin-bottom: 7px;
  }

  .article .content-text-wrap ul {
    padding-left: 20px;
  }

  .article .content-text-wrap ul li {
    padding-left: 7px;
  }

  .article .content-text-wrap table {
    width: 100%;
    border-collapse: collapse;
    empty-cells: show;
    margin-bottom: 16px;
  }

  .article .content-text-wrap table td,
  .article .content-text-wrap table th {
    border: 1px solid #eee;
    padding: 16px 16px 15px;
    font-size: 16px;
  }

  .article .content-text-wrap blockquote {
    position: relative;
    color: #333;
    font-size: 18px;
    line-height: 27px;
    font-family: "ProximaNova-RegularIt";
    padding-left: 16px;
    border-left: 1px solid rgba(0, 0, 0, .1);
    margin-left: 25px;
  }

  .article .content-text-wrap strong,
  .article .content-text-wrap b {
    font-family: "ProximaNova-Bold";
    letter-spacing: -.5px;
    font-weight: normal;
  }

  .empty-articles img {
    display: block;
    max-width: 120px;
    margin: 50px auto;
    opacity: 0.3;
  }

  /* ------ content edit drop css ---- */
  .content-edit-btn:hover .content-edit-btn-content {
    display: block;
  }

  .content-edit-btn-content {
    position: absolute;
    width: 210px;
    background-color: #fff;
    top: 26px;
    right: -7px;
    border: 1px solid rgba(0, 0, 0, .06);
    box-shadow: 0 7px 21px rgba(83, 92, 105, .12), 0 -1px 6px 0 rgba(83, 92, 105, .06);
    background-color: #fff;
    z-index: 100;
    display: none;
  }

  .content-edit-btn-content-wrap {
    background-color: #fff;
    padding: 10px 8px;
    position: relative;
    z-index: 100;
  }

  .content-edit_list {
    padding: 0;
    list-style: none;
    margin: 0;
  }

  .content-edit-btn-content .modal-angle.top {
    top: -6px;
    right: 20px;
    height: 12px;
    background-color: #fff;
    width: 12px;
    position: absolute;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .content-edit-btn-content .modal-angle.top:after {
    content: "";
    background-color: #fff;
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

  .content-edit_list li {
    display: block;
    width: 100%;
    list-style: none;
  }

  .content-edit_list li .content-edit_list-item {
    display: block;
    text-decoration: none !important;
    color: #979797;
    font-size: 14px;
    position: relative;
    text-align: left;
    padding-left: 35px;
    height: 32px;
    line-height: 32px;
    border-radius: 2px;

  }

  .content-edit_list li .content-edit_list-item span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    display: inline-block;
  }

  .content-edit_list > li > .content-edit_list-item i {
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #9aa5ab;
  }

  .content-edit_list li .content-edit_list-item:hover {
    background-color: #f6f9fb;
    color: #556066;
  }

  .content-edit_list li .content-edit_list-item:hover i {
    color: #556066;
  }

  /* ------ content edit drop css end---- *

  /* -------grid list css start------ */

  .visual-edit input[type="checkbox"] {
    margin-top: 2px;
    cursor: pointer;
  }

  .visual-artc-img img {
    max-width: 100%;

  }

  .visual-text_title a {
    color: #556066;
    text-decoration: none !important;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
    white-space: nowrap;
  }

  /* -------grid list css end------ */

</style>
