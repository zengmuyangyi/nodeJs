// 1. alloc
const buf1 = Buffer.alloc(10)
console.log(buf1)
// 2. allocUnsafe
const buf2 = Buffer.allocUnsafe(10)
console.log(buf2)
// 3. from
const buf3 = Buffer.from('hello')
const buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf3)
console.log(buf4)
