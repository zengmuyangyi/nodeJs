// 引入express
const express = require('express')
const homeRouter = require(__dirname + '/routes/homeRouter')
const adminRouter = require(__dirname + '/routes/adminRouter')
// 创建应用
const app = express()
// 设置
app.use(homeRouter)
app.use(adminRouter)

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中...')
})
