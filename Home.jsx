import React from 'react';
import './Home.css';
import Image from './logos.jpeg'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>

            <h1 style={{ fontSize: "75px" }}>Chicken Paradise</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" ><Link to="/">Home </Link> <span class="sr-only">(current)</span></a>
                        
                       
                        <a class="nav-item nav-link" > <Link to="/Order" >Order</Link></a>
                        <a class="nav-item nav-link" > <Link to="/Cheif" >Cheif order</Link></a>
                        
                       
                    </div>
                </div>
            </nav>




            <div className='container text-center' style={{ backgroundColor: "orangered" }}>
                <div className='row align-items-start'>
                    <div className='col'>
                        <img src={Image} height="200" width="500" alt="" className='logos' />
                    </div>
                    <div className='col'>
                        <h3>SAY NO </h3>
                        <h3>TO DRUGS</h3>
                        <h3>NOT MEAT</h3>
                    </div>
                    <div className='col'>
                        <p>"People who love to eat are always the best people." "To eat is a necessity, but to eat intelligently is an art." "We all eat, an it would be a sad waste of opportunity to eat badly." "If you really want to make a friend, go to someone's house and eat with him...the people who give you their food give you their heart."</p>

                    </div>
                </div>
            </div><br /><br /><br />

            <div className='container text-center'>
                <div className='row align-items-start'>
                    <div className='col'>
                        <img src="https://cdnimg.webstaurantstore.com/uploads/blog/2018/2/serving-plates.jpg" alt="serve" className='serve' /><br /><br />
                        <h2>Table order Booking</h2><br /><br />
                        <button><Link to="/Order" >Order now</Link></button>

                    </div>
                    <div className='col'>
                        <img src="https://media.istockphoto.com/id/1250589910/photo/mockup-food-takeaway-packaging.jpg?b=1&s=170667a&w=0&k=20&c=gg3C2wP_TLmp2nB7v_4cRGWlMAh_whZxMXBx2q8yX0M=" alt="" className='serve' /><br /><br />
                        <h2>View order for cook</h2><br /><br />
                        <button> <Link to="/Cheif" >View Order</Link></button>
                    </div>
                    <div className='col'>
                        <img src="https://www.posist.com/restaurant-times/wp-content/uploads/2015/11/pos-billing-screen-1-800x533.jpg" alt="" className='serve' /><br /><br />
                        <h2>Billing  system</h2><br /><br />
                        <button>Enter</button>

                    </div>
                </div>
            </div>
            





        </div>
    );
}

export default Home;