// 1.引入fs模块
const fs = require('fs')

// 2.创建读取流对象
const rs = fs.createReadStream('../资料/video1.mp4')

// 3.绑定data时间     chunk 块儿   大块儿
rs.on('data', (chunk) => {
  console.log(chunk.length)
})

// 4.end 可选事件
rs.on('end', () => {
  console.log('读取完成')
})
