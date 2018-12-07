import VueRouter from "vue-router"
import Vue from "vue"
import shouye from '../page/shouye/shouye'
import category from '../page/category/category'
import personal from '../page/personal/personal'
import shiwu from '../page/shiwu/shiwu'
import shopcart from '../page/shopcart/shopcart'
import phoneLogin from "../page/phoneLogin/phoneLogin"
import alreadyLogin from '../page/alreadyLogin/alreadyLogin'
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
      path:'/personal',
      component:personal,
    /*  children:[
        {
          path:'/personal/phonelogin',
          component:phoneLogin,
        },
      ]*/
    },
    {
      path:'/shiwu',
      component:shiwu,
      meta:{
        isShow:true
      }
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
        next('/phonelogin')
      }
    }else {
      next()
    }
})
export default router
