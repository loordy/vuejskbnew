<template>
<div>
  <modalAddNewBase v-if="currentModal.openModal === 'modalAddNewBase'" :modalData="currentModal.modalData" @close="close"/>
  <EditCatModal v-else-if="currentModal.openModal === 'EditCatModal'" :modalData="currentModal.modalData" @close="close"/>
  <modalAll v-else-if="currentModal.openModal === 'modalAll'" :modalData="currentModal.modalData" @close="close"/>
  <filterListModal v-else-if="currentModal.openModal === 'filterListModal'" :modalData="currentModal.modalData" @close="close"/>

</div>
</template>

<script>
import ModalAddNewBase from './modals/ModalAddNewBase'
import modalAll from './modals/modalAll'
import EditCatModal from './modals/EditCatModal'
import filterListModal from './modals/filterListModal'
export default {
  name: 'bottom',
  data () {
    return {
      currentModal: this.$store.getters.getCurrentModal
    }
  },
  components: {
    ModalAddNewBase,
    EditCatModal,
    modalAll,
    filterListModal
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
