// 导入express
const express = require('express')

// 创建应用实例
const app = express()
// 设置模板引擎
app.set('view engine', 'ejs')
// 创建路由
app.get('/home', (req, res) => {
  res.send('这是首页')
})

// 监听服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中...')
})
