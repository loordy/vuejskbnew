<template>
  <div class="ht-container">
    <section id="content" role="main">
      <header id="page-header" class="clearfix"><h1 class="page-title">{{ item.NAME }}</h1>
        <breadcrumbs/>
      </header>
      <ul class="sub-categories clearfix">
        <li v-for="section in sections" :key="section.id"><h4><a :href="section.id">{{ section.name }}</a>
        </h4></li>

      </ul>
      <article v-for="item in items" :key="item.ID, i" :id='"post-"+item.ID'
               :class='"clearfix post type-post status-publish format-standard hentry category-using-knowhow tag-theme tag-wordpress post-"+item.ID'>
        <h2 class="entry-title"><router-link rel="bookmark" :to='"/item/" + item.ID' >{{ item.NAME }}</router-link></h2>
        <div class="entry-content"><p>{{ item.DETAIL_TEXT }}</p></div>
        <router-link :to='"/item/" + item.ID' class="readmore"
           :title="item.TITLE">Подробнее<span> →</span></router-link></article>

    </section>

  </div>
</template>

<script>
import { GetCatalogArray, GetSections, GetElements } from '../../api/index'
import Pageheader from '../common/Pageheader'
export default {
  name: 'section',
  data () {
    return {
      i: 0,
      sections: {
        DETAIL_TEXT: '',
        NAME: '',
        ID: ''
      },
      items: {
        DETAIL_TEXT: '',
        ID: '',
        NAME: ''
      },
      catalog: ''
    }
  },
  components: {Pageheader},
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

<style scoped>

</style>
