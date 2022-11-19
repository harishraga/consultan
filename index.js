const express= require("express")

const mongoose=require('mongoose');

const cors = require("cors")

const app = express()
const User = require('./model/user')
const Emp = require('./model/emp')
const Finis =require('./model/finis')
const Table=require('./model/table')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
    origin: "*", // <-- location of the react app were connecting to
    credentials: true,
}))

const dburl ="mongodb://localhost:27017/resta"
mongoose.connect(dburl);
const db=mongoose.connection;
db.on("error",()=>console.log("connection error:"));
db.once("open",()=>{
    console.log("Database Connected");    
});


app.post("/post",async(req,res)=>{
    console.log(req.body)
    var {nuggets,poppers,fingers,dragon,fried}=req.body;
    const user=new User({nuggets,poppers,fingers,dragon,fried});
    await user.save();
    // var {dhum,mughal,roti,naan,paratha}=req.body;
    // const emp=new emp({dhum,mughal,roti,naan,paratha});
    // await emp.save();


})
app.post("/main",async(req,res)=>{
    console.log(req.body)
   
     var {dhum,mughal,roti,naan,paratha}=req.body;
     const emp=new Emp({dhum,mughal,roti,naan,paratha});
     await emp.save();


})
app.post("/fin",async(req,res)=>{
    console.log(req.body)
   
     var {falooda,payasam,brownie,icecream,soda}=req.body;
     const finis =new Finis({falooda,payasam,brownie,icecream,soda});
     await finis.save();


})
app.post("/pers",async(req,res)=>{
    console.log(req.body)
   
     var {fname,lname,phno,date,tym,per}=req.body;
     const table=new Table({fname,lname,phno,date,tym,per});
     await table.save();


})



app.get( "/cheif",async (req,res)=>{
    var emps = await Emp.find({}); 
    console.log(emps)
    res.json(emps)
})
app.get( "/dess",async (req,res)=>{
    var finis = await Finis.find({}); 
    console.log(finis)
    res.json(finis)
})


app.get('/',(req,res)=>{
    res.send("Harish the Don")
})


app.listen(4000,()=>{
    console.log("Port 4000")
})
