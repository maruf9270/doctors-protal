import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const AvailableA = ({SelctedDate,setservice}) => {
    const [Ao,setAo] = useState([])
    useEffect(()=>{
        fetch('AppointmentOption.json')
        .then(res=> res.json())
        .then(data=> setAo(data))
    },[]) 
    return (
        <div>
            <p className='text-primary text-center my-5 font-bold text-xl'>
                Availabe appointment on {format(SelctedDate,'PP')} 
            </p>
            <div className='grid grid-cols-3 gap-6 '>
                {Ao.map(s => <Card key={s._id} s={s} setservice={setservice}></Card>)}
            </div>
            
        </div>
    );
};

export default AvailableA;