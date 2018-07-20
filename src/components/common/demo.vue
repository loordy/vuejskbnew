<template>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      <span  v-if="isFolder" class="bx-disk-wf-arrow "></span>
      <span v-if="isFolder" class="kb-disk-wf-folder-icon "></span>
      {{ model.NAME }}
      {{ model}}
    </div>
    <ul v-show="open" v-if="isFolder">{{ model }}
      <demo1
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">{{ model}}
      </demo1>
      <li class="add" @click="addChild">Add</li>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'demo1',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
      console.log(this.model)
    },
    changeType: function () {
      if (!this.isFolder) {
        this.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
