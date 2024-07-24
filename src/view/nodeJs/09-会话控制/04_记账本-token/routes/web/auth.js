const express = require('express')
const router = express.Router()
// 导入用户模型
const UserModel = require('../../models/UserModel')
const md5 = require('md5')
// 注册页面
router.get('/reg', (req, res) => {
  // 响应html内容
  res.render('auth/reg')
})
// 注册用户
router.post('/reg', (req, res) => {
  const { username, password } = req.body
  // 判断用户名是否为空
  if (!username && !password) return
  UserModel.create({
    username,
    password: md5(password),
  })
    .then((data) => {
      res.render('success', { msg: '注册成功', url: '/login' })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('注册失败~~~')
    })
})
// 登录页面
router.get('/login', (req, res) => {
  // 响应html内容
  res.render('auth/login')
})
// 登录用户
router.post('/login', (req, res) => {
  // 获取用户名和密码
  const { username, password } = req.body
  // 查询数据库
  UserModel.findOne({ username: username, password: md5(password) })
    .then((data) => {
      // 判断data
      console.log(data)
      if (!data) {
        return res.render('error', { msg: '账号或密码错误', url: '/login' })
      }
      //   写入session
      req.session.username = data.username
      req.session._id = data._id
      // 登录成功
      res.render('success', { msg: '登录成功', url: '/account' })
    })
    .catch((err) => {
      res.status(500).send('登录失败~~~')
    })
})
// 退出登录
router.post('/logout', (req, res) => {
  // 清除session
  req.session.destroy(() => {
    res.render('success', { msg: '退出成功', url: '/login' })
  })
})
module.exports = router
