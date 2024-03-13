// 导入http模块
const http = require('http')
// 1.导入url模块
const url = require('url')

// 创建服务对象
const server = http.createServer((request, response) => {
  // 2.解析request.url
  let res = url.parse(request.url, true)
  // 路径
  const pathname = res.pathname
  // 查询字符串
  const keyword = res.query
  console.log(pathname, keyword)
  response.end('url')
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已启动')
})
