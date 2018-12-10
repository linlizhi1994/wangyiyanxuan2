import VueRouter from "vue-router"
import Vue from "vue"
import shouye from '../page/shouye/shouye'
import category from '../page/category/category'
import personal from '../page/personal/personal'
import shiwu from '../page/shiwu/shiwu'
import shopcart from '../page/shopcart/shopcart'
import phoneLogin from "../page/phoneLogin/phoneLogin"
import emailLogin from "../page/emailLogin/emailLogin"
import alreadyLogin from '../page/alreadyLogin/alreadyLogin'
import shiwuTuiJian from '../page/shiwu/shiwuTuiJian/shiwuTuiJian'
import search from "../page/search/search"
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
    path:'/shouye',
    component:shouye,
      meta:{
      isShow:true
      }
    },
    {
      path:'/category',
      component:category,
      meta:{
        isShow:true
      }
    },
    {
      path:'/search',
      component:search,
    },
    {
      path:'/personal',
      component:personal,
    },
    {
      path:'/shiwu',
      component:shiwu,
      meta:{
        isShow:true
      },
      children:[
        {
          path:'/shiwu/shiwutuijian/:id',
          component:shiwuTuiJian,
          props:true,
          meta:{
            isShow:true
          }
        },
         {
           path:"",
           redirect:"/shiwu/shiwutuijian/0",
         },
      ]
    },
    {
      path:'/shopcart',
      component:shopcart,
      meta:{
        isShow:true
      }
    },
    {
      path:'/phonelogin',
      component:phoneLogin,
    },
    {
      path:'/emaillogin',
      component:emailLogin,
    },
    {
      path:'/alreadylogin',
      component:alreadyLogin,
      meta:{
        isShow:true
      }
    },
    {
      path:"/",
      redirect:"/shouye"
    }
  ]
})

router.beforeEach((to,from,next)=>{
    if(to.path ==='/personal'){
      if(Vue.store.state.users._id){
        next('/alreadylogin')
      }else {
        next()
      }
    }else {
      next()
    }
})
export default router
