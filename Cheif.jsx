import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Cheif.css';

export default function Cheif() {
    const [data, setdata] = useState()
    const [data1, setdata1] = useState()
    const [data2, setdata2]=useState()
    const [wait, setwait] = useState(false)
    async function api() {
        const res = await axios.get("http://localhost:4000/cheif");
        const res1 = await axios.get("http://localhost:4000/dess");
       
        setdata(res.data);
        setdata1(res1.data);
       
        console.log(res.data);
    }
    useEffect(() => {
        if (data) {
            setwait(true)
        }
    }, [data, data1])
    useEffect(
        () => {
            api();
        }, []
    )

    return (
        <div>
            <header>
                <h1>Chicken paradise</h1>
                <h1>Table Orders</h1>
            </header>
            
            <div className='main'>
                <h1>Main Dishes</h1>
                {wait && data.map((e) => <> 
                Dhum biriyani:{e.dhum}<br />
                    Mughal biriyani:{e.mughal}<br />
                     Roti:{e.roti} <br />
                    Butter naan:{e.naan}<br />
                   Paratha:{e.paratha}<br /></>)}

            </div>
            <div className='dess'>
                <h1>Desserts</h1>
            {wait && data1.map((e) => <> 
                Special falooda:{e.falooda}<br />
                    Ilaneer payasam:{e.payasam}<br />
                     Brownie:{e.brownie} <br />
                    Brownie with icecream:{e.icecream}<br />
                   Lemon soda:{e.soda}<br /></>)}
            </div>
           
        </div>
    )
}