// 导入mongoose模块
const mongoose = require('mongoose')
// 创建文档的结构对象(设置集合中的书写以及属性值的类型)
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
})
// 创建模型对象
const BookModel = mongoose.model('books', BookSchema)
// 暴露模型对象
module.exports = BookModel
