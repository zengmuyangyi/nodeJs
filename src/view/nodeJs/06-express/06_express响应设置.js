// 1、导入express
const express = require('express')
// 2、创建应用对象
const app = express()
// 3、获取请求路由规则
app.get('/response', (req, res) => {
  // express中设置响应的方式兼容http模块的方式
  res.statusCode = 404
  res.statusMessage = 'xxx'
  res.setHeader('abc', 'xyz')
  res.write('响应体')
  res.end('xxx')

  // express的响应方法
  res.status(500) //设置响应状态码
  res.set('xxx', 'yyy') //设置响应头
  res.send('中文响应不乱码') // 设置响应体
  // 连贯操作
  res.status(404).set('xxx', 'yyy').send('你好吗')

  // 其他响应
  res.redirect('https://www.baidu.com') //重定向
  res.download('./package.json') //下载响应
  res.json() //响应json
  res.sendFile(__dirname + '/home.html') //响应文件内容
})
// 4、启动服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中。。。')
})
