// 1、导入express
const express = require('express')
// 导入cookie-parser中间件
const cookieParser = require('cookie-parser')
// 2、创建应用对象
const app = express()
app.use(cookieParser())
// 3、创建路由
app.get('/get-cookie', (req, res) => {
  console.log('Cookies: ', req.cookies)
  // 获取cookie
  const name = req.cookies.name
  res.send(`欢迎${name}`)
})
app.get('/set-cookie', (req, res) => {
  //   res.cookie('name', 'zhangsan') //会在浏览器关闭的时候销毁
  res.cookie('name', 'zhangsan', { maxAge: 60 * 1000 }) // 单位是毫秒
  res.cookie('them', 'blue')
  res.end('hello express')
})
// 删除cookie
app.get('/remove-cookie', (req, res) => {
  // 删除cookie
  res.clearCookie('name')
  res.send('删除成功')
})
// 4、监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已启动， 端口3000正在监听中。。。')
})
