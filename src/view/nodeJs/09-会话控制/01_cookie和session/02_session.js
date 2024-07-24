// 导入express
const express = require('express')
// 引入express-session模块及connect-mongo模块
const session = require('express-session')
const MongoStore = require('connect-mongo')
// 创建应用对象
const app = express()
// 设置session中间件
app.use(
  session({
    name: 'sid', // 设置cookie的name，默认值是：connect.sid
    secret: 'studyTest', // 参与加密的字符串（又称签名） 加盐
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: true, // 是否每次都重新设置session
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/bilibili', // 数据库的连接配置
    }),
    cookie: {
      httpOnly: true, // 开启后前端无法通过js来获取cookie
      maxAge: 1000 * 60 * 5, // 设置cookie的有效时间，单位是毫秒
    },
  })
)
// 创建路由
app.get('/', (req, res) => {
  res.send(`home`)
})
// 登录
app.get('/login', (req, res) => {
  // username=admin&password=123456
  if (req.query.username === 'admin' && req.query.password === '123456') {
    // 登录成功，设置session
    req.session.username = 'admin'
    req.session.uid = '0000000001'
    res.send(`登录成功`)
  } else {
    res.send(`登录失败`)
  }
})
// session的读取
app.get('/cart', (req, res) => {
  // 监测session是否存在用户数据
  if (req.session.username) {
    res.send(`购物车页面 欢迎${req.session.username}`)
  } else {
    res.send(`请先登录`)
  }
})
// session的销毁
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send(`退出成功`)
  })
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已启动， 端口3000正在监听中。。。')
})
