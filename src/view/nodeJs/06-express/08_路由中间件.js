/**
 * 针对 /admin  /setting 的请求，要求 URL 携带 code=521 参数，如未携带提示【暗号错误】
 */

// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 声明中间件
const checkCodeMiddleware = (req, res, next) => {
  // 判断URL中是否code参数等于521
  if (req.query.code === '521') {
    next()
  } else {
    res.send('暗号错误')
  }
}

// 设置响应
app.get('/home', (req, res) => {
  res.send('前台首页')
})
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台首页')
})
app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('设置页面')
})
app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中...')
})
