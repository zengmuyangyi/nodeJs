// 1.导入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求方法
  //   console.log(request.method)
  // 获取请求的url
  //   console.log(request.url) //质保函url中的路径和查询字符串
  //   获取http协议的版本号
  //   console.log(request.httpVersion)
  // 获取HTTP的请求头
  console.log(request.headers)
  response.end('http') //设置响应体
})

// 3.监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已启动')
})
