import http from './request'
// 获取景区动态
export async function getDynamic() {
  const params = {
    pageNum: 0,
    pageSize: 0,
    recommend: 0,
    typeId: 20,
  }
  return http.post('/mobile/template/news/list', params)
}
// 获取新闻类型
export async function getNewsType() {
  const params = { pageNum: 0, pageSize: 0, status: 1 }
  return http.post('/mobile/template/newsType/list', params)
}
// 获取资讯
export async function getNews({ pageNum, pageSize, typeId }) {
  const params = { pageNum, pageSize, typeId }
  return http.post('/mobile/template/news/list', params)
}
// 获取新闻详细
export async function getNewsDetail(id) {
  return http.post('/mobile/template/news/detail', { id })
}
