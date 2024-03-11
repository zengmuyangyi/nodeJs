// 1.导入fs模块
const fs = require('fs')

// 2.创建文件夹 mk: make 制作  dir: directory 文件夹
// fs.mkdir('./html', (err) => {
//   if (err) {
//     console.log('创建失败')
//     return
//   }
//   console.log('创建成功')
// })

// 2-2 递归创建
// fs.mkdir('./a/b/c', { recursive: true }, (err) => {
//   if (err) {
//     console.log('创建失败')
//     return
//   }
//   console.log('创建成功')
// })

// 2-3读取文件夹
// fs.readdir('../资料', (err, data) => {
//   if (err) {
//     console.log('读取失败')
//     return
//   }
//   console.log(data)
// })

// 2-4删除文件夹
// fs.rmdir('./html', (err) => {
//   if (err) {
//     console.log('删除失败')
//     return
//   }
//   console.log('删除成功')
// })

// 递归删除 不推荐使用
// fs.rmdir('./a', { recursive: true }, (err) => {
//   if (err) {
//     console.log('删除失败', err)
//     return
//   }
//   console.log('删除成功')
// })

// 建议使用
fs.rm('./a', { recursive: true }, (err) => {
  if (err) {
    console.log('删除失败', err)
    return
  }
  console.log('删除成功')
})
