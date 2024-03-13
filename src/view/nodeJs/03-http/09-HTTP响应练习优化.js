// 导入http模块
const http = require('http')
const fs = require('fs')
// 创建服务对象
const server = http.createServer((request, response) => {
  //  响应头(可自定义)
  response.setHeader('content-type', 'text/html;charset=utf-8')
  // 读取文件内容
  const html = fs.readFileSync(__dirname + '/table.html')
  response.end(html) //设置响应体
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已启动')
})
