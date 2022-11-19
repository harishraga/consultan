import React from "react";
import './table.css';
import { useState } from 'react';
import axios from 'axios';
function Table(){
  const [fname, setFname] = useState({ Fname: "" })
  const [lname, setLname] = useState({ Lname: "" })
  const [phno, setPhno] = useState({ Phno: "" })
  const [date, setDate] = useState({ Date: "" })
  const [tym, setTym] = useState({ Tym: "" })
  const [per, setPer] = useState({ Per: "" })
  async function post(e) {
    e.preventDefault()
    const inputs = {
        fname,lname,phno,date,tym,per

    };
    try {
        console.log("hi")
        await axios.post("http://localhost:4000/pers", inputs);

    }
    catch (err) {
        console.log(err);
    }

};


    return(

        <div>
          <h1 className="head">Chiken Paradise</h1>
          <h3 align="center">Table Bokking</h3><br />

<div class="container">
  <div class="row">
    <div class="col-sm">
    <div  >
    <img src="https://mobirise.com/extensions/restaurantm4/assets/images/07.jpg" alt="" className="img1"/>
  </div>
    </div>
    <div class="col-sm">
    
           <form class="form-inline" action="/action_page.php" onSubmit={post}>
  <div class="form-group mb-2 ">
    <label for="fname">First Name:</label>
    <input type="text" class="form-control" id="fname" onChange={(e) => setFname(e.target.value)} />
  </div>
  <div class="form-group mb-2 ">
    <label for="lname">Last Name:</label>
    <input type="text" class="form-control" id="lname" onChange={(e) => setLname(e.target.value)} />
  </div>
  <div class="form-group mb-2 ">
    <label for="phno">Phone No:</label>
    <input type="number" class="form-control" id="phno" onChange={(e) => setPhno(e.target.value)} />
  </div>
  <div class="form-group mb-2 ">
    <label for="date">Date:</label>
    <input type="date" class="form-control" id="date" onChange={(e) => setDate(e.target.value)}/>
  </div>
  <div class="form-group mb-10">
    <br /><label for="tym">Time:</label>
    <input type="time" class="form-control" id="tym" onChange={(e) => setTym(e.target.value)}/>
  </div>
  <div class="form-group mb-2">
    <label for="per">No Persons:</label>
    <input type="number" class="form-control" id="per" onChange={(e) => setPer(e.target.value)} />
  </div><br />
  
  <button class="btn btn-secondary">Submit</button>
</form>
    </div>
    <div class="col-sm">
    <div  >
    <img src="https://mobirise.com/extensions/restaurantm4/assets/images/06.jpg" alt="" className="img2" />
</div>
    </div>
  </div>
</div>


        </div>
    );
}
export default Table;