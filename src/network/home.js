import request from './request'

export function getMenu(){
  return request({
    url:'/api/Index/index'
  })
}

export function getHomeProduct(block_id, page) {
  return request({
    url: '/api/Search/index',
    params: {
      block_id,
      page
    }
  })
}
