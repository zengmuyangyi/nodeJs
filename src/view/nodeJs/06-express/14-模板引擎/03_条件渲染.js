/**
 * 通过 isLogin 决定最终的输出内容
 * true   输出 【<span>欢迎回来</span>】
 * false  输出 【<button>登录</button>  <button>注册</button>】
 */

// 变量
const isLogin = true

// 原生JS
// if (isLogin) {
//   console.log('<span>欢迎回来</span>')
// } else {
//   console.log('<button>登录</button>  <button>注册</button>')
// }

// ejs实现
const ejs = require('ejs')
const fs = require('fs')
const html = fs.readFileSync('./03_home.html').toString()
const result = ejs.render(html, { isLogin })
console.log(result)
