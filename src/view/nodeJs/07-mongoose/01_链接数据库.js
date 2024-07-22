// 1.安装mongoose
// npm install mongoose --save
// 2.导入mongoose
const mongoose = require('mongoose')
// 3.连接mongodb服务
// 语法：mongoose.connect(url, [options])
// url: mongodb://localhost/test
// options: { user: 'root', pass: '<PASSWORD>' }
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
// 4.设置回调
mongoose.connection.on('open', () => {
  console.log('连接成功')
})
mongoose.connection.on('error', () => {
  console.log('连接失败')
})
mongoose.connection.on('close', () => {
  console.log('连接断开')
})
// 关闭MongoDB的连接
setTimeout(() => {
  mongoose.disconnect()
}, 2000)
