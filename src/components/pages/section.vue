<template>
  <div>
    <!--<empty v-if="countSecEl == 0"></empty>-->
    <!--v-else-if="this.$store.state.settings.viewType === 'list'"-->
    <ListitemView></ListitemView>
    <ListItemList></ListItemList>
  </div>
</template>

<script>
import ListitemView from '../common/catalog/ListitemView'
import ListItemList from '../common/catalog/ListItemList'
import empty from '../common/catalog/empty'
export default {
  name: 'mainpage',
  components: {ListitemView, ListItemList, empty},
  computed: {
    countSecEl () {
      return this.$store.getters.getCountAllSecEl(this.$route.params.id)
    }
  }
}
</script>
