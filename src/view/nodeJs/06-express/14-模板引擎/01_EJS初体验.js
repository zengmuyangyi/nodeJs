// 导入EJS
const ejs = require('ejs')
const fs = require('fs')

// 字符串
const china = '中国'
// const str = '我爱你'
const str = fs.readFileSync('./01_html.html').toString()
// 使用ejs渲染
const result = ejs.render(str, { china: china })
console.log(result)
