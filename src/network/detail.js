import request from './request'

export function getDetail(id){
  return request({
    url:'/api/Product/detail',
    params: {
      id: id
    },
  })
}

export class Goods {
  constructor(info) {
    this.name = info.name
    this.spec = info.specification_description
    this.price = info.price
    this.fee = info.yunfei
    this.store = info.storeid
    this.total = info.totalnum

    this.attr = info.affiliate_attr
  }
}
