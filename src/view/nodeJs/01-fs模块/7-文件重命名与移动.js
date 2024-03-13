// 1.导入fs模块
const fs = require('fs')

// 2.调用rename方法
// fs.rename('./座右铭.txt', './论语.txt', (err) => {
//   if (err) {
//     console.log('操作失败')
//     return
//   }
//   console.log('操作成功')
// })
// 文件移动
fs.rename('./data.txt', '../资料/data.txt', (err) => {
  if (err) {
    console.log('操作失败')
    return
  }
  console.log('操作成功')
})
// 3.调用renameSync方法
// fs.renameSync('./座右铭.txt', './论语.txt')
