import http from './request'
// 获取攻略列表
export async function getStrategy(params) {
  return http.post('/mobile/template/strategy/list', params)
}
// 获取攻略详情
export async function getStrategyDetail(id) {
  return http.post('/mobile/template/strategy/detail', { id })
}
