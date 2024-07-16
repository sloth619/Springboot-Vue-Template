import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from "vue-router";

Vue.use(Router)


const routes = [
    {
      path: '/',
      name: 'LoginView',
      component: () => import('../views/common-views/LoginView.vue'),
    },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
