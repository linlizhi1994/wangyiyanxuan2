import Mock from "mockjs"
import shouyeData from "./msite"
import categoryData from './category'

Mock.mock('/shouye',{code:0,data:shouyeData.focusList})
Mock.mock('/shouyeData',{code:0,data:shouyeData})
Mock.mock('/category',{code:0,data:categoryData})

console.log("mock!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
