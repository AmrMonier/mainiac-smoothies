import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import EditSmoothie from '@/components/EditSmoothie'
import CreateSmoothie from '@/components/CreateSmoothie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/smoothie/create',
      name: 'createSmoothie',
      component: CreateSmoothie
    },
    {
      path: '/smoothie/:slug/edit',
      name: 'editSmoothie',
      component: EditSmoothie
    },

  ]
})
