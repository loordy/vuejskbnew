<template>
<div>
  <modalAddNewBase v-if="currentModal.openModal === 'modalAddNewBase'" :modalData="currentModal.modalData" @close="close"/>
</div>
</template>

<script>
import ModalAddNewBase from './modals/ModalAddNewBase'
export default {
  name: 'bottom',
  data () {
    return {
      currentModal: this.$store.getters.getCurrentModal
    }
  },
  components: {
    ModalAddNewBase
  },
  methods: {
    close () {
      this.currentModal.openModal = ''
    }
  }
}
</script>

<style scoped>

</style>
