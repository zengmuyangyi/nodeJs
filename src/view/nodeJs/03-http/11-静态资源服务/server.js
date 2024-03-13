/**
 * 创建一个HTTP服务，端口为9000，满足以下要求
 * GET  /index.html         响应  page/index.html  的文件内容
 * GET  /css/app.css        响应  page/css/app.css  的文件内容
 * GET  /images/logo.png    响应  page/images/logo.png  的文件内容
 */
// 导入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json',
}
// 创建服务对象
const server = http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.statusCode = 405
    response.end('<h1>405 Method Not Allowed</h1>')
    return
  }
  // 获取请求url的路径
  const { pathname } = new URL(request.url, 'http://127.0.0.1')
  // 拼接文件路径
  const filePath = __dirname + '/page' + pathname
  //   读取文件fs异步API
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader('content-type', 'text/html;charset=utf-8')
      //   判断错误代号
      switch (err.code) {
        case 'ENOENT':
          response.statusCode = 404
          response.end('<h1>404 Not Found</h1>')
          break
        case 'EPERM':
          response.statusCode = 403
          response.end('<h1>403 Forbidden</h1>')
          break

        default:
          response.statusCode = 500
          response.end('<h1>Internal Server Error</h1>')
          break
      }
      return
    }
    // 获取文件后缀名
    const ext = path.extname(filePath).slice(1)
    if (mimes[ext]) {
      if (ext === 'html') {
        response.setHeader('content-type', `${mimes[ext]};charset=utf-8`)
      } else {
        response.setHeader('content-type', `${mimes[ext]}`)
      }
    } else {
      response.setHeader('content-type', 'application/octet-stream')
    }
    // 响应文件内容
    response.end(data)
  })
  //   // 获取请求url的路径
  //   if (request.url === '/index.html') {
  //     // 读取文件内容
  //     const html = fs.readFileSync(__dirname + '/page/index.html')
  //     response.end(html) //设置响应体
  //   } else if (request.url === '/css/app.css') {
  //     // 读取文件内容
  //     const css = fs.readFileSync(__dirname + '/page/css/app.css')
  //     response.end(css) //设置响应体
  //   } else if (request.url === '/imges/logo.png') {
  //     // 读取文件内容
  //     const js = fs.readFileSync(__dirname + '/page/image/logo.js')
  //     response.end(js) //设置响应体
  //   } else {
  //     response.statusCode = 404
  //     response.end('<h1>404 Not Found</h1>')
  //   }
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已启动')
})
