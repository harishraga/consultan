const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nuggets :String,
    poppers:String,
    fingers : String,
    dragon : String,
    fried:String,
    dhum:String
});

module.exports=mongoose.model("User",UserSchema);
