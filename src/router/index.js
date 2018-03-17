import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage/HomePage.vue'
import Classaify from '../pages/Classaify/Classaify.vue'
import MyShop from '../pages/MyShop/MyShop.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Brand from '../pages/Brand/Brand.vue'
import Class from '../pages/Class/Class.vue'

Vue.use(VueRouter)

// [1,3,5].forEach((item,index,arr)=>{
//   item---1 ,3 ,5
//   index --- 0,1,2
// })
// (item,index) in 10

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
      children:[
        {
          path:'',
          redirect:'class',
        },
        {
          path:'brand',
          component:Brand,
        },
        {
          path:'class',
          component:Class
        }
      ],
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
