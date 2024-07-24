const jwt = require('jsonwebtoken')
const { secret } = require('../config/config')
// 声明中间件监测登录
module.exports = (req, res, next) => {
  // 获取token
  const token = req.get('token')
  // 判断
  if (!token) {
    return res.json({
      code: '403',
      msg: '用户未登录',
      data: null,
    })
  }
  jwt.verify(token, secret, (err, data) => {
    if (!err) {
      return res.json({
        code: '403',
        msg: 'token已过期',
        data: null,
      })
    }
    // 保存用户信息
    req.user = data
    next()
  })
}
