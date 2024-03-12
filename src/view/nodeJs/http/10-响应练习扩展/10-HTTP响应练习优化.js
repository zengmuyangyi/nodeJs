// 导入http模块
const http = require('http')
const fs = require('fs')
// 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求url的路径
  if (request.url === '/') {
    // 读取文件内容
    const html = fs.readFileSync(__dirname + '/table.html')
    response.end(html) //设置响应体
  } else if (request.url === '/index.css') {
    // 读取文件内容
    const css = fs.readFileSync(__dirname + '/index.css')
    response.end(css) //设置响应体
  } else if (request.url === '/index.js') {
    // 读取文件内容
    const js = fs.readFileSync(__dirname + '/index.js')
    response.end(js) //设置响应体
  } else {
    response.statusCode = 404
    response.end('<h1>404 Not Found</h1>')
  }
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已启动')
})
