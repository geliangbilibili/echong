import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage/HomePage.vue'
import Classaify from '../pages/Classaify/Classaify.vue'
import MyShop from '../pages/MyShop/MyShop.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: HomePage,
    },
    {
      path: '/classaify',
      component: Classaify,
    },

    {
      path: '/myshop',
      component: MyShop,
    },
    {
      path: '/shopcart',
      component: ShopCart,
    }
  ]
})
