const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    deleted : {type :Boolean , default : false}
})

const userModel = mongoose.model('User' , userSchema)

module.exports = userModel