import React from 'react';
import './Order.css';
import bg from './bg1.jpg';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpg';
import { useState } from 'react';
import axios from 'axios';

function Order() {
    const [nuggets, setNuggets] = useState({ nuggets: "" })
    const [poppers, setPoppers] = useState({ poppers: "" })
    const [fingers, setFingers] = useState({ fingers: "" })
    const [dragon, setDragon] = useState({ dragon: "" })
    const [fried, setFried] = useState({ fried: "" })
    const [dhum, setDhum] = useState({ Dhum: "" })
    const [mughal, setMughal] = useState({ Mughal: "" })
     const [roti, setRoti] = useState({ Roti: "" })
     const [naan, setNaan] = useState({ Naan: "" })
     const [paratha, setParatha] = useState({ Paratha: "" })
     const [falooda, setFalooda] = useState({ Falooda: "" })
     const [payasam, setPayasam] = useState({ payasam: "" })
     const [brownie, setBrownie] = useState({ Brownie: "" })
     const [icecream, setIcecream] = useState({ Icecream: "" })
     const [soda, setSoda] = useState({ Soda: "" })

    async function post(e) {
        e.preventDefault()
        const inputs = {
            nuggets,
            poppers,
            fingers,
            dragon,
            fried,
            dhum,

        };
        try {
            console.log("hi")
            await axios.post("http://localhost:4000/post", inputs);

        }
        catch (err) {
            console.log(err);
        }

    };
    async function main(e) {
        e.preventDefault()
        const inputs = {
            dhum,
            mughal,
            roti,
            naan,
            paratha

        };
        try {
            console.log("hi")
            await axios.post("http://localhost:4000/main", inputs);

        }
        catch (err) {
            console.log(err);
        }

    };
    async function fin(e) {
        e.preventDefault()
        const inputs = {
            falooda,
            payasam,
            brownie,
            icecream,
            soda 

        };
        try {
            console.log("hi")
            await axios.post("http://localhost:4000/fin", inputs);

        }
        catch (err) {
            console.log(err);
        }

    };
    return (
        <div>
            <h1 className='title'>Order Now</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Features</a>
                        <a class="nav-item nav-link" href="#">Pricing</a>
                        <a class="nav-item nav-link disabled" href="#"></a>
                    </div>
                </div>
            </nav>
            <div className='container text-center' style={{ textAlighn: "center" }}>
                <div className='row align-items-start'>
                    <div className='col' >
                        <h2>Starters</h2>
                        <form onSubmit={post} method='POST' className='starters'>
                            Chicken nuggets:<input type="text" id='nuggets' className='input' onChange={(e) => setNuggets(e.target.value)} /><br /><br />
                            Chicken poppers:<input type="text" id='poppers' className='input' onChange={(e) => setPoppers(e.target.value)} /><br /><br />
                            Chicken fingers:<input type="text" id='fingers' className='input' onChange={(e) => setFingers(e.target.value)} /><br /><br />
                            Dragon chicken: <input type="text" id='dragon' className='input' onChange={(e) => setDragon(e.target.value)} /><br /><br />
                            Fried Chicken: <input type="text" id='fried' className='input' onChange={(e) => setFried(e.target.value)} /><br /><br />
                           
                            <button >submit</button>
                        </form>
                    </div>
                    <div className='col' >
                        <h2>Main-Course</h2>
                        <form className='starters' onSubmit={main}>
                            Chicken Dhum biriyani:<input type="number" id='dhum'className='input' onChange={(e) => setDhum(e.target.value)}/><br /><br />
                            Chicken mughal biriyani:<input type="number" id='mughal' className='input' onChange={(e) => setMughal(e.target.value)} /><br /><br />
                            Roti:<input type="number" id='roti' className='input' onChange={(e) => setRoti(e.target.value)} /><br /><br />
                            Butter naan: <input type="number" id='naan' className='input' onChange={(e) => setNaan(e.target.value)}/><br /><br />
                            Aloo paratha: <input type="number" id='paratha' className='input' onChange={(e) => setParatha(e.target.value)}/><br /><br />
                            <button >submit</button>
                        </form>

                    </div>
                    <div className='col' >
                        <h2>Dessert</h2>
                        <form onSubmit={fin} className='starters'>
                            Special falooda:<input type="number" id='falooda' className='input' onChange={(e) => setFalooda(e.target.value)}/><br /><br />
                            Ilanner payasam:<input type="number" id='payasam' className='input' onChange={(e) => setPayasam(e.target.value)} /><br /><br />
                            Sizzling Brownie :<input type="number" id='brownie' className='input' onChange={(e) => setBrownie(e.target.value)} /><br /><br />
                            Brownie with icecream: <input type="number" id='icecream' className='input' onChange={(e) => setIcecream(e.target.value)}/><br /><br />
                            Lemon soda: <input type="number" id='soda' className='input' onChange={(e) => setSoda(e.target.value)}/><br /><br />
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Order;