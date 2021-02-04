const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    verify:{
        type:Boolean
    }
})
module.exports = User = mongoose.model('user',user);