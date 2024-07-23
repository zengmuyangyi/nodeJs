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
  // 价格小于30的图书
  //   BookModel.find({ price: { $lt: 30 } }).then((err, res) => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     console.log(res)
  //   })
  //   获取鲁迅或曹雪芹的书
  //   BookModel.find({ $or: [{ author: '鲁迅' }, { author: '曹雪芹' }] }).then((err, res) => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     console.log(res)
  //   })
  //   获取价格大于30小于40的书
  //   BookModel.find({ $and: [{ price: { $gt: 30 } }, { price: { $lt: 40 } }] }).then((err, res) => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     console.log(res)
  //   })
  //   正则表达式查询，查询名字中包含“花”的图书
  //   BookModel.find({ name: /花/ }).then((err, res) => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     console.log(res)
  //   })
  BookModel.find({ name: new RegExp('三') }).then((err, res) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(res)
  })
})
mongoose.connection.on('error', () => {
  console.log('连接失败')
})
mongoose.connection.on('close', () => {
  console.log('连接断开')
})
