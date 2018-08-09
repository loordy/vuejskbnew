<template>
  <div class="prev-notebook-list-wrap">

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

</style>
