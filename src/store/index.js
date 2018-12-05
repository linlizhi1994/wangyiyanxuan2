import Vue from "vue"
import Vuex from "vuex"

import {
  reqShouyeData,
  reqShouyeQuanbuData,
  reqCategoryData

} from '../api/index'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    lunbotuList:[],
    lunbotuUpData:[],//轮播图下一个地方的数据
    categoruData:[]//分类组件的数据
  },

  getters:{

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
    }
  }
})

export default store
