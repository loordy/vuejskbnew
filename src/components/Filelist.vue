<template>
  <tr>
    <td class="kb-layout-inner-inner-cont">
      <div id="workarea">
        <div id="workarea-content">
          <div class="workarea-content-paddings">
            <div class="kb-disk-container posr" style="position: relative;">
              <table style="width: 100%;" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
          <div class="kb-disk-interface-filelist">
            <div class="disk-tile-grid">
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
                  <div class="ui-grid-tile-item" v-for="element in elements" :key="element.ID">
                    <div class="ui-grid-tile-item-checkbox"></div>
                    <div class="ui-grid-tile-item-content">
                      <div class="disk-folder-list-item disk-folder-list-item-folder">
                        <div class="disk-folder-list-item-image" :id="element.ID" @click="select">
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
                              <router-link :to='"/element/" + element.ID' class="disk-folder-list-item-title-link" :title="element.NAME">{{element.NAME}}</router-link>
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
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>
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
    elements () {
      return this.$store.getters.getElementsByParentID(this.$route.params.id)
    },
    sections () {
      return this.$store.getters.getSectionsByParentID(this.$route.params.id)
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
