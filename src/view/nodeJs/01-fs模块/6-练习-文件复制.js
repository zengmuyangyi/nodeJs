// 需求：复制【资料】文件夹下的【video1.mp4】

const fs = require('fs')
const process = require('process')
// // 方法一 readFile
// // 读取文件内容
// const data = fs.readFileSync('../资料/video1.mp4')
// // 写入文件
// fs.writeFileSync('../资料/video2.mp4', data)
// console.log(process.memoryUsage())
// 方法二 流式操作
// 创建读取对象
const rs = fs.createReadStream('../资料/video1.mp4')
// 创建写入流对象
const ws = fs.createWriteStream('../资料/video3.mp4')

// 绑定data事件
// rs.on('data', (chunk) => {
//   ws.write(chunk)
// })

// // 绑定结束事件
// rs.on('end', () => {
//   console.log('文件写入完成')
//   console.log(process.memoryUsage())
// })

rs.pipe(ws) //类似绑定data事件
