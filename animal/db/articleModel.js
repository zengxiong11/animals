/*
能操作products集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// 2.字义Schema(描述文档结构)
const articleSchema = new mongoose.Schema({
    author: {
		type: ObjectId,
		ref: 'user'
	},
    adoptName:String,
    adoptKind:String,
    data:{type: Number, default: Date.now},
    dynamicContent:String,
    address:String,
    imgList: String,
})


// 3. 定义Model(与集合对应, 可以操作集合)
const articleModel = mongoose.model('Articles', articleSchema)

// 4. 向外暴露Model
module.exports = articleModel