// buffer与字符串的转换
const buf1 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf1.toString()) //utf-8

// []
const buf2 = Buffer.from('hello')
console.log(buf2[0].toString(2))
