const mongoose = require('mongoose');
var mongooseurl='mongodb+srv://sanjay:sanjayraj156@cluster0.65swz.mongodb.net/mern-rooms'
mongoose.connect(mongooseurl, { useNewUrlParser: true, useUnifiedTopology: true });
var connection = mongoose.connection;

connection.on('error', ()=>{console.log('connection error')});
connection.on('connected',()=>{
    console.log('connected to database');
})
module.exports = connection;