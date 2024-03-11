import http from './request'
// 获取天气
export async function getWeather(city) {
  return http.get(
    `https://restapi.amap.com/v3/weather/weatherInfo?key=4f9f2f435e2a5bb38ae4d360ebb212c8&city=${city}&extensions=all`
  )
}
// 获取景区信息
export async function fetchCurrentScenic() {
  const params = {
    pageNum: 0,
    pageSize: 0,
  }
  return http.post('/mobile/template/scenic/list', params)
}
// 获取热销产品列表
export async function getProduct({ pageNum, pageSize }) {
  const params = { pageNum, pageSize }
  return http.post('/mobile/template/sale/list', params)
}
// 获取某个产品信息
export async function getProductDetail(id) {
  return http.post('/mobile/template/sale/detail', { id })
}
// 获取POI分类
export async function fetchScenicType(params) {
  return http.post('/mobile/template/mapPOIType/list', params)
}
// 获取景点列表
export async function getScenic(params) {
  return http.post('/mobile/template/mapPOI/list', params)
}
// 获取某个景点信息
export async function getScenicDetail(scenicId) {
  return http.post('/mobile/template/mapPOI/selectById', { id: scenicId })
}
// 获取推荐酒店列表
export async function getHotel({ pageNum, pageSize }) {
  const params = { pageNum, pageSize, status: 1 }
  return http.post('/mobile/template/hotel/list', params)
}
// 获取某个酒店信息
export async function getHotelDetail(hotelId) {
  return http.post('/mobile/template/hotel/detail', { id: hotelId })
}
export async function getRoomTypeList(hotelId) {
  return http.post('/mobile/template/hotel/roomTypeList', { hotelId: hotelId })
}
// 获取轮播图列表
export async function getPicture() {
  const params = { pageNum: 0, pageSize: 0 }
  return http.post('/mobile/template/loopImages/list', params)
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
