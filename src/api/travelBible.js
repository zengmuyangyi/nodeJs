import http from './request'
// 获取食物信息
export async function getFoods({ pageNum, pageSize }) {
  const params = {
    pageNum,
    pageSize,
  }
  return http.post('/mobile/template/restaurant/list', params)
}
// 获取景点信息
export async function getScenic({ pageNum, pageSize, typeId }) {
  const params = {
    pageNum,
    pageSize,
    typeId,
  }
  return http.post('/mobile/template/mapPOI/list', params)
}
// 获取游玩项目信息
export async function getEntertainment({ pageNum, pageSize }) {
  const params = {
    pageNum,
    pageSize,
  }
  return http.post('/mobile/template/place/list', params)
}
