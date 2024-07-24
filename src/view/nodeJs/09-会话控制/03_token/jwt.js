// 导入jwt
const jwt = require('jsonwebtoken')

// 创建（生成）token
// const token = jwt.sign(用户数据, 加密字符串, 配置对象)
// const token = jwt.sign(
//   {
//     username: 'zhangsan',
//   },
//   'tourismbackend',
//   {
//     expiresIn: 60, // 有效期, 单位是秒
//   }
// )
// console.log(token)

const t =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNzIxODA2MzE2LCJleHAiOjE3MjE4MDYzNzZ9.mDmkXiDiSSHSD1J-9LN8FRj__8SezD8qMkYaLPPOV6s'
// 校验token
jwt.verify(t, 'tourismbackend', (err, data) => {
  if (err) {
    console.log('校验失败')
    return
  }
  console.log(data)
})
