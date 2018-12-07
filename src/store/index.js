import Vue from "vue"
import Vuex from "vuex"

import {
  reqShouyeData,
  reqShouyeQuanbuData,
  reqCategoryData,
  reqShiwuData,
  reqUser,
  reqLoginOut

} from '../api/index'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    lunbotuList:[],
    lunbotuUpData:[],//轮播图下一个地方的数据
    categoruData:[],//分类组件的数据
    shiwuData:[],
    users:{}

  },

  getters:{
    /*把shiwuData数组中的每一对象取出来，每一个对象里都有一个topics数组，遍历它 把topics数组中的每一个元素放入到新数组中*/
    newArr(state){
      let arr1=[]
      let arr = state.shiwuData
      arr.forEach((val)=>{
        val.topics.forEach((val2)=>{
        arr1.push(val2)
        })
      })
      return arr1
    },
    /*得到shiwu组件中顶部的图片的方法*/
    shiwuUpImg(state){
     let imgArr = state.shiwuData.filter((shiwu)=>{
        return shiwu.ad /*shiwuData这个数组中只有一个元素的ad属性 不为null ad属性包含了img的url地址*/
      })
      return imgArr[0]
    }
  },

  mutations:{
    receive_lunbotulist(state,{lunbotulist}){
      state.lunbotuList=lunbotulist
    },

    receive_shouyedata(state,{shouyeData}){
      state.lunbotuUpData = shouyeData.kingKongModule.kingKongList
    },

    receive_categoryData(state,{categoryData}){
      state.categoruData = categoryData
    },

    receive_shiwudata(state,{shiwuData}){
      state.shiwuData = shiwuData
    },

    receive_users(state,{users}){
      state.users=users
    },

    receive_out(state){
      state.users = {}
    }
  },

  actions:{

    async getlunbotu(store){
      const result = await reqShouyeData()
        if(result.code === 0){
          const lunbotulist=result.data
          store.commit('receive_lunbotulist',{lunbotulist})
        }
    },

    async getShouyeData(store){
      const result = await reqShouyeQuanbuData()
      if(result.code === 0){
        const shouyeData = result.data
        store.commit('receive_shouyedata',{shouyeData})
      }
    },

    async getCategoryData(store,cb){
      const result = await reqCategoryData()
      if(result.code===0){
        const categoryData = result.data
        store.commit('receive_categoryData',{categoryData})
          cb()
      }
    },

    async getShiwuData(store){
      const result = await reqShiwuData()
      if(result.code === 0){
        const shiwuData = result.data
        store.commit('receive_shiwudata',{shiwuData})
      }
    },

    getuser(store,users){
      store.commit('receive_users',{users})
    },

    async getUserId(store){
      const result = await reqUser()
      if(result.code === 0){
        const users = result.data
        store.commit('receive_users',{users})
      }
    },

   async loginOut(store){
      const result = await reqLoginOut()
     if(result.code === 0){
        store.commit('receive_out')
     }
    }
  }
})

export default store
