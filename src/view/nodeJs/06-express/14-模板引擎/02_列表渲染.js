// 西游记
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']

// 原生JS
// let str = '<ul>'
// xiyou.forEach((item) => {
//   str += `<li>${item}</li>`
// })
// // 闭合ul
// str += '</ul>'
// console.log(str)

// ejs实现
const ejs = require('ejs')
const fs = require('fs')
const str = fs.readFileSync('./02_西游.html').toString()
const result = ejs.render(str, { xiyou })
console.log(result)
