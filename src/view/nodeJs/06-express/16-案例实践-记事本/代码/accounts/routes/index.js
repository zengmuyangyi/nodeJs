const express = require('express')
const router = express.Router()
// 导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
//  获取db对象
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)
// 导入shortid
const shortid = require('shortid')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
// 记账本列表
router.get('/account', (req, res, next) => {
  const list = db.get('accounts').value()
  res.render('list', { list })
})
// 添加记录
router.get('/account/add', (req, res, next) => {
  res.render('add')
})
// 新增记录
router.post('/account', (req, res) => {
  // 生成id
  const id = shortid.generate()
  // 获取请求体的数据
  console.log(req.body)
  // 写入文件
  db.get('accounts')
    .unshift({ id: id, ...req.body })
    .write()
  res.render('success', { msg: '已添加成功', url: '/account' })
})
// 删除记录
router.get('/account/:id', (req, res) => {
  // 获取params的id参数
  const id = req.params.id
  // 删除
  db.get('accounts').remove({ id }).write()
  // 提醒
  res.render('success', { msg: '删除成功', url: '/account' })
})
module.exports = router
