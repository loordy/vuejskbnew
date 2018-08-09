import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/pages/main'
import detailItem from '@/components/pages/detailItem'
import settings from '@/components/pages/settings'
import listItems from '@/components/pages/listItems'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/detailItem/:code',
      name: 'detailItem',
      component: detailItem
    },
    {
      path: '/settings/',
      name: 'settings',
      component: settings
    },
    {
      path: '/listItems/',
      name: 'listItems',
      component: listItems,
      props (route) {
        return route.query || {}
      }
    }
  ]
})
