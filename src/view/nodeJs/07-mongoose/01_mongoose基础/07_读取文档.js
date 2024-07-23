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
  // 7.读取单条
  //   BookModel.findOne({
  //     name: '西游记',
  //   }).then((err, doc) => {
  //     if (err) return console.log(err)
  //     console.log('读取成功', doc)
  //   })
  // 根据id读取
  //   BookModel.findById('669e1bfe220411b65515352b').then((err, doc) => {
  //     if (err) return console.log(err)
  //     console.log('读取成功', doc)
  //   })
  //   批量读取
  BookModel.find({
    is_hot: true,
  }).then((err, doc) => {
    if (err) return console.log(err)
    console.log('读取成功', doc)
  })
})
mongoose.connection.on('error', () => {
  console.log('连接失败')
})
mongoose.connection.on('close', () => {
  console.log('连接断开')
})
