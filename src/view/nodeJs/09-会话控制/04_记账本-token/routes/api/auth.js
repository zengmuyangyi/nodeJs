const express = require('express')
const router = express.Router()
// 导入用户模型
const UserModel = require('../../models/UserModel')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')
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
      res.json({
        code: '200',
        msg: '注册成功',
        data: data,
      })
    })
    .catch((err) => {
      res.json({
        code: '500',
        msg: '内部错误',
        data: null,
      })
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
        return res.json({
          code: '403',
          msg: '登录错误，请检查用户名和密码',
          data: null,
        })
      }
      //   创建当前用户的token
      const token = jwt.sign(
        {
          username: data.username,
          _id: data._id,
        },
        secret,
        {
          expiresIn: 60 * 60 * 24 * 7,
        }
      )
      // 登录成功
      res.json({
        code: '200',
        msg: '登录成功',
        data: token,
      })
    })
    .catch((err) => {
      res.json({
        code: '500',
        msg: '内部错误',
        data: null,
      })
    })
})
// 退出登录
router.post('/logout', (req, res) => {
  // 清除session
  req.session.destroy(() => {
    res.json({
      code: '200',
      msg: '退出登录成功',
      data: null,
    })
  })
})
module.exports = router
