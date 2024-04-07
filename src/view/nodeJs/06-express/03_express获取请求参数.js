// 1、导入express
const express = require('express')
// 2、创建express应用对象
const app = express()
// 3、获取请求的路由规则
app.get('/', (req, res) => {
  // 获取报文的方式与原生HTTP获取方式是兼容的
  console.log(req.method)
  console.log(req.url)
  console.log(req.httpVersion)
  console.log(req.headers)

  // express独特的过去报文的方式
  // 获取查询字符串
  console.log(req.query) //  【相对重要】
  console.log(req.path)
  // 获取指定的请求头
  console.log(req.get('host'))
  //   获取ip
  console.log(req.ip)

  res.send('请求报文的获取')
})

// 4、启动服务
app.listen(3000, () => {
  console.log('服务已启动， 端口3000正在监听中。。。')
})
