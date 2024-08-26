const mongoose = require("mongoose");

//begin change _id to Number 1 2 3 ....
const CounterSchema = new mongoose.Schema({
    Post_id: String,
    sequence_value: {type: Number, default: 0}                    
});
const Counter = mongoose.model("Counter", CounterSchema);
async function NextSequnceValue(SequenceName) {
    const SequenceDocs = await Counter.findByIdAndUpdate(
        SequenceName, {
            $inc: { sequence_value: 1}},
            {new: true, upsert: true}
    );
    return SequenceDocs.sequence_value;
}
//end

const PostSchema = new mongoose.Schema({
    Post_id         : {type:Number},
    Job_title       : {type:String,require:true},
    Job_description : {type:String,require:true},
    Job_location    : {type:String,require:true},
    Job_building    : {type:String,require:true},
    Job_room        : {type:String,require:true},
    Job_time_start  : {type:Date,reauire:true},
    Job_time_end    : {type:Date},
    Count           : {type:Number,requrie:true},
    Reserve_count   : {type:Number},
    Traveling_type  : {type:String,require:true},
    Food_Sup        : {type:String,require:true},
    Salary          : {type:Number,require:true},
},{timestamps:true, versionKey:false});

module.exports = mongoose.model('Post',PostSchema);
