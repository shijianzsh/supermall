import axios from 'axios'

export default function request(config){
  const instance = axios.create({
    baseURL: "", // api的base_url
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    timeout:5000
  })
  //发送真正的网络请求
  return instance(config)
}
