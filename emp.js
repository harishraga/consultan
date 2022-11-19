const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const empSchema = new Schema({
    dhum:String,
    mughal :String,
    roti:String,
    naan : String,
    paratha : String
   
    
});


module.exports=mongoose.model("Emp",empSchema);