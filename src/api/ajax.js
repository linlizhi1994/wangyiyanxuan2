/*
能发送ajax请求的函数
包装axios
返回值是promise对象
 */
import axios from 'axios'
import qs from "qs"
export default function ajax(url, data={}, method='GET') {

  return new Promise((resolve, reject) => {
    let promise
    if(method==='GET') {
      //return axios.get(url, {params: data})
      // 拼query请求参数串
      let queryStr = ''
      Object.keys(data).forEach(key => {
        const value = data[key]
        queryStr += `${key}=${value}&`
      })
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')

      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) // username=tom&password=123
        url += '?' + queryStr  // /login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
       promise = axios.post(url, qs.stringify(data))
     }

    promise.then(response => {
      // 异步请求成功
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}


/*

const result = await ajax('/xxx')  // resolve(reponse)--->resolve(response.data)
// const result = response.data
if(result.code===0) {

}
 */
/*
* 用来统一发送ajax请求的模块
* 封装axios返回一个promise对象
* */
/*
import axios from "axios"
import qs from 'qs';
export default function ajax(url,data={},method="GET") {
  return new Promise((resolve, reject)=>{
    let promise;
    if(method==="GET"){
      let queryStr = '';
      let keysArr = Object.keys(data);
      keysArr.forEach((key)=>{
        queryStr += `${key}=${data[key]}$`
      });
      if(queryStr!==''){
        queryStr = queryStr.substring(0,queryStr.length-1);
        url += '?' + queryStr;
      }
      promise=axios.get(url);
    }else{
      promise=axios.post(url,qs.stringify(data), {headers: {'Content-Type':'application/x-www-form-urlencoded'}});
    }
    //为了外部拿数据的时候直接拿到data
    promise.then((response)=>{
      resolve(response.data)
    }).catch((err)=>{
      reject(err)
    })
  })
}
*/
