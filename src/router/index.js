import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import SingleProduct from '@/views/SingleProduct.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Blog from '@/views/Blog.vue'

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
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/product/:id',
      name: 'singleProduct',
      component: SingleProduct
    }
  ]
})

export default router
