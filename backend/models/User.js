const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,

    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    }
});

module.exports = mongoose.model("USer",userSchema);