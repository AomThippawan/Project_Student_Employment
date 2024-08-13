const mongoose = require("mongoose");

//begin change _id to Number 1 2 3 ....
const CounterSchema = new mongoose.Schema({
    User_id: String,
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

//models Users
const UserSchema = new mongoose.Schema({
    User_id     : {type:Number},
    First_Name  : {type:String,require:true},
    Last_Name   : {type:String,require:true},
    Email       : {type:String,require:true},
    Phone       : {type:String,require:true},
    Password    : {type:String,require:true},

    
})
