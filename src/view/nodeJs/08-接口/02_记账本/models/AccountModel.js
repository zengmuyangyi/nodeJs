// 导入mongoose模块
const mongoose = require('mongoose')
// 创建文档的结构对象(设置集合中的书写以及属性值的类型)
const AccountSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: Date, required: true },
  type: { type: Number, enum: ['-1', '1'] },
  account: { type: Number, default: 0 },
  remarks: { type: String, default: '' },
})
// 创建模型对象
const AccountModel = mongoose.model('accounts', AccountSchema)
// 暴露模型对象
module.exports = AccountModel
