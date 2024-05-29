const express = require('express')
// 创建应用对象
const router = express.Router()

// 创建路由规则
router.get('/admin', (req, res) => {
  res.send('这是管理端')
})
router.get('/setting', (req, res) => {
  res.send('这是设置页')
})
// 暴露router
module.exports = router
