// 1、导入express
const express = require('express')
// 2、创建应用对象
const app = express()
// 3、创建get路由
app.get('/home', (req, res) => {
  res.send('网站首页')
})
// 4、首页路由
app.get('/', (req, res) => {
  res.send('我才是真正的首页')
})
// 5、创建post路由
app.post('/login', (req, res) => {
  res.send('login')
})
// 匹配所有的方法
app.all('/test', (req, res) => {
  res.send('test')
})
// 404响应（托底规则）
app.all('*', (req, res) => {
  res.send('404 not Found')
})
// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已启动， 端口3000正在监听中。。。')
})
