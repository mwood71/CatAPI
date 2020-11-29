import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Breeds from '../views/Breeds.vue'
import Images from '../views/Images.vue'
import Random from '../views/Random.vue'
import NotFound from '../views/NotFound.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/images',
    name: 'Images',
    component: Images
  },
  {
    path: '/breeds',
    name: 'Breeds',
    component: Breeds
  },
  
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
