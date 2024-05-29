// 导入express
const express = require('express')
// 导入path
const path = require('path')

// 创建应用实例
const app = express()
// 设置模板引擎
app.set('view engine', 'ejs')
// 设置模板文件的存在位置   模板文件：具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'))
// 创建路由
app.get('/home', (req, res) => {
  // render响应
  // res.render('模板文件名', '数据')
  const title = '学习express的ejs模板引擎'
  res.render('home', { title })
  // 创建模板文件
})

// 监听服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中...')
})
