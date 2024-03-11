import http from './request'

// 提交留言信息
export async function postMessage(params) {
  return http.post('/mobile/template/message/add', params)
}

// 获取留言列表
export async function getMessage({ pageNum, pageSize }) {
  const params = {
    pageNum,
    pageSize,
    status: 1,
  }
  return http.post('/mobile/template/message/list', params)
}
// 提交意见
export function addFeedBack(params) {
  return http.post('/mobile/template/feedBack/add', params)
}
