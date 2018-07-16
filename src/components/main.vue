<template>
  <div>
  <div>
    <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
  <div class="ht-container">
      <section id="content" role="main">
        <header id="page-header"><h2 class="page-title">Разделы статей</h2></header>
        <div v-for="section in sections" :key="section.ID, i" id="homepage-categories" class="clearfix">
          <div :class='"column col-half " +  i'><h3><router-link :to='"/section/" + section.ID' :title = "section.TITLE">{{ section.NAME }}</router-link><span
              class="cat-count">{{ items.length }}</span></h3>
              <ul class="category-posts">
                <li v-for="item in items" :key="item.ID, i" class="format-standard"><router-link :to='"/item/" + item.ID' :title = "item.TITLE">{{ item.NAME }}</router-link><router-link :to='"/markdown/" + item.ID'><i class="fa fa-pencil"></i></router-link></li>
              </ul>
            </div>
        </div>
      </section>
    </div>
    </div>
</template>

<script>
import { GetCatalogArray, GetSections, GetElements } from '../api/index'
export default {
  name: 'content',
  data () {
    return {
      i: 0,
      sections: '',
      items: '',
      catalog: ''
    }
  },
  methods: {
    GetCatalog () {
      var self = this
      GetCatalogArray(null, function (Catalog) {
        self.catalog = Catalog
        console.log(Catalog)
      })
    },
    GetSections () {
      var self = this
      GetSections(null, function (data) {
        self.sections = data
      })
      console.log('self')
      console.log(self.sections)
    },
    GetElements () {
      var self = this
      GetElements(null, function (data) {
        self.items = data
      })
      console.log('self')
      console.log(self.items)
    }

  },
  mounted () {
    this.GetCatalog()
    this.GetElements()
    this.GetSections()
  }

}
</script>
