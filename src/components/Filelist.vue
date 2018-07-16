<template>
    <div class="kb-disk-interface-filelist">
        <div>
            <div id="folder_list_4326_tile_grid_container" class="disk-tile-grid">
                <div class="ui-grid-tile">
                    <div class="ui-grid-tile-item" v-for="item in items">
                        <div class="ui-grid-tile-item-checkbox"></div>
                        <div class="ui-grid-tile-item-content">
                            <div class="disk-folder-list-item disk-folder-list-item-folder">
                                <div class="disk-folder-list-item-image" id="foo" v-on:click="select($event)">
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
                                            <a class="disk-folder-list-item-title-link" title="Test">{{item}}</a>
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
      items: [
        '12',
        '1222',
        '2323'
      ],
      checked: [],
      targetId: false
    }
  },
  methods: {
    onClick: function () {
      console.log('asdasda')
    },
    select: function (event) {
      this.targetId = event.currentTarget.id
      console.log(this.targetId)
    }
  }
}
</script>
