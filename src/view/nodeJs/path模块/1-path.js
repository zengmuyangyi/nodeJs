// 1.导入fs模块
const fs = require('fs')
const path = require('path')
// 2.写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love')

// resolve
// console.log(path.resolve(__dirname, './index.html'))
// console.log(path.resolve(__dirname, 'index.html'))
// console.log(path.resolve(__dirname, '/index.html')) 绝对路径到当前盘下最前

// sep 分隔符(查看当前操作系统的分隔符)
// console.log(path.sep)   \：windows; /：Linux

// parse 方法
// console.log(__filename) //文件的绝对路径
const str =
  'D:\\project\\我的学习项目\\clearticket_yijiyou_website\\src\\view\nodeJs\\path模块\\1-path.js'
// console.log(path.parse(str))

// basename
// console.log(path.basename(str))

// dirname
// console.log(path.dirname(str))

// extname
console.log(path.extname(str))
