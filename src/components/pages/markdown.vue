<template>
  <div class="ht-container">
    <section id="content" role="main">
      <div>
        <input v-model="item.NAME">
        <select v-model="selected">
          <option disabled value="">Выберите один из вариантов</option>
          <option v-for="section in sections" :key="section.ID">{{ section.NAME}}</option>
        </select>
      </div>
     <textarea :value="item.DETAIL_TEXT" @input="update"></textarea>
      <div class="textarea" v-html="compiledMarkdown"></div>
      <div>
        <button v-on:click="Save">Сохранить</button>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash'
import marked from 'marked'
import { GetElements, UpdateItem, GetSections } from '../api/index'
export default {
  data () {
    return {
      input: '# hello',
      selected: '',
      sections: '',
      item: {
        DETAIL_TEXT: '',
        NAME: ''
      }
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.item.DETAIL_TEXT, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.item.DETAIL_TEXT = e.target.value
    }, 300),
    GetElements () {
      var self = this
      const params = {
        ID: self.$route.params.id
      }
      console.log(self.$route)
      GetElements(params, function (data) {
        data = data[0]
        self.item = data
        console.log(data)
      })
      console.log('self')
      console.log(self.item)
    },
    GetSections () {
      var self = this
      GetSections(null, function (data) {
        self.sections = data
      })
    },
    Save () {
      var self = this
      UpdateItem(this.item, function (data) {
        console.log(data)
      })
      console.log('self')
      console.log(self.items)
    }
  },
  mounted () {
    this.GetElements()
    this.GetSections()
  },
  watch: {
    '$route' (to, from) {
      console.log('route change')
      this.GetElements()
      this.GetSections()
    }
  }
}
</script>

<style scoped>
  html, body {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  .textarea {
    display: inline-block;
    width: 49%;
    height: 300px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 20px;
  }

  textarea {
    width: 49%;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
    height: 300px;
  }

  code {
    color: #f66;
  }

</style>
