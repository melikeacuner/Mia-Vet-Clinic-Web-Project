const mongoose = require('mongoose');
const Schema = mongoose.Schema


const BlogsSchema = new mongoose.Schema({
 title :{type : String, require : true},
 short : {type : String , require : true},
 tall : {type : String , require : true},
 post_image :{type : String, require : true}
})

const Blogs = mongoose.model('Blogs' , BlogsSchema)
module.exports = Blogs






 