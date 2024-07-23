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
  // 7.新增
  BookModel.insertMany([
    {
      name: '西游记',
      author: '吴承恩',
      price: 43.9,
      is_hot: true,
    },
    {
      name: '三国演义',
      author: '罗贯中',
      price: 39,
      is_hot: true,
    },
    {
      name: '红楼梦',
      author: '曹雪芹',
      price: 22.8,
      is_hot: true,
    },
    {
      name: '水浒传',
      author: '施耐庵',
      price: 48,
      is_hot: true,
    },
    {
      name: '朝花夕拾',
      author: '鲁迅',
      price: 9.36,
    },
    {
      name: '儒林外史',
      author: '吴敬梓',
      price: 19.8,
    },
    {
      name: '聊斋志异',
      author: '蒲松龄',
      price: 27.3,
    },
    {
      name: '白洋淀纪事',
      author: '孙犁',
      price: 15.9,
    },
    {
      name: '基督山伯爵',
      author: '大仲马',
      price: 34.3,
    },
    {
      name: '罗生门',
      author: '芥川龙之介',
      price: 12.51,
    },
  ]).then((err, res) => {
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
