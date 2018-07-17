<template>
  <ul id="demo">
    <item
      class="item"
      :model="treeData">
    </item>
  </ul>
</template>
<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
<script>
import demo1 from '../common/demo'
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}
// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  }
});

export default {
  name: 'test',
  components: { demo }
}
</script>
