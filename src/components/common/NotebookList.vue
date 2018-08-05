<template>
    <div class="prev-notebook-list">
        <a href="#" class="notebook-list-item">
            <span class="delete-item"><i class="fas fa-times"></i></span>
            <div class="notebook-cover">
                <div class="notebook-skin">
                    <span>База знаний</span>
                </div>
            </div>
        </a>
        <a href="#" class="notebook-list-item">
          <div class="notebook-cover">
            <div class="notebook-skin">
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
        </a>
        <a href="#" class="notebook-list-item">
          <div class="notebook-cover">
            <div class="notebook-skin">
              <span>Lorem ipsum dolor.</span>
            </div>
          </div>
        </a>
        <a href="#" class="notebook-list-item">
          <div class="notebook-cover">
            <div class="notebook-skin">
              <span>База знаний</span>
            </div>
          </div>
        </a>
        <a href="#" class="notebook-list-item">
          <div class="notebook-cover">
            <div class="notebook-skin">
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
        </a>
        <a href="#" class="notebook-list-item">
          <div class="notebook-cover">
            <div class="notebook-skin">
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
        </a>
    </div>
</template>
<script>
    export default {
        name: 'NotebookList'
    }
</script>
<style scoped>
    @import './components/css/all.css';
    @import './components/css/fontawesome.css';
    @import './components/css/knowledgebase.css';

    /* ----- notebook-list-item ---- */
    .prev-notebook-list{
      display: flex;
      flex-wrap: wrap;
    }

    .notebook-list-item {
        position: relative;
        transition: .3s ease;
        border-radius: 5px 15px 15px 5px;
        transform-origin: left center 0px;
        display: inline-block;
        margin: 8px;
        height: 155px;
        width: 123px;
        display: block;
        color: #fff!important;
        text-decoration: none!important;
    }

    .notebook-list-item:hover{
      transform: translateY(-2px);
    }

    .notebook-list-item .delete-item{
      position: absolute;
      top: 9px;
      right: 7px;
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      color: #5f7073;
      font-size: 14px;
      z-index: 20;
    }

    .notebook-cover {
        background-color: #72b4cd;
        background-image: -webkit-linear-gradient(top, #87c9e2, #65a7c0);
        background-image: -moz-linear-gradient(top, #87c9e2, #65a7c0);
        background-image: -ms-linear-gradient(top, #87c9e2, #65a7c0);
        background-image: -o-linear-gradient(top, #87c9e2, #65a7c0);
        background-image: linear-gradient(to bottom, #87c9e2, #65a7c0);
        border-color: #99d1e6 #73afc6 #5f7073;
        text-shadow: 0 1px #5f7073;
        height: 155px;
        width: 125px;
        position: absolute;
        border-radius: 5px 15px 15px 5px;
        z-index: 10;
        transition: .5s linear;
        transform-style: preserve-3d;
        transform-origin: left center 0px;
        box-shadow: inset 0 0 0 1px #dbeaf2;
    }

    .notebook-list-item:nth-child(3n) .notebook-cover{
      background-color: #c7cbd0;
      background-image: -webkit-linear-gradient(top, #ced7de, #b1bcc6);
      background-image: -moz-linear-gradient(top, #ced7de, #b1bcc6);
      background-image: -ms-linear-gradient(top, #ced7de, #b1bcc6);
      background-image: -o-linear-gradient(top, #ced7de, #b1bcc6);
      background-image: linear-gradient(to bottom, #ced7de, #b1bcc6);
      border: 1px solid;
      border-color: #dee1e4 #c7c6c9 #acacb0;
      text-shadow: 0 1px #98a0a6;
      box-shadow: none;
    }

    .notebook-list-item:nth-child(2n + 1) .notebook-cover{
      background-color: #e19b12;
      background-image: -webkit-linear-gradient(top, #f3ac24, #d18a02);
      background-image: -moz-linear-gradient(top, #f3ac24, #d18a02);
      background-image: -ms-linear-gradient(top, #f3ac24, #d18a02);
      background-image: -o-linear-gradient(top, #f3ac24, #d18a02);
      background-image: linear-gradient(to bottom, #f3ac24, #d18a02);
      border-color: #f5b845 #d89412 #8a600f;
      text-shadow: 0 1px #b1780b;
    }

    .notebook-list-item:nth-child(4n + 1) .notebook-cover{
      background-color: #94ca4c;
      background-image: -webkit-linear-gradient(top, #a7d651, #71b443);
      background-image: -moz-linear-gradient(top, #a7d651, #71b443);
      background-image: -ms-linear-gradient(top, #a7d651, #71b443);
      background-image: -o-linear-gradient(top, #a7d651, #71b443);
      background-image: linear-gradient(to bottom, #a7d651, #71b443);
      border-color: #b9df74 #89c049 #719e43;
      text-shadow: 0 1px #6e9c3a;
    }


    .notebook-skin{
      height: 100%;
      width: 100%;
      padding: 20px 10px;
      padding-bottom: 30px;
      padding-left: 18px;
      display: flex;
      align-items: center;
      font-size: 22px;
      color: #fff;
      font-family: "ProximaNova-Semibold";
      line-height: 22px;
    }

    .notebook-skin{
      min-height: 100%;
      overflow: hidden;
    }

    /*
    .notebook-skin {
        height: 80px;

        background: #e8e8e0;

        padding: 10px;
        font-size: 14px;
        position: relative;
        z-index: 10;
        color: #222;
        text-align: left;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    */
    /*
    .notebook-skin:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 15px;
        left: 0;
        bottom: 15px;
        background: #bfddf1;
    }
    */

    .notebook-cover:before {
        content: "";
        position: absolute;
        width: 10px;
        height: calc(100% + 2px);
        top: -1px;
        z-index: 100;
        border-radius: 2px;
        left: 0px;
        transition: 2s ease;
        background: linear-gradient(to right, #9c2e2b 0%, #cc4b48 12%, #9c2e2b 25%, #cc4b48 37%, #9c2e2b 50%, #cc4b48 62%, #9c2e2b 75%, #cc4b48 87%, #9c2e2b 100%);
    }

</style>
