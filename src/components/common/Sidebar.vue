<template>
    <aside id="sidebar" role="complementary">
        <div id="categories_3" class="widget widget_categories clearfix"><h4 class="widget_title">
          <button id="show_modal" @click="showModal">Добавить раздел</button>
          <button @click="addStatya">Добавить статью</button>
          <div v_if="show" @close="show = false" class="fade_wrapp">

          </div>
          <modal v_if="show" @close="show = false">
            <h3 slot="header">Редактasdasdвать</h3>
          </modal>
          <span>Разделы</span></h4>
            <ul  v_for="section in sections" :key="section.ID, i">
                <li class="cat_item cat_item_2"><router_link :to='"/section/" + section.ID' :title="section.NAME">{{ section.NAME }}</router_link></li>
            </ul>
        </div>

        <div id="st_articles_widget_2" class="widget st_articles_widget clearfix"><h4 class="widget_title"><span>Последние статьи</span>
        </h4>
            <ul class="clearfix">
                <li v_for="item in items" :key ="item.ID" class="clearfix format_standard"><router_link :to="'/item/'+item.ID" rel="bookmark">{{ item.NAME }}</router_link></li>
            </ul>
        </div>
    </aside>
</template>
<script>
import modal from './modalAll'
export default {
  name: 'Sidebar',
  components: {
    modal
  },
  data () {
    return {
      i: 0,
      catalog: '',
      iSshowModal: false,
      show: false
    }
  },
  computed: {
    items () {
      return this.$store.state.elements
    },
    sections () {
      return this.$store.state.sections
    }
  },
  methods: {
    addStatya () {
      this.show = !this.show
      this.$store.commit('AddNewElement', {
        'ID': this.$route.params.id + 100,
        'SECTION_ID': this.$route.params.id,
        'NAME': 'novayastatya ' + this.$route.params.id})
    },
    /* GetSections () {
      let self = this
      GetSections(null, function (data) {
        self.sections = data
      })
    }, */
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

<style scoped>
  .fade_wrapp{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background_color: #000;
    opacity: 0.6;
  }
</style>
