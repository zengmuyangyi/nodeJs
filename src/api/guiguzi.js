import http from './request'
// 获取介绍类型
export async function getPersonType() {
  const params = {
    pageNum: 0,
    pageSize: 0,
    status: 1,
    parentId: 0,
  }
  return http.get('/mobile/template/type', params)
}
// 获取介绍内容
export async function fetchPersonList({ parentId }) {
  return http.get(`/mobile/template/typeChild/${parentId}`)
}
