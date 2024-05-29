// 引入express
const express = require('express')
// 创建应用对象
const app = express()
// 声明中间件
app.use((req, res, next) => {
  // 监测请求头中的referer是否为127.0.0.1
  // 获取referer
  const referer = req.get('referer')
  if (referer) {
    // 实例化
    const url = new URL(referer)
    // 获取hostname
    const hostname = url.hostname
    console.log(hostname)
    // 判断
    if (hostname !== '127.0.0.1') {
      // 响应404
      res.status(404).send('<h1>404 Not Found</h1>')
      return
    }
  }
  next()
})
// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))
// 监听服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中...')
})
