import request from './request'

export function getMenu(){
  return request({
    url:'/api/index/index'
  })
}
