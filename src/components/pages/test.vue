<template>
  <ul id="demo">
    <demo1
      class="item"
      :model="treeData">
    </demo1>
  </ul>
</template>

<script>
import demo1 from '../common/demo'
let data = {
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
export default {
  name: 'test',
  components: { demo1 },
  data: function () {
    return {
      treeData: data
    }
  }
}
// var positiveArr = data.filter(function (number) {
//   return number > 0
// })
</script>
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
