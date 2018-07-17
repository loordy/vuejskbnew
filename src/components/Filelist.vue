<template>
    <div class="kb-disk-interface-filelist">
        <div>
            <div id="folder_list_4326_tile_grid_container" class="disk-tile-grid">
                <div class="ui-grid-tile">
                    <div class="ui-grid-tile-item" v-for="section in sections" :key="section.ID">
                        <div class="ui-grid-tile-item-checkbox"></div>
                        <div class="ui-grid-tile-item-content">
                            <div class="disk-folder-list-item disk-folder-list-item-folder">
                                <div class="disk-folder-list-item-image" :id="section.ID" @click="select">
                                    <div class="ui-icon ui-icon-file ui-icon-file-folder" style="width: 85%;">
                                        <i></i>
                                    </div>
                                </div>
                                <div class="disk-folder-list-item-action">
                                </div>
                                <div class="disk-folder-list-item-bottom">
                                    <div class="disk-folder-list-item-title">
                                        <div class="disk-folder-list-item-title-wrapper">
                                            <input class="disk-folder-list-item-title-input" type="text" value="Test">
                                            <router-link :to='"/section/" + section.ID' class="disk-folder-list-item-title-link" :title="section.NAME">{{section.NAME}}</router-link>
                                        </div>
                                    </div>
                                    <div class="disk-folder-list-item-icons">
                                        <div class="disk-folder-list-item-locked" style="display: none;">
                                        </div>
                                        <div class="disk-folder-list-item-shared" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'filelist',
  data: function () {
    return {
      checked: [],
      targetId: false
    }
  },
  computed: {
    items () {
      return this.$store.state.elements
    },
    sections () {
      return this.$store.state.sections
    }
  },
  methods: {
    onClick: function () {
      console.log('asdasda')
    },
    select: function (event) {
      this.checked[event.currentTarget.id] = !this.checked[event.currentTarget.id]
      console.log(this.checked)
    }
  },
  mounted () {
    this.itemsold.forEach(function (item, i) {
      this.checked[item.ID] = false
    })
  }
}
</script>
