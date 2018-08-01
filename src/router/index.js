import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/pages/main'
import markdown from '@/components/pages/markdown'
import section from '@/components/pages/section'
import artic from '@/components/pages/artic'
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
      path: '/markdown/:id(\\d+)',
      name: 'markdown',
      component: markdown
    },
    {
      path: '/artic/:id(\\d+)',
      name: 'artic',
      component: artic
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
      path: '/section/:id(\\d+)',
      name: 'section',
      component: section
    }
  ]
})
