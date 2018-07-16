<template>
  <div class="ht-container">
    <header id="page-header" class="clearfix"><h1 class="page-title">{{ item.NAME }}</h1>
      <breadcrumbs/>
    </header>
    <section id="content" role="main">
      <ul class="entry-meta clearfix">
        <li class="date"><i class="fa fa-time"></i>
          <time datetime="2012-08-10" itemprop="datePublished">{{ item.DATE_CREATE }}</time>
        </li>
        <li class="author"><i class="fa fa-user"></i>{{ item.CREATED_BY }}</li>
        <li class="category"><i class="fa fa-folder-close"></i><router-link :to="'/section/'+ item.SECTION"></router-link></li>
      </ul>
      <article :id="'post-'+ item.ID"
               :class='"clearfix post type-post status-publish format-standard hentry category-billing tag-account tag-sales  post"+item.ID'>
        <header class="entry-header"></header>
        <div class="entry-content" v-html="compiledMarkdown"></div>

        <div class="tags"><strong> Tagged: </strong><a href="https://demo.herothemes.com/knowhow/tag/account/"
                                                       rel="tag">account</a><a
          href="https://demo.herothemes.com/knowhow/tag/sales/" rel="tag">sales</a></div>
      </article>
      <section id="entry-author" class="clearfix"><h3 id="entry-author-title">About The Author</h3>
        <div class="gravatar"><img alt=""
                                   src="https://secure.gravatar.com/avatar/b072b98e9b6b76648e6506077a44c85a?s=70&amp;d=mm&amp;r=g"
                                   srcset="https://secure.gravatar.com/avatar/b072b98e9b6b76648e6506077a44c85a?s=140&amp;d=mm&amp;r=g 2x"
                                   class="avatar avatar-70 photo lazyloading" height="70" width="70"
                                   data-was-processed="true"></div>
        <h4><a class="author-link" href="https://demo.herothemes.com/knowhow/author/chris-mooney/" rel="author"> Chris
          Mooney </a></h4>
        <div class="entry-author-desc"> ThemeForest author &amp; <a href="http://herothemes.com">@herothemes.</a>
          Founder. Beautiful WordPress themes backed by our heroic one to one support. Trusted by over 13,000 customers,
          our themes are perfect for novices &amp; developers.
        </div>
      </section>
      <section id="related-posts" class="clearfix"><h3 id="related-posts-title">Статьи по теме</h3>
        <ul class="clearfix">
          <li v-for="relitem in Relitems" :key='relitem.ID' class="standard"><h4 class="entry-title"><router-link :to="'/item/'+relitem.ID"
             rel="bookmark"
            :title="relitem.TITLE">{{ relitem.NAME }}</router-link></h4></li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import { GetElements } from '../../api/index'

export default {
  name: 'item',
  data () {
    return {
      item: '',
      Relitems: '',
      text: '# hello' +
      'asdasd' +
      'asdasdasd' +
      'asdas' +
      '123'
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.text, { sanitize: true })
    }
  },
  methods: {
    GetElements () {
      var self = this
      const params = {
        ID: self.$route.params.id
      }
      GetElements(params, function (data) {
        data = data[0]
        self.item = data
        self.text = data.DETAIL_TEXT
        console.log(data)
      })
      console.log('self')
      console.log(self.items)
    },
    GetElementsRel () {
      var self = this
      const params = {}
      GetElements(params, function (data) {
        self.Relitems = data
        console.log(data)
      })
      console.log('self')
      console.log(self.items)
    }
  },
  watch: {
    '$route' (to, from) {
      this.GetElements()
      this.GetElementsRel()
    }
  },
  mounted () {
    this.GetElements()
    this.GetElementsRel()
  }

}
</script>
