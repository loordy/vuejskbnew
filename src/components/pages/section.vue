<template>
  <div>
    <ListitemView></ListitemView>
    <ListItemList></ListItemList>
    <emptyList/>
  </div>
</template>

<script>
import ListitemView from '../common/catalog/ListitemView'
import ListItemList from '../common/catalog/ListItemList'
import emptyList from '../common/catalog/EmptyList'
export default {
  name: 'mainpage',
  components: {ListitemView, ListItemList, emptyList},
  computed: {
    countSecEl () {
      return this.$store.getters.getCountAllSecEl(this.$route.params.id)
    }
  }
}
</script>
