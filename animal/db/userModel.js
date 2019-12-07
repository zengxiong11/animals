
// 1. 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/animals');
const conn = mongoose.connection
conn.on('connected', function () {
  console.log('数据库连接成功!')
})


// 2. 得到对应特定集合的Model: UserModel
const userSchema = mongoose.Schema({
  // 用户名
  name: {type: String},
  // 密码
  pwd: {type: String},
  // 电话
  phone: {type: Number},
  email: String,
  avatar:String,
  create_time: {type: Number, default: Date.now},
})

// 3. 向外暴露
module.exports = mongoose.model('user', userSchema)
