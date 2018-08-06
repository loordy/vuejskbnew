<template>
  <div id="live-search">
    <div class="ht-container">
      <div id="search-wrap">
        <form role="search" method="get" id="searchform" class="clearfix" action="">
          <input type="text" onfocus="if (this.value == 'Have a question? Ask or enter a search term.') {this.value = '';}" onblur="if (this.value == '')  {this.value = 'Have a question? Ask or enter a search term.';}" value="Have a question? Ask or enter a search term." name="s" id="s" autocapitalize="off" autocorrect="off" autocomplete="off">
          <i class="live-search-loading fa fa-spinner fa-spin"></i> <button type="submit" id="searchsubmit"> <i class="fa fa-search"></i>
          <span>Search</span> </button>
        </form>
      </div>
    </div>
  </div>
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
