import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import SingleProduct from '@/views/SingleProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Shop
    },
    {
      path: '/product/:id',
      name: 'singleProduct',
      component: SingleProduct
    }
  ]
})

export default router
