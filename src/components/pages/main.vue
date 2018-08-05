<template>
  <div>
  <NotebookList />
 <detailItem></detailItem>
  </div>
</template>

<script>
import detailItem from './detailItem'
import NotebookList from '../common/NotebookList'
export default {
  name: 'mainpage',
  components: {
    detailItem,
    NotebookList
  }
}
</script>
