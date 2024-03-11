// 1. 引入fs模块
const fs = require('fs')

// 2. 调用 appendFile
// fs.appendFile('./座右铭.txt', '，择其善者而从之，其不善者而改之', (err) => {
//   if (err) {
//     console.log('追加写入失败')
//     return
//   }
//   console.log('追加写入成功')
// })

// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣')

// writeFile 实现追加写入
fs.writeFile('./座右铭.txt', '\r\n学而不思则罔，思而不学则殆', { flag: 'a' }, (err) => {
  if (err) {
    console.log('写入失败~')
    return
  }
  console.log('写入成功')
})
