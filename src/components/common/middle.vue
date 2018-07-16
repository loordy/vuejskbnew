<template>
  <table style="width:100%">
  <tr class="kb-layout-inner-inner-top-row">
    <td class="kb-layout-inner-inner-cont">
      <div class="page-header">
        <div class="pagetitle-below">
          <div class="disk-folder-list-toolbar" id="disk-folder-list-toolbar">
            <div class="disk-breadcrumbs js-disk-breadcrumbs " id="breadcrumbs_f6cbe" style="opacity: 1;">
              <div class="disk-breadcrumbs-item js-disk-breadcrumbs-folder">
                <a class="disk-breadcrumbs-item-title js-disk-breadcrumbs-folder-link" href="">База знаний</a>
                <span class="disk-breadcrumbs-item-arrow js-disk-breadcrumbs-arrow"></span>
              </div>
            </div>
            <div class="disk-folder-list-config">
              <div class="disk-folder-list-sorting">
                <span class="disk-folder-list-sorting-text">По дате изменения</span>
              </div>
              <div class="disk-folder-list-view">
                <a  class="disk-folder-list-view-item disk-folder-list-view-item-lines "></a>
                <a  class="disk-folder-list-view-item disk-folder-list-view-item-grid js-disk-change-view disk-folder-list-view-item-active"></a>
                <a  class="disk-folder-list-view-item disk-folder-list-view-item-grid-tile js-disk-change-view "></a>
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
export default {
  name: 'middle'
}
</script>

<style scoped>
  #live-search {
    background:#f5f5f5;
    padding:25px 0;
    border-top:1px solid #e8e8e8;
    border-bottom:1px solid #e8e8e8;
  }
  #live-search #searchform {
    width:100%;
    background:#fff;
    border:1px solid #d1d1d1;
    position:relative;
    -moz-border-radius:99px;
    -webkit-border-radius:99px;
    border-radius:99px;
  }
  #live-search #s {
    float: left;
    width: 80%;
    background:none;
    color:#595959;
    font-size:16px;
    padding:20px 25px;
    border:none;
    box-shadow:none;
    position:relative;
    outline: 0;
  }
  #live-search i.live-search-loading {
    font-size: 24px;
    position:absolute;
    right: 160px;
    top: 18px;
    display:none;
  }
  #live-search #s.live-search-loading + i.live-search-loading {
    display:inline-block;
  }
  #live-search #searchsubmit {
    position:absolute;
    right:0;
    top:0;
    color:#fff;
    margin:12px 25px 0 0;
    padding: 10px 18px;
    text-transform:uppercase;
    border:none;
    -moz-border-radius:99px;
    -webkit-border-radius:99px;
    border-radius:99px;
  }
  #live-search #searchsubmit:hover {
    background-color:#4A4A4A;
  }
  #live-search #searchsubmit i {
    margin:0 5px 0 0;
  }
  #search-wrap {
    position:relative;
  }
  #search-result {
    position:absolute;
    background:#fff;
    list-style:none;
    min-width: 260px;
    font-size:13px;
    top:20px;
    left: 5px;
    margin: 0;
    padding: 10px 5px;
    border:1px solid #d1d1d1;
    box-shadow:1px 1px 2px rgba(0,0,0,0.1);
    z-index:9999;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    border-radius:5px;
  }
  #search-result:before {
    border-color: transparent transparent #ccc;
    border-style: solid;
    border-width: 12px;
    content: "";
    height: 0;
    left: 40px;
    position: absolute;
    top: -25px;
    width: 0;
  }
  #search-result:after {
    border-color: transparent transparent #fff;
    border-style: solid;
    border-width: 12px;
    content: "";
    height: 0;
    left: 40px;
    position: absolute;
    top: -24px;
    width: 0;
    z-index: 999;
  }
  #search-result li {
    margin:0;
  }
  #search-result li.standard a:before,
  #search-result li.video a:before,
  #search-result li.faq a:before {
    display: inline-block;
    font-family: FontAwesome;
    font-weight: normal;
    font-size: 16px;
    margin:0 10px 0 0;
    position: absolute;
    left: 10px;
  }
  #search-result li.standard a:before {
    content:"\f0f6";
  }
  #search-result li.video a:before {
    content:"\f008";
    font-size: 12px;
  }
  #search-result li.faq a:before {
    content:"\f059";
  }
  #search-result li:last-child {
    margin:0;
  }
  #search-result a {
    display:block;
    color:#444;
    line-height: 1.4;
    padding: 5px 10px 5px 32px;
    position: relative;}
  #search-result a:hover {
    text-decoration:none;
    background:#F5F5F5;
    -moz-border-radius:99px;
    -webkit-border-radius:99px;
    border-radius:99px;
  }
  #search-result img {
    vertical-align:middle;
    margin:0 10px 0 0;
  }
  #search-result .nothing-here {
    padding:0 5px;
  }
  #jquery-live-search {
    overflow:visible  !important;
  }
</style>
