import http from './request'
// 获取景区动态
export async function getVideo({ pageNum, pageSize }) {
  const params = {
    pageNum,
    pageSize,
  }
  return http.post('/mobile/template/video/list', params)
}

// 提交预定信息
export async function postBookInfo(params) {
  return http.post('/mobile/template/booking/add', params)
}
