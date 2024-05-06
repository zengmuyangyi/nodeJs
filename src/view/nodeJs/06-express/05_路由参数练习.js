// 1、导入express
const express = require('express')
// 2、创建应用对象
const app = express()
// 数据对象
const starList = [
  {
    id: 1,
    name: '周杰伦',
    image: 'https://pqntourism.pcleartv.cn/FjhyY2j-qVyqo8Guhka6z_iqAQxh',
  },
  {
    id: 2,
    name: '林俊杰',
    image: 'https://pqntourism.pcleartv.cn/FqoYUgf1-Vj0-7nGQPpBC-_a9mRd',
  },
  {
    id: 3,
    name: '陶喆',
    image: 'https://pqntourism.pcleartv.cn/FvDnIFcVNV2qRSdAjZu7uoCYqzRn',
  },
]
// 3、获取请求路由规则
app.get('/singer/:id.html', (req, res) => {
  // 获取URL路由参数
  console.log(req.params.id)
  res.setHeader('content-type', 'text/html;charset=utf-8')
  const star = starList.find((item) => item.id === Number(req.params.id))
  console.log(star)
  if (star) {
    res.send(`
    <div>
        <div>${star.name}</div>
        <div style="width: 200px; height: 200px; border-radius: 200px; background-image: url(${star.image}); background-size: cover; background-position: center"></div>
    </div>
    `)
  } else {
    res.statusCode = 404
    res.send('404 not Found')
  }
})
// 4、启动服务
app.listen(3000, () => {
  console.log('服务已启动，3000端口监听中。。。')
})
