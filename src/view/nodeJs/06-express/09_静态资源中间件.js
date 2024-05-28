// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 静态资源中间件的设置
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/home', (req, res) => {
  res.end('hello express')
})
// 监听端口，启动服务
app.listen(4000, () => {
  console.log('服务已启动，4000端口监听中...')
})
