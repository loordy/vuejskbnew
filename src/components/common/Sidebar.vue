<template>
    <aside id="sidebar" role="complementary">
        <div id="categories-3" class="widget widget_categories clearfix"><h4 class="widget-title">
          <button id="show-modal" @click="showModal">Добавить раздел</button>
          <modal v-if="iSshowModal" @close="closeModal">
            <h3 slot="header">Редактировать</h3>
          </modal>
          <button v-on:click="addStatya()">Добавить статью</button>
          <span>Разделы</span></h4>
            <ul  v-for="section in sections" :key="section.ID, i">
                <li class="cat-item cat-item-2"><router-link :to='"/section/" + section.ID' :title="section.NAME">{{ section.NAME }}</router-link></li>

            </ul>
        </div>

        <div id="st_articles_widget-2" class="widget st_articles_widget clearfix"><h4 class="widget-title"><span>Последние статьи</span>
        </h4>
            <ul class="clearfix">
                <li v-for="item in items" :key ="item.ID" class="clearfix format-standard"><router-link :to="'/item/'+item.ID" rel="bookmark">{{ item.NAME }}</router-link></li>
            </ul>
        </div>
    </aside>
</template>
<script>
import { AddNewItem, GetSections } from '../api/index'
import modal from './modalwindow'
export default {
  name: 'Sidebar',
  components: {
    modal
  },
  data () {
    return {
      i: 0,
      sections: '',
      items: this.$store.state.elements,
      catalog: '',
      iSshowModal: false
    }
  },
  methods: {
    addStatya () {
      var self = this
      AddNewItem(function (data) {
        console.log(data)
        self.$router.push({ path: `/markdown/${data}` })
      })
    },
    GetSections () {
      var self = this
      GetSections(null, function (data) {
        self.sections = data
      })
    },
    showModal () {
      this.iSshowModal = true
    },
    closeModal () {
      this.iSshowModal = false
    }
  },
  mounted () {
    this.GetSections()
  }
}
</script>
