import http from './request'
// 用户注册
export function registerUser(params) {
  return http.post('/unionlogin/register', params)
}
// 用户登录
export function login(params) {
  return http.post('/unionlogin/doLogin', params)
}
// 用户登出
export function logout() {
  return http.post('/unionlogin/logout')
}
