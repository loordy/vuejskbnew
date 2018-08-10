<template>
  <button class="notebook-list-title-toggle">
    <i class="kb-log"></i> <span>Базы заний</span> <span class="slide-toggle"><i
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
    display: inline-block;
    font-weight: 600;
    font-size: 20px;
    color: rgba(32, 32, 33, 0.7);
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.3s;
    padding: 0 8px;
    background-color: transparent;
    outline: none;
    border: 0;
  }

  .notebook-list-title-toggle > i.kb-log {
    font-size: 28px;
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 3px 0px 3px 0px;
    line-height: 20px;
    margin-left: 0px;
    margin-right: 2px;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    color: #56c1e4;
    vertical-align: middle;
    background-image: url('../../../assets/images/kb-logo.png');
    margin-right: 10px;
  }

  .notebook-list-title-toggle:hover {
    border-color: #9aa5ab;
  }

  .slide-toggle {
    text-align: center;
    font-size: 14px;
    margin-left: 4px;
  }

</style>
