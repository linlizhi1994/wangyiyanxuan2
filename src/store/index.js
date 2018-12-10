import Vue from "vue"
import Vuex from "vuex"

import {
  reqShouyeData,
  reqShouyeQuanbuData,
  reqCategoryData,
  reqShiwuData,
  reqUser,
  reqLoginOut,
  reqShiwuTabList,
  reqShwuData2,
  reqSearch

} from '../api/index'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    lunbotuList:[],
    lunbotuUpData:[],//轮播图下一个地方的数据
    shouyeData:{},//首页的全部数据
    categoruData:[],//分类组件的数据
    shiwuData:[],
    users:{},
    shiwuTabList:[],
    shiwuData2:[],//识物组件 达人的数据 因为没有识物组件的完整数据 所以一个个的请求它的子路由的数据
    searchList:[]
  },

  getters:{
    /*把shiwuData数组中的每一对象取出来，每一个对象里都有一个topics数组，遍历它 把topics数组中的每一个元素放入到新数组中*/
    newArr(state){
      let arr1=[]
      let arr3=[]
      let arr = state.shiwuData
      arr.forEach((val)=>{
        val.topics.forEach((val2)=>{
        arr1.push(val2)
        })
      })
       arr3.push(arr1,state.shiwuData2)
      return arr3//把识物 组件 中的 推荐 和 达人的数据放入到 一个数组中
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
      state.shouyeData = shouyeData
    },

    receive_categoryData(state,{categoryData}){
      state.categoruData = categoryData
    },

    receive_shiwudata(state,{shiwuData}){
      state.shiwuData = shiwuData
    },
    receive_shiwudata2(state,{shiwuData2}){
      state.shiwuData2 = shiwuData2
    },
    receive_users(state,{users}){
      state.users=users
    },

    receive_out(state){
      state.users = {}
    },

    receive_shiwutablist(state,{tablist}){
      state.shiwuTabList = tablist
    },

    getSearchContent(state,{searchList}){
      state.searchList = searchList
    }

  },

  actions:{
   async getSearch(store,{keywordPrefix}){
     let result = await reqSearch(keywordPrefix)
     if(result.code === "200"){
       const searchList = result.data
       store.commit('getSearchContent',{searchList})
       console.log("-------------",searchList)
       console.log(keywordPrefix)
     }
    },

    async getlunbotu(store){
      const result = await reqShouyeData()

          const lunbotulist=result.data
          store.commit('receive_lunbotulist',{lunbotulist})

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


    async getShiwuData2(store){
      const result1 = await reqShwuData2()
      if(result1.code === 0){
        const shiwuData2 = result1.data
        store.commit('receive_shiwudata2',{shiwuData2})
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
    },

    //获取识物头部下面的tab列表
    async getShiwuTabList(store){
      const result = await reqShiwuTabList()
      //if(result.code === "200"){
        const tablist = result.data
        store.commit('receive_shiwutablist',{tablist})
     // }
      }
  }
})

export default store
