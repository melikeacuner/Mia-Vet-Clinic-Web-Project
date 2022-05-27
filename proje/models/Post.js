const mongoose = require('mongoose');
const Schema = mongoose.Schema


const PostSchema = new mongoose.Schema({
 questions :{type : String, require : true},
 name : {type : String , require : true},
 phone : {type :String , require : true},
 answer : {type : String , require : true}
})

const Post = mongoose.model('Post' , PostSchema)
module.exports = Post






 