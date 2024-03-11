import http from './request'
// 获取景区动态
export async function getTravelNotes() {
  const params = {
    pageNum: 0,
    pageSize: 0,
  }
  return http.post('/mobile/template/article/list', params)
}
export async function getTravelNoteDetail(id) {
  const params = {
    pageNum: 0,
    pageSize: 0,
    id: id,
  }
  return http.post('/mobile/template/article/detail', params)
}
