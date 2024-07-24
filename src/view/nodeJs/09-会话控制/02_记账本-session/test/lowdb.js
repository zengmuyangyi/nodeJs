// 导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
//  获取db对象
const adapter = new FileSync('db.json')
const db = low(adapter)

// 初始化数据
db.defaults({ posts: [], user: {} }).write()

// 写入数据
db.get('posts').push({ id: 1, title: '今天天气真不错' }).write()

// 获取数据
console.log(db.get('posts').value())
// 获取单挑数据
const res = db.get('posts').find({ id: 1 }).value()

// 删除数据
db.get('posts').remove({ id: 3 }).write()

// 更新数据
db.get('posts').find({ id: 1 }).assign({ title: '今天下雨啦' }).write()
