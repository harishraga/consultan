import React,{useState} from "react";
import "./Login.css";



function Login(){
    const [name,setName]=useState('')
    const [role,setRole]=useState('')
    
    return(
        <div>
            <div>
                <img src="" alt="" />
            </div>

   <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label style={{marginRight:"10px"}}>Login As </label>
              <select className="btn btn-outline-dark" style={{width:"200px"}} name="role" value={role} onChange={e => setRole(e.target.value)}>
                <option  value="manager">Manager</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
              </select>
            
          </div>
          <div className="form-group mt-3">
            <label className="label">Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn" id="b1">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
    </div>
  







    );




}
export default Login;