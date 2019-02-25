import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/config',
      name: 'config',
      component: () => import(/* webpackChunkName: "about" */ './components/Config.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import(/* webpackChunkName: "about" */ './components/Categoria.vue')
    },
    {
      path: '/articulos',
      name: 'articulos',
      component: () => import(/* webpackChunkName: "about" */ './components/Articulo.vue')
    }
  ]
})
