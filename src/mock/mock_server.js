import Mock from "mockjs"
import shouyeData from "./msite"
import categoryData from './category'
import shiwuData from './shiwu'
import categoryData2 from './category2'

Mock.mock('/shouye',{code:0,data:shouyeData.focusList})
Mock.mock('/shouyeData',{code:0,data:shouyeData})
Mock.mock('/category',{code:0,data:categoryData2})

Mock.mock('/shiwu',{code:0,data:shiwuData})

console.log("mock!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
