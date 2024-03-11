// 1.导入fs模块
const fs = require('fs')

// 2.stat方法
fs.stat('../资料/video1.mp4', (err, data) => {
  if (err) {
    console.log('操作失败')
    return
  }
  //   console.log(data)
  // isFile 查看是否为文件
  console.log(data.isFile())
  // isDirectory 查看是否为文件夹
  console.log(data.isDirectory())
})
