const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    fname:String,
    lname:String,
    phno:String,
    date: String,
    tym : String,
    per:String,
   
    
});


module.exports=mongoose.model("Table",tableSchema);