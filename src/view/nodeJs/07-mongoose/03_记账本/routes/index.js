const express = require('express')
const router = express.Router()
const dayjs = require('dayjs')
// 导入db文件
const db = require('../db/db')
// 导入Account模型
const AccountModel = require('../models/AccountModel')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
// 记账本列表
router.get('/account', (req, res, next) => {
  AccountModel.find()
    .sort({ time: -1 })
    .then((data, err) => {
      if (err) {
        console.log(err)
        res.status(500).send('数据获取失败')
        return
      }
      console.log(res)
      res.render('list', { list: data, dayjs: dayjs })
    })
  // const list = db.get('accounts').value()
  // res.render('list', { list })
})
// 添加记录
router.get('/account/add', (req, res, next) => {
  res.render('add')
})
// 新增记录
router.post('/account', (req, res) => {
  // 获取请求体的数据
  console.log(req.body)
  // 写入文件
  AccountModel.create({ ...req.body, time: new Date(req.body.time) }).then((data, err) => {
    if (err) {
      console.log(err)
      res.status(500).send('插入失败~~~')
      return
    }
    res.render('success', { msg: '已添加成功', url: '/account' })
  })
})
// 删除记录
router.get('/account/:id', (req, res) => {
  // 获取params的id参数
  const id = req.params.id
  // 删除
  AccountModel.deleteOne({ _id: id }).then((data, err) => {
    if (err) {
      console.log(err)
      res.status(500).send('删除失败')
      return
    }
    // 跳转列表页
    res.render('success', { msg: '删除成功', url: '/account' })
  })
})
module.exports = router
