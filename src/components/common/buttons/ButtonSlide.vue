<template>
  <button :class="[open ? 'notebook-list-title-toggle active' : 'notebook-list-title-toggle']">
    <i class="kb-log far fa-bookmark"></i> <span>Базы заний</span> <span class="slide-toggle"><i
    :class="[open ? 'fas fa-angle-up' : 'fas fa-angle-down']"></i></span>
  </button>
</template>
<script>
export default {
  name: 'ButtonSlide',
  props: {
    open: {default: false}
  }
}
</script>
<style scoped>

  /* ----- notebook-list-item ---- */

  .notebook-list-title-toggle {
    /* font-weight: 600; */
    font-size: 18px;
    color: #9aa5ab;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    padding: 0;
    background-color: transparent;
    outline: none;
    border: 0;
    padding: 2px 15px;
    border: 1px solid #9aa5ab;
    border-radius: 20px;
  }

  .notebook-list-title-toggle > i.kb-log {
    font-size: 17px;
    display: inline-block;
    width: 21px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0;
    margin-left: 0px;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    color: #9aa5ab;
    vertical-align: middle;
    /* background-image: url(../../../assets/images/kb-logo.png); */
    margin-right: 4px;
  }

  .notebook-list-title-toggle:hover {
    border-color: #4fabf8;
    color: #4fabf8;
  }

  .notebook-list-title-toggle.active {
    color: #4fabf8;
    border-color: #4fabf8;
  }

  .notebook-list-title-toggle:hover > i.kb-log,
  .notebook-list-title-toggle.active > i.kb-log{
    color: #4fabf8;
  }

  .slide-toggle {
    text-align: center;
    font-size: 12px;
    margin-left: 5px;
    padding-top: 3px;
  }

</style>
