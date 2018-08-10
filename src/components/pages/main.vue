<template>
  <div>
  <detailItem v-if="show.length !== 0"></detailItem>
  </div>
</template>

<script>
import detailItem from './detailItem'
export default {
  name: 'mainpage',
  components: {
    detailItem
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
