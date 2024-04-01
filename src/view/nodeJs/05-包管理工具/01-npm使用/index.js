// 1.导入uniq包(数组去重)
const uniq = require('uniq')

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]

const result = uniq(arr)

console.log(result)
