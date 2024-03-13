// 1.导入http模块
const http = require('http')

const server = http.createServer((request, response) => {
  const url = new URL(request.url, 'http://127.0.0.1')
  response.setHeader('content-type', 'text/html;charset=utf-8')
  if (url.pathname === '/login' && request.method === 'GET') {
    response.end('登录页面')
  } else if (url.pathname === '/reg' && request.method === 'GET') {
    response.end('注册页面')
  } else {
    response.end('Not Found')
  }
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已启动')
})
