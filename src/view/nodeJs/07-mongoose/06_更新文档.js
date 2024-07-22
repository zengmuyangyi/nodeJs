// 1.安装mongoose
// npm install mongoose --save
// 2.导入mongoose
const mongoose = require('mongoose')
// 3.连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
// 4.设置回调
mongoose.connection.once('open', () => {
  // console.log('连接成功')
  // 5.创建文档的结构对象(设置集合中的书写以及属性值的类型)
  const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: {
      type: Boolean,
      default: false,
    },
    create_time: {
      type: Date,
      default: Date.now(),
    },
  })

  //   6.创建模型对象
  const BookModel = mongoose.model('novel', BookSchema)
  //   7.更新文档 更新一条数据
  //   BookModel.updateOne(
  //     {
  //       name: '三国演义',
  //     },
  //     { price: 23 }
  //   ).then((err, data) => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     console.log(data)
  //   })
  //   7.更新文档 更新多条数据
  BookModel.updateMany(
    {
      name: '三国演义',
    },
    { price: 23 }
  ).then((err, data) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(data)
  })
})
mongoose.connection.on('error', () => {
  console.log('连接失败')
})
mongoose.connection.on('close', () => {
  console.log('连接断开')
})
