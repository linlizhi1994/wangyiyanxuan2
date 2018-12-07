/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '/api'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(BASE + '/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {latitude, longitude})

//短信的验证码
export const reqSendCode=(phone) => ajax(BASE+"/sendcode",{phone})


//短信登录的函数
export const reqMsgLogin=(phone,code) => ajax(BASE+"/login_sms",{phone,code},"POST")
//export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')

//用户名登录
export const reqUserNameLogin = (name,pwd,captcha) => ajax(BASE+"/login_pwd",{name,pwd,captcha},"POST")
//获取用户用来维持登录
export const reqUser = () => ajax(BASE+"/userinfo")
//用户退出
export const reqLoginOut=()=>ajax(BASE+"/logout")


//mock的接口

/*export const reqGoods = () => ajax('/goods')
export const reqInfo = () => ajax('/info')
export const reqRatings = () => ajax('/ratings')*/


//mock模拟请求首页的轮播图数据
export const reqShouyeData=()=> ajax('/shouye')

//请求首页的所有数据
export const reqShouyeQuanbuData = () =>ajax('/shouyeData')
export const reqCategoryData = () => ajax('/category')

export const reqShiwuData = () => ajax('/shiwu')


