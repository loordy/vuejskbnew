import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/pages/main'
import markdown from '@/components/pages/markdown'
import section from '@/components/pages/section'
import detailItem from '@/components/pages/detailItem'
import Settings from '@/components/pages/settings'
import filters from '@/components/pages/filters'

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
      path: '/markdown/:code',
      name: 'markdown',
      component: markdown
    },
    {
      path: '/detailItem/:code',
      name: 'detailItem',
      component: detailItem
    },
    {
      path: '/filters/',
      name: 'filters',
      component: filters,
      props (route) {
        return route.query || {}
      }
    },
    {
      path: '/settings/',
      name: 'settings',
      component: Settings
    },
    {
      path: '/section/:code(\\d+)',
      name: 'section',
      component: section
    }
  ]
})
