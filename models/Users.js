const mongoose = require("mongoose");

//begin change _id to NUmber 1 2 3 ....
const CounterSchema = new mongoose.Schema({
    _id: String,
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
   

    
})