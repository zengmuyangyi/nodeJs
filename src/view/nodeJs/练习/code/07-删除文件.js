// 1.导入fs模块
const fs = require('fs')

// 2.调用unlink方法
// fs.unlink('./观书有感.txt', (err) => {
//   if (err) {
//     console.log('删除失败')
//     return
//   }
//   console.log('删除成功')
// })

// 调用rm方法 14.4方法
fs.rm('./论语.txt', (err) => {
  if (err) {
    console.log('删除失败')
    return
  }
  console.log('删除成功')
})
