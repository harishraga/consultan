import React from "react";
import './menu.css';
function Menu(){
    return(
<div className="menu1">
<h1 className="head">Chicken Paradise</h1><br />
<div class="container">

    <h3>Price List</h3>
  <div class="row">
    <div class="col-md-7">
        <table class="table">
            <thead>
                <th>STARTERS</th>
            </thead>
            <tbody>
                <tr>Chicken Nuggets </tr>
                <br />
                <tr>Chicken Poppers</tr><br />
                <tr>Chicken Fingers</tr><br />
                <tr>Dragon Chicken</tr><br />
                <tr>Fried Chicken</tr><br />
            </tbody><br />
            <thead>
                <th>Main Course</th>
            </thead>
            <tbody>
                <tr>Chiken Dhum Biriyani</tr><br />
                <tr>Chicken Mughal Biriyani</tr><br />
                <tr>Rotti</tr><br />
                <tr>Butter Naan</tr><br />
                <tr>Aloo Paratha</tr><br />
            </tbody><br />
            <thead>
                <th>Deserts</th>
            </thead>
            <tbody>
                <tr>Special Faluda</tr><br />
                <tr>Elaneer Payasam</tr><br />
                <tr> Brownie</tr><br />
                <tr>Sizzling Brownie</tr><br />
                <tr>Leamon Soda</tr><br />
            </tbody>

            
            
        </table>
    </div>
    <div class="col-md-5">
        <table class="table">
            <thead>
                <th>Price</th>
            </thead>
            <tbody>
                <tr>120</tr><br />
                <tr>190</tr><br />
                <tr>170</tr><br />
                <tr>220</tr><br />
                <tr>250</tr><br />
            </tbody><br />
            <thead>
                <th>Price</th>
            </thead>
            <tbody>
                <tr>250</tr><br />
                <tr>270</tr><br />
                <tr>50.0</tr><br />
                <tr>60.0</tr><br />
                <tr>110</tr><br />
            </tbody><br />
            <thead>
                <th>Price</th>
            </thead>
            <tbody>
                <tr>100</tr><br />
                <tr>110</tr><br />
                <tr>80.0</tr><br />
                <tr>180</tr><br />
                <tr>70.0</tr><br />
            </tbody>
        </table>
    </div>
  </div>
  </div>
  <div className="foot">
    <h5 align="center">Contact us on</h5>
    <h6 align="center">PH:4456-67499</h6>
    </div>
</div>


    );
}
export default Menu;