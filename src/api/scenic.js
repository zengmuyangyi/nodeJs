import http from './request'
// 获取轮播图片列表
export async function fetchLoopImages(params) {
  return http.post('/mobile/template/loopImages/list', params)
}
// 获取菜单列表
export function fetchMenuList() {
  const params = {
    pageNum: 0,
    pageSize: 0,
  }
  return http.post('/mobile/menu/list', params)
}
// 获取盐城龙岗介绍
export function fetchPlaceList(params) {
  return http.post('/mobile/template/place/list', params)
}
// 获取新闻类型
export function fetchNewsType(menuId) {
  const params = {
    pageNum: 0,
    pageSize: 0,
    menuId: menuId,
    status: 1,
  }
  return http.post('/mobile/template/newsType/list', params)
}
// 获取新闻列表
export function fetchNewsList(params) {
  return http.post('/mobile/template/news/list', params)
}
// 获取新闻详情
export function fetchNews(id) {
  return http.post('/mobile/template/news/detail', { id })
}
// 获取攻略列表
export function fetchStrategyList(params) {
  return http.post('/mobile/template/strategy/list', params)
}
// 获取语言列表
export function fetchLanguageList() {
  const params = {
    pageNum: 0,
    pageSize: 0,
  }
  return http.post('/mobile/language/list', params)
}
// 获取天气
export function fetchWeather(location, lang) {
  return http.get(
    `https://api.qweather.com/v7/weather/3d?key=fb71c34f508d4bc48cc78ae6341d2002&location=${location}&lang=${lang}`
  )
}
