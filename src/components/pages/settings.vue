<template>
  <div>
    <button @click="istalentitybdmicros">instal micros bd</button>
    <button @click="istalentitysettings">setbases</button>
    <button @click="istalentityfavor">3</button>
    <button @click="istalentitybdmicroskbbases">4</button>
    <button @click="addfirstbse">5</button>
    <button @click="settingcurview">6</button>
    <button @click="settingscurentyt">7</button>
    <button @click="setentity">8</button>
    <button @click="setbases">9</button>
    <button @click="setsettings">10</button>
    <button @click="setUsers">11</button>
    <button @click="setElem">12</button>
    <button @click="consoling">store</button>
</div>
</template>

<script>
export default {
  name: 'settings',
  methods: {
    istalentitybdmicros () {
      this.$store.dispatch('installEntity', {
        CODE: 'md_knowledge1',
        NAME: 'бд_микрос'
      })
    },
    istalentitysettings () {
      this.$store.dispatch('installEntity', {
        CODE: 'md_kb_settings',
        NAME: 'бд_микрос_настройки'
      })
    },
    istalentityfavor () {
      this.$store.dispatch('installEntity', {
        CODE: 'md_kb_favorites',
        NAME: 'бд_микрос_фоворы'
      })
    },
    istalentitybdmicroskbbases () {
      this.$store.dispatch('installEntity', {
        CODE: 'md_kb_bases',
        NAME: 'бд_микрос_базы'
      })
    },
    addfirstbse () {
      this.$store.dispatch('addNewElement', {
        NAME: 'База знаний',
        CODE: 'md_knowledge1',
        entity: 'md_kb_bases'
      })
    },
    settingcurview () {
      this.$store.dispatch('addNewElement', {
        NAME: 'viewType',
        CODE: 'view',
        entity: 'md_kb_settings'
      })
    },
    settingscurentyt () {
      this.$store.dispatch('addNewElement', {
        NAME: 'entity',
        CODE: 'md_knowledge1',
        entity: 'md_kb_settings'
      })
    },
    setentity () {
      this.$store.dispatch('setEntity', {CODE: 'md_knowledge1'})
    },
    setbases () {
      this.$store.dispatch('setBases')
    },
    setsettings () {
      this.$store.dispatch('setSettings')
    },
    setUsers () {
      this.$store.dispatch('setUsers')
    },
    setElem () {
      this.$store.dispatch('setElements', this.$store.getters.getCurrentBase('entity'))
    },
    consoling () {
      console.log(this.$store)
    }
  }
}
</script>

<style scoped>

</style>
