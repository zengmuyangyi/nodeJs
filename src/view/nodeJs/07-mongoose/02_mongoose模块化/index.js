// 导入db文件
const db = require('./db/db')
// 导入BookModel
const BookModel = require('./models/BookModel')
// 调用函数
db(() => {
  BookModel.create({
    name: '三体·黑暗森林',
    author: '刘慈欣',
    price: 18.8,
  }).then((err, res) => {
    // 判断是否有错误
    if (err) {
      console.log(err)
      return
    }
    // 未出错则输出插入后的文档对象
    console.log(res)
  })
})
