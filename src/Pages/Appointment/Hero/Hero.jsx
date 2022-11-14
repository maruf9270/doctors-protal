import React, { useState } from "react";
import bg from '../../../assets/images/bg.png'

/// improtig day picker Components
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css'

const Hero = ({SelctedDate,setDate}) => {
    
   
   

    
    console.log(SelctedDate);
  return (
    <div className="hero bg-[url('../../../assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <DayPicker
          mode="single"
          selected={SelctedDate}
          onSelect={setDate}
        
          />
          <p>You picked {format(SelctedDate, "PP")}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
