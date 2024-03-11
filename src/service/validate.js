// 手机号校验
export function validatePhone(value, callback) {
  const reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
  if (!value || value.trim() === '') {
    callback('该项不能为空')
  } else {
    if (!reg.test(value)) {
      callback('请输入正确的手机号')
    } else {
      callback()
    }
  }
}
// 密码校验
export function validatePassword(value, callback) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,16}$/
  if (!value || value.trim() === '') {
    callback('请输入密码')
  } else {
    if (!reg.test(value)) {
      callback('密码必须包含数字和字母且长度要在8-16位')
    } else {
      callback()
    }
  }
}
// 账号校验
export function validateUser(value, callback) {
  const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
  if (!value || value.trim() === '') {
    callback('请输入账号')
  } else {
    if (!reg.test(value)) {
      callback('请输入字母开头的5-16位账号')
    } else {
      callback()
    }
  }
}
// 身份证号校验
export function validateIDCard(value, callback) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (!value || value.trim() === '') {
    callback('请输入身份证号码')
  } else {
    if (!reg.test(value)) {
      callback('请输入正确的身份证号码')
    } else {
      callback()
    }
  }
}
