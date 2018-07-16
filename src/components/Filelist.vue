<template>
    <div class="kb-disk-interface-filelist">
        <div>
            <div id="folder_list_4326_tile_grid_container" class="disk-tile-grid">
                <div class="ui-grid-tile">
                    <div class="ui-grid-tile-item" v-for="item in itemsold" :key="item.ID">
                        <!--<div class="ui-grid-tile-item-checkbox" v-bind:class="{checked.[item.ID]:selected}"></div>-->
                      <div :class="['ui-grid-tile-item-checkbox',{selected:checked[item.ID]}]" :title='item.ID'></div>
                        <div class="ui-grid-tile-item-content">
                            <div class="disk-folder-list-item disk-folder-list-item-folder">
                                <div class="disk-folder-list-item-image" :id="item.ID" @click="select">
                                    <div class="ui-icon ui-icon-file ui-icon-file-folder" style="width: 85%;">
                                        <i></i>
                                    </div>
                                </div>
                              <!--<ul>-->
                                <!--<li v-for="check in checked">{{check}}</li>-->
                              <!--</ul>-->
                                <div class="disk-folder-list-item-action">
                                </div>
                                <div class="disk-folder-list-item-bottom">
                                    <div class="disk-folder-list-item-title">
                                        <div class="disk-folder-list-item-title-wrapper">
                                            <input class="disk-folder-list-item-title-input" type="text" value="Test">
                                              <a class="disk-folder-list-item-title-link" title="Test">{{item.NAME}}</a>
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
      show: false,
      itemsold: [
        {
          'NAME': 'asdasd',
          'ID': 12
        },
        {
          'NAME': 'asdasd',
          'ID': 13
        },
        {
          'NAME': 'asdasd',
          'ID': 15
        }
      ]
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
