const express = require('express')
// 创建应用对象
const router = express.Router()

// 创建路由规则
router.get('/home', (req, res) => {
  res.send('这是首页')
})
router.get('/search', (req, res) => {
  res.send('这是搜索页')
})
// 暴露router
module.exports = router
