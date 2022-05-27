const mongoose = require('mongoose');
const Schema = mongoose.Schema


const HizmetlersSchema = new mongoose.Schema({
 title :{type : String, require : true},
 contentshort : {type : String , require : true},
 contenttall : {type : String , require : true}
})

const Hizmetlers = mongoose.model('Hizmetlers' , HizmetlersSchema)
module.exports = Hizmetlers






 