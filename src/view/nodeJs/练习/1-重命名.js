// 1.导入fs模块
const fs = require('fs')

// 2.读取 code 文件夹
const files = fs.readdirSync(__dirname + '/code')

// 遍历数组
files.forEach((item, index) => {
  const data = item.split('-')
  let [num, name] = data //解构赋值
  num = index + 1 < 10 ? '0' + (index + 1) : index + 1

  // 创建新的文件名
  const newName = num + '-' + name
  // 重命名
  fs.renameSync(`./code/${item}`, `./code/${newName}`)
})
