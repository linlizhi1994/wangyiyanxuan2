import VueRouter from "vue-router"
import Vue from "vue"
import shouye from '../page/shouye/shouye'
import category from '../page/category/category'
import personal from '../page/personal/personal'
import shiwu from '../page/shiwu/shiwu'
import shopcart from '../page/shopcart/shopcart'
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
    path:'/shouye',
    component:shouye
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/personal',
      component:personal
    },
    {
      path:'/shiwu',
      component:shiwu
    },
    {
      path:'/shopcart',
      component:shopcart
    },
    {
      path:"/",
      redirect:"/shouye"
    }
  ]
})
export default router
