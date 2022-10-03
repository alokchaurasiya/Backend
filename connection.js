
const mongoose = require("mongoose");

const dbName = 'DataSet';
const url = `mongodb+srv://alokchaurasiya:Alok9565@cluster0.lwherah.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log("Database connected");
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;