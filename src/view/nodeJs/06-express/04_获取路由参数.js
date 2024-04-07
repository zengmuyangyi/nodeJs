// 1、导入express
const express = require('express')
// 2、创建应用对象
const app = express()
// 3、获取请求路由规则
app.get('/:id.html', (req, res) => {
  // 获取URL路由参数
  console.log(req.params.id)
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.send('商品详情')
})
// 4、启动服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中。。。')
})
