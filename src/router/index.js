import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import markdown from '@/components/pages/markdown'
import section from '@/components/pages/section'
import item from '@/components/pages/item'
import Settings from '@/components/pages/settings'

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
      path: '/item/:id(\\d+)',
      name: 'item',
      component: item
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
