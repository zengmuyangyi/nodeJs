/**
 *
 * @param {Function} success 连接成功后的回调函数
 * @param {Function} error 连接失败后的回调函数
 *
 * */
module.exports = function (success, error) {
  // 判断
  if (typeof error !== 'function') {
    error = () => {
      console.log('链接失败~~~')
    }
  }
  // 1.安装mongoose
  // npm install mongoose --save

  // 2.导入mongoose
  const mongoose = require('mongoose')
  // 3.导入配置文件
  const { DBHOST, DBPORT, DBNAME } = require('../config/config')

  // 3.连接mongodb服务
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

  // 4.设置回调
  mongoose.connection.once('open', () => {
    success()
  })

  mongoose.connection.on('error', () => {
    error()
  })

  mongoose.connection.on('close', () => {
    console.log('连接断开')
  })
}
