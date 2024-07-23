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

  //   设置字段
  //   BookModel.find()
  //     .select({ name: 1, author: 1, _id: 0 })
  //     .then((err, res) => {
  //       if (err) {
  //         console.log(err)
  //         return
  //       }
  //       console.log(res)
  //       mongoose.connection.close()
  //     })
  //   数据排序
  //   BookModel.find()
  //     .select({ name: 1, price: 1, _id: 0 })
  //     .sort({ price: -1 })
  //     .then((err, res) => {
  //       if (err) {
  //         console.log(err)
  //         return
  //       }
  //       console.log(res)
  //       mongoose.connection.close()
  //     })
  //   数据截取
  BookModel.find()
    .select({ name: 1, price: 1, _id: 0 })
    .sort({ price: -1 })
    .skip(3)
    .limit(3)
    .then((err, res) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(res)
      mongoose.connection.close()
    })
})
mongoose.connection.on('error', () => {
  console.log('连接失败')
})
mongoose.connection.on('close', () => {
  console.log('连接断开')
})
