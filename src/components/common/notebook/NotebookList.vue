<template>
  <transition name="slide-fade">
    <div class="prev-notebook-list-wrap">

      <div class="prev-notebook-list">
        <notebookItem v-for="base in bases" :key="base.CODE" :base="base"/>
        <notebookAdd/>
      </div>
    </div>
  </transition>
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
  .prev-notebook-list-wrap{
    margin-bottom: 10px;
    margin-left: -8px;
    margin-right: -8px;
    transition: all ease 0.3s;
  }
  .prev-notebook-list {
    display: flex;
    flex-wrap: wrap;
  }

  /* Анимации появления и исчезновения могут иметь */
  /* различные продолжительности и динамику.       */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.7, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }

</style>
