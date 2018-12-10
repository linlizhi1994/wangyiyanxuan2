import axios from "axios";
import qs from 'qs';


const instance = axios.create({})
console.log('----', axios, instance)
const CancelToken = axios.CancelToken
let cancel

let req_count = 0
let cancel_count = 0
let cancel_req_count = 0
let success_count = 0

function cancelRequest() {
  // 第一次执行videoService.cancelRequest()时还未发送getVideoList请求，会报错，添加如下判断
  if (typeof cancel === 'function') {
    console.log('....取消请求...', ++cancel_count)
    // 取消请求
    cancel()
    // 取消的函数对象已无用, 让它成为垃圾对象
    cancel = null
  }
}

export default function ajax(url, data = {}, method = "GET") {
  const {onlyOne} = data;
  const options = {};
  if (onlyOne) {
    delete data.onlyOne

    // 取消之前的请求
    cancelRequest()
    console.log('----发送请求 ', ++req_count)
    options.cancelToken = new CancelToken(function executor(c) {
      // 保存当前请求对应的取消函数
      cancel = c
    })
  }
  return new Promise((resolve, reject) => {
    let promise;

    if (method == "GET") {
      options.params = data
      promise = instance.get(url, options);
    } else {
      promise = instance.post(url, qs.stringify(data), options)
    }
    promise.then((response) => {
      console.log('++++处理响应数据', ++success_count)
      /*if(onlyOne) {
        cancel = null
      }*/
      resolve(response.data)
    }).catch(err => {
      if (axios.isCancel(err)) {
        console.log('****请求被取消了', ++cancel_req_count)
      } else {
        // 处理请求异常
        reject(err)
      }
    })
  })
}

/*
1. GET请求参数
  axios.get(url+'?name=tom&age=12)
  axios.get(url, {params: {name:'tom', age: 12}})
2. post请求参数
    Content-Type: application/json;charset=UTF-8      '{"name":"tom", "age": 12}'
    Content-Type: application/x-www-form-urlencoded   "name=tom&age=12"
    axios.post(url, {name:'tom', age: 12})  // 默认是json格式参数提交post请求
    axios.post(url, qs.stringify(data))
3. axios实例
    const instance = axios.create([config])
    instance.get()/post()
4. cancel请求
  1). 请求配置: cancelToken (令牌)--->保存用于取消当前请求的cancel函数
  2). 取消请求: cancel(): 请求成功返回后, 不会进入成功的回调, 会进入catch的回调
  解决问题: 多次连续的请求, 只使用最后一个请求返回的数据 (举例子: 列表数据错乱的问题)
 */


/*
分页效果
1. 什么时候发?
   滑动到底部就发(可能会在前面一点/再上拉一定的距离)
   如果使用上拉加载更多的组件: 指定对应的回调函数<PullRefresh onPullUp="reqMore">
   如果是滑动的库(better-scroll):
      配置: pullUpLoad=true
      绑定事件监听: pullingUp: function (){发请求异步获取数据, 更新状态数据}  (内部将loading=true)
      得到/更新数据后: finishPullUp() 通知scroll对象数据已加载完成(内部将loading=false)
      通知scroll更新滑动: refresh()
2. 发什么请求?
    分页请求参数: 请求第几页: page=2  / 每页几条数据: size= 5

3. 如果更新列表?
    在1中
 */

// axios.post('/xxx', {name: 'Tom', age: 12}).then(response => {})
// axios.post('/xxx', 'name=tom&age=12').then(response => {})