export function nameRule(value, callback) {
  const name = /^(?:[\u4e00-\u9fa5·]{2,16})$/
  console.log(value)
  if (value.trim() === '') {
    callback(new Error('请输入姓名'))
  } else if (!name.test(value)) {
    callback(new Error('请输入正确的姓名'))
  } else {
    callback()
  }
}
