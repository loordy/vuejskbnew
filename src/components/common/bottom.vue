<template>
<div>
  <modalAddNewBase v-if="currentModal.openModal === 'modalAddNewBase'" :modalData="currentModal.modalData" @close="close"/>
  <EditCatModal v-else-if="currentModal.openModal === 'EditCatModal'" :modalData="currentModal.modalData" @close="close"/>
</div>
</template>

<script>
import ModalAddNewBase from './modals/ModalAddNewBase'
import EditCatModal from './modals/EditCatModal'
export default {
  name: 'bottom',
  data () {
    return {
      currentModal: this.$store.getters.getCurrentModal
    }
  },
  components: {
    ModalAddNewBase,
    EditCatModal
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
