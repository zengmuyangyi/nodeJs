import axios from 'axios'
import { parseObject } from '@/untils'
import { Message } from '@arco-design/web-vue'

const http = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : window.config && window.config.baseUrl,
})
// axios.defaults.baseURL = import.meta.env.DEV ? '/api' : window.config && window.config.baseUrl
const isDev = import.meta.env.MODE === 'development'
const project = getExtConfig()
http.interceptors.request.use(
  (config) => {
    console.log(
      '%c [ query ]-9',
      'font-size:13px; background:pink; color:#bf2c9f;',
      project.project
    )
    if (config.custom?.auth && window.localStorage.getItem('tToken')) {
      config.headers.tpAuthToken = window.localStorage.getItem('tToken')
    }
    if (config.url.includes('mobile')) {
      config.url = config.url + `?project=${project.project}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
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
    } else if (response.data.resCode !== 200) {
      const data = response.data
      const message = data.errInfo
      Message.error({
        content: message,
        duration: 5000,
      })
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
    project = 'liubangguli'
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
      query.project = 'liubangguli'
    }
    project = query.project
    console.log('%c [ project ]-92', 'font-size:13px; background:pink; color:#bf2c9f;', project)
  }

  return {
    project: project,
  }
}
export default http
