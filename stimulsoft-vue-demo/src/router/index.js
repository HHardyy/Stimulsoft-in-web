import Vue from 'vue'
import VueRouter from 'vue-router'
import Viewer from '../views/viewer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'viewer',
    component: Viewer
  },{
    path:'/desight',
    name:'desight',
    component: () => import ('../views/desight')
  }
]

const router = new VueRouter({
  routes
})

export default router
