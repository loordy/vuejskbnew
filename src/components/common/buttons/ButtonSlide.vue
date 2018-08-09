<template>

        <div class="notebook-list-title-toggle">
          <i class="far fa-bookmark"></i> Базы заний <span class="slide-toggle"><i class="fas fa-angle-up"></i></span>
        </div>

</template>
<script>
export default {
  name: 'ButtonSlide'
}
</script>
<style scoped>

    /* ----- notebook-list-item ---- */

    .notebook-list-title-toggle {
        display: inline-block;
        font-family: "ProximaNova-Semibold";
        font-size: 16px;
        color: rgba(32, 32, 33, 0.7);
        position: relative;
        display: inline-block;
        cursor: pointer;
        transition: all ease 0.3s;
        border-radius: 4px;
        border: 1px solid rgba(184, 184, 184, .44);
        padding: 0 8px;
        height: 28px;
        line-height: 28px;
        font-size: 15px;

    }

    .notebook-list-title-toggle > i{
      font-size: 14px;
      display: inline-block;
      padding: 3px 0px 3px 0px;
      line-height: 20px;
      margin-left: 0px;
      margin-right: 2px;
      -webkit-transition: all ease 0.3s;
      transition: all ease 0.3s;
      color: #9aa5ab;
    }

    .notebook-list-title-toggle:hover {
        border-color: #9aa5ab;
    }

    .slide-toggle {
        text-align: center;
        vertical-align: middle;
    }

</style>
