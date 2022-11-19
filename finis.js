const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const finisSchema = new Schema({
    falooda:String,
    payasam:String,
    brownie:String,
    icecream: String,
    soda: String
   
    
});


module.exports=mongoose.model("Finis",finisSchema);