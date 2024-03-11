import http from './requestZK'
// 获取客流人数
export function fetchFlow({ startTime, endTime }) {
  return http.get(`/zk/flow/queryPage?startTime=${startTime}&endTime=${endTime}`, {
    custom: { auth: true },
  })
}
// 用户登录
export function userLogin() {
  return http.post('/zk/user/login', {
    username: 'XZFXadmin',
    password: 'XZ1fx!@#',
  })
}
