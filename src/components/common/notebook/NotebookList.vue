<template>
  <div class="prev-notebook-list-wrap">
    <div class="notebook-list-title"><div class="notebook-list-title-toggle">Базы заний <span class="slide-toggle"><i class="fas fa-angle-up"></i></span></div></div>
    <div class="prev-notebook-list">
      <notebookItem v-for="base in bases" :key="base.CODE" :base="base"/>
      <notebookAdd/>
    </div>
  </div>

</template>
<script>
import NotebookItem from './NotebookItem'
import NotebookAdd from './NotebookAdd'

export default {
  name: 'NotebookList',
  components: {NotebookAdd, NotebookItem},
  data () {
    return {
    }
  },
  computed: {
    bases () {
      return this.$store.getters.getBaseList
    }
  }
}
</script>
<style scoped>

  /* ----- notebook-list-item ---- */
  .prev-notebook-list {
    display: flex;
    flex-wrap: wrap;
  }

  .notebook-list-title{
    font-family: "ProximaNova-Semibold";
    font-size: 16px;
    color: rgba(32, 32, 33, 0.7);
    line-height: 1;
    position: relative;
    margin: 0;
    text-align: right;
    overflow: hidden;
  }

  .notebook-list-title-toggle{
    cursor: pointer;
    float: right;
    transition: all ease 0.3s;
    border-radius: 4px;
    border: 1px solid rgba(184, 184, 184, .44);
    padding: 0 8px;
    height: 28px;
    line-height: 26px;
    font-size: 15px;

  }

  .notebook-list-title-toggle:hover{
    border-color: #9aa5ab;
  }

  .slide-toggle{
    text-align: center;
    vertical-align: middle;
  }

</style>
