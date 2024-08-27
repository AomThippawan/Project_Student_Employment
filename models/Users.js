const mongoose = require("mongoose");


//models Users
const UserSchema = new mongoose.Schema({
    First_Name  : {type:String,require:true},
    Last_Name   : {type:String,require:true},
    Email       : {type:String,require:true},
    Username    : {type:String,require:true},
    Phone       : {type:String,require:true},
    Password    : {type:String,require:true},
    Institude   : {type:String,require:true},
    Faculty     : {type:String,require:true},
    Program     : {type:String,require:true},
    Profile     : {type:String,require:true},
},{timestamps:true, versionKey:false})

module.exports = mongoose.model('Users',UserSchema);