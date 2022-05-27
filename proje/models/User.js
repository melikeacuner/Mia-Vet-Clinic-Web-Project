const mongoose = require('mongoose');
const Schema = mongoose.Schema


const UserSchema = new mongoose.Schema({
 email :{type : String, require : true},
 password : {type : String , require : true},
})

const User = mongoose.model('User' , UserSchema)
module.exports = User






 