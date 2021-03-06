import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import City from '@/views/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city/:city',
      name: 'City',
      component: City,
      props: true,
    },
  ],
  mode: 'history'
})
