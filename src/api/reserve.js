import http from './request'

// 添加入园预约
export function addReserve(params) {
  return http.post('/mobilenew/template/templateActivity/add', params, {
    custom: { auth: true },
  })
}
