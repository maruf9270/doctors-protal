import React, { useState } from 'react';
import AvailableA from './Hero/AvailbleA/AvailableA';
import Hero from './Hero/Hero';
import Modal from './Modal/Modal';

const Appointment = () => {
    const [SelctedDate, setDate] = useState(new Date());
    const [service , setService] = useState(null)
    
    return (
        <div>
           <Hero SelctedDate={SelctedDate} setDate={setDate}></Hero>
           <AvailableA SelctedDate={SelctedDate} setDate={setDate} setservice= {setService}></AvailableA>
           {
            service && 
            <Modal service={service} SelctedDate={SelctedDate} setService={setService}></Modal>
           }
        </div>
    );
};

export default Appointment;