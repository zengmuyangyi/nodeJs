const express = require('express')
const router = express.Router()
// 导入
const formidable = require('formidable')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
// 显示网页的表单
router.get('/portrait', (req, res) => {
  res.render('portrait')
})
// 出阿里文件上传
router.post('/portrait', (req, res) => {
  const referer = req.get('referer')
  if (referer) {
    const url = new URL(referer)
    console.log(url)
    // 获取hostname
    const origin = url.origin
    // 创建表表单对象
    const form = formidable({
      multipart: true,
      // 设置上传文件的保存目录
      uploadDir: __dirname + '/../public/images',
      // 保持文件后缀
      keepExtensions: true,
    })
    // 解析请求报文
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err)
        return
      }
      // console.log(fields)
      // console.log(files)
      // res.json({ fields, files })
      // 服务器保存该图片的访问URL
      const url = origin + '/images/' + files.portrait.newFilename //将来将此数据保存在数据库中
      res.send(url)
    })
  }
})
router
module.exports = router
