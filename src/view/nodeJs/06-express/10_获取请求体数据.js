/**
 * 按照要求搭建HTTP服务
 *
 * GET      /login  显示表单网页
 * POST     /login  获取表单中的【用户名】和【密码】
 */

// 导入express
const express = require('express')
// 创建应用对象
const app = express()

// 导入body-parser包
const bodyParser = require('body-parser')
// 获取中间件函数
const urlParser = bodyParser.urlencoded({ extended: false }) // 处理querystring格式的请求体
const jsonParser = bodyParser.json() // 处理JSON格式的请求体的中间件

// 创建路由规则
app.get('/login', (req, res) => {
  //res.send('表单页面')
  //响应HTML文件内容
  res.sendFile(__dirname + '/10_form.html')
})
// post规则
app.post('/login', urlParser, (req, res) => {
  console.log(req.body)
  // 获取用户名密码
  res.send('欢迎' + req.body.username)
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中...')
})
