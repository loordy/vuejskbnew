<template>
  <div>
    <emptyList v-if="view"/>
    <ListitemView v-else-if="getviewType.viewType === 'view'"></ListitemView>
    <ListItemList v-else></ListItemList>
  </div>
</template>

<script>
import ListitemView from '../common/catalog/ListitemView'
import ListItemList from '../common/catalog/ListItemList'
import emptyList from '../common/catalog/EmptyList'
import { mapGetters } from 'vuex'
export default {
  name: 'mainpage',
  data () {
    return {
      // TODO = изменить настройки пустого списка
      view: false
    }
  },
  components: {ListitemView, ListItemList, emptyList},
  computed: {
    countSecEl () {
      return this.$store.getters.getCountAllSecEl(this.$route.params.id)
    },
    ...mapGetters(['getviewType'])
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
    }
  }
}
</script>
