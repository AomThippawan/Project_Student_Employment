const mongoose = require("mongoose");


//models Users
const UserSchema = new mongoose.Schema({
    User_id     : {type:Number},
    First_Name  : {type:String,require:true},
    Last_Name   : {type:String,require:true},
    Email       : {type:String,require:true},
    Phone       : {type:String,require:true},
    Password    : {type:String,require:true},
    Institude   : {type:String,require:true},
    Faculty     : {type:String,require:true},
    Program     : {type:String,require:true},
    Profile     : {type:String,require:true},
},{timestamps:true, versionKey:false})

model.exports = mongoose.model('Users',UserSchema);