const express = require('express')
const router = express.Router()
const dayjs = require('dayjs')
// 导入Account模型
const AccountModel = require('../../models/AccountModel')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
// 记账本列表
router.get('/account', (req, res, next) => {
  AccountModel.find()
    .sort({ time: -1 })
    .then((data) => {
      console.log(res)
      //   响应成功的提示
      res.json({
        // 响应编号
        code: '0000',
        // 响应的信息
        msg: '数据获取成功',
        // 响应的数据
        data: data,
      })
    })
    .catch((err) => {
      res.json({
        code: '1001',
        msg: '数据获取失败',
        data: null,
      })
    })
})
// 获取单条账单
router.get('/account/:id', (req, res, next) => {
  // 获取params的id参数
  const id = req.params.id
  AccountModel.findById({ _id: id })
    .then((data) => {
      //   响应成功的提示
      res.json({
        // 响应编号
        code: '0000',
        // 响应的信息
        msg: '数据获取成功',
        // 响应的数据
        data: data,
      })
    })
    .catch((err) => {
      res.json({
        code: '1001',
        msg: '数据获取失败',
        data: null,
      })
    })
})
// 新增记录
router.post('/account', (req, res) => {
  // 获取请求体的数据
  console.log(req.body)
  // 写入文件
  AccountModel.create({ ...req.body, time: new Date(req.body.time) })
    .then((data) => {
      res.json({
        code: '0000',
        msg: '创建成功',
        data: data,
      })
    })
    .catch((err) => {
      res.json({
        code: '1002',
        msg: '数据写入失败',
        data: null,
      })
    })
})
// 删除记录
router.delete('/account/:id', (req, res) => {
  // 获取params的id参数
  const id = req.params.id
  // 删除
  AccountModel.deleteOne({ _id: id })
    .then((data) => {
      res.json({
        code: '0000',
        msg: '删除成功',
        data: {},
      })
    })
    .catch((err) => {
      res.json({
        code: '1003',
        msg: '删除账单失败',
        data: null,
      })
    })
})
// 更新账单
router.patch('/account/:id', (req, res) => {
  // 获取params的id参数
  const id = req.params.id
  // 删除
  AccountModel.updateOne({ _id: id }, req.body)
    .then((data) => {
      // 再次查询数据库 获取单条数据
      AccountModel.findById({ _id: id })
        .then((data) => {
          //   响应成功的提示
          res.json({
            code: '0000',
            msg: '更新账单成功',
            data: data,
          })
        })
        .catch((err) => {
          res.json({
            code: '1001',
            msg: '数据获取失败',
            data: null,
          })
        })
    })
    .catch((err) => {
      res.json({
        code: '1005',
        msg: '更新账单失败',
        data: null,
      })
    })
})
module.exports = router
