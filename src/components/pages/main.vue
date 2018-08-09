<template>
  <div v-if="show.length > 0">
  <NotebookList />
 <detailItem></detailItem>
  </div>
</template>

<script>
import detailItem from './detailItem'
import NotebookList from '../common/notebook/NotebookList'
export default {
  name: 'mainpage',
  components: {
    detailItem,
    NotebookList
  },
  data () {
    return {
      // show: this.$store.getters.getElementsListACTIVE()
    }
  },
  computed: {
    show () {
      return this.$store.getters.getElementsListACTIVE('Y')
    }
  }
}
</script>
