const mongoose = require("mongoose");

const PostSchema= new mongoose.Schema({
    Job_title       : {type: String, required: true},
    Job_description : {type: String, required: true},
    Job_location    : {type: String, required: true},
    Job_building    : {type: String, required: true},
    Job_room        : {type: String, required: true},
    Job_time_start  : {type: Date, required: true},
    Job_time_end    : {type: Date},
    Count           : {type: Number, required: true},
    Reserve_count   : {type: Number},
    Traveling_type  : {type: String, required: true},
    Food_Sup        : {type: String, required: true},
    Salary          : {type: Number, required: true}
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Post', PostSchema);