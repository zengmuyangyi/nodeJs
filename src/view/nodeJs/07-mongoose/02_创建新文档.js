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
  })

  //   6.创建模型对象
  const BookModel = mongoose.model('books', BookSchema)
  // 7.新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 21.5,
  }).then((err, res) => {
    // 判断是否有错误
    if (err) {
      console.log(err)
      return
    }
    // 未出错则输出插入后的文档对象
    console.log(res)
    // 8.关闭连接(项目运行过程中，不会添加该代码，因为项目运行期间，连接不会关闭)
    mongoose.disconnect()
  })
})
mongoose.connection.on('error', () => {
  console.log('连接失败')
})
mongoose.connection.on('close', () => {
  console.log('连接断开')
})
