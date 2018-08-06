<template>
<div>
  <modalAddNewBase v-if="currentModal.openModal === 'modalAddNewBase'" :modalData="currentModal.modalData" @close="close"/>
  <EditCatModal v-else-if="currentModal.openModal === 'EditCatModal'" :modalData="currentModal.modalData" @close="close"/>
  <modalAll v-else-if="currentModal.openModal === 'modalAll'" :modalData="currentModal.modalData" @close="close"/>
</div>
</template>

<script>
import ModalAddNewBase from './modals/ModalAddNewBase'
import modalAll from './modals/modalAll'
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
    EditCatModal,
    modalAll
  },
  methods: {
    close () {
      this.currentModal.openModal = ''
    }
  },
  mounted () {
    this.$store.watch(this.$store.getters.getElementsList, n => {
      console.log('watched: ', n)
    })
  }
}
</script>

<style scoped>

</style>
