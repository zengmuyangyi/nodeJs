import axios from 'axios'
import { parseObject } from '@/untils'
import { Message } from '@arco-design/web-vue'

const thttp = axios.create({
  baseURL: import.meta.env.DEV ? '/ticket' : 'http://218.92.173.186:100',
})
const isDev = import.meta.env.MODE === 'development'
const project = getExtConfig()
thttp.interceptors.request.use(
  (config) => {
    console.log(
      '%c [ query ]-9',
      'font-size:13px; background:pink; color:#bf2c9f;',
      project.project
    )
    if (config.custom?.auth && window.localStorage.getItem('ctiketToken')) {
      config.headers.Clearauthtoken = window.localStorage.getItem('ctiketToken')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

thttp.interceptors.response.use(
  (response) => {
    if (response.config.url.indexOf('weather') > -1) {
      return response.data
    }
    if (response.data.resCode === 200) {
      const data = response.data.extraInfo
      if (data) {
        parseObject(data)
      }

      const listData = response.data.extraInfo?.list || []

      // JSON字符串数据预处理
      listData.forEach((item) => {
        parseObject(item)
      })
      return data || response.data
    } else if (response.data.status === '1') {
      const data = response.data.forecasts
      return data
    } else if (response.data.data) {
      return response.data.data
    } else if (response.data.resCode !== 200) {
      const data = response.data
      const message = data.errInfo
      return data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
function getExtConfig() {
  let project = ''
  if (isDev) {
    project = 'taohuayuan'
  } else {
    const query = {}
    const search = location.href.split('?')[1]

    if (search) {
      const params = search.split('&')
      params.forEach((param) => {
        const [key, value] = param.split('=')
        query[key] = value
      })
    } else {
      query.project = 'taohuayuan'
    }
    project = query.project
    console.log('%c [ project ]-92', 'font-size:13px; background:pink; color:#bf2c9f;', project)
  }

  return {
    project: project,
  }
}
export default thttp
