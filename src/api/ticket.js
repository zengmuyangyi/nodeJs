import thttp from './tiketRequest'

// 登录获取token
export function getToken() {
  return thttp.post('/login/auth', {
    username: 'admin',
    password: '123456',
  })
}
// 再调用一次
export function fetchAuthorizationInfo() {
  return thttp.post('/login/getAuthorizationInfo', '', { custom: { auth: true } })
}
// 获取进出口人数
export function fetchCheckerChannel(params) {
  return thttp.post('/checkerChannel/getCheckerChannelTrafficRecord', params, {
    custom: { auth: true },
  })
}
// 获取检票人数
export function fetchTicketCheck(params) {
  return thttp.post('/orderStatistics/getTicketCheckByQueryTime', params, {
    custom: { auth: true },
  })
}
// 获取检票设备
export function fetchCheckerList() {
  return thttp.post(
    '/checker/getCheckerList',
    {
      pageSize: 999,
      pageNum: 1,
    },
    {
      custom: { auth: true },
    }
  )
}
