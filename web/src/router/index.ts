import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Option',
      component: import('@/views/BlankPage.vue')
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: import('@/components/layout/Layout.vue'),
      children : [
        {
          path: '/sytemPoint',
          name: 'sytemPoint',
          component: () => import('@/views/SystemPointView.vue')
        }, 
        {
          path:'/users', 
          name: 'users', 
          component: () => import('@/views/UserView.vue')
        }
      ]
      
    },
    {
      path: '/actionPoint',
      name: 'ActionPoint',
      component: import('@/views/ActionPoint.vue')
    }
    
  ]
})

export default router
