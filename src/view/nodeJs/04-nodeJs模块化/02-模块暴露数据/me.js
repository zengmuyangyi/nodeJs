function study() {
  console.log('学习中。。。')
}
function sleep() {
  console.log('睡觉中...')
}
// 暴露数据
// module.exports = {
//   study,
//   sleep,
// }

// exports 暴露数据
exports.study = study
exports.sleep = sleep
