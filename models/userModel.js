const {Schema , model} = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    gender : String,

})

module.exports = model('users',mySchema);