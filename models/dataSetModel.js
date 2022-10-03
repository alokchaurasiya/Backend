const {Schema, model, Types} = require("../connection");


const schema = new Schema({
    title : String,
    description : String,
    year : Number,
    category : String,
    thumbnail : String,
    file : String,
    createdAt : String,
    
})

module.exports = model('datasets', schema);