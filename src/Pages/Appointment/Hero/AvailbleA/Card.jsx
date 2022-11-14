import React from 'react';

const Card = ({s,setservice}) => {
    console.log(s);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center flex justify-center items-center">
          <h2 className="card-title text-center text-primary">{s.name}</h2>
          <p>{s.slots.length > 0 ? s.slots[0]:"No Time available"}</p>
          <p>
            {
              s.slots.length > 0 ? s.slots.length : "No SLot availabel"  
            }
            {s.slots.length > 1 ? " Slots":" Slot"} Availabe

          </p>
          <div className="card-actions justify-center">
          
            <label htmlFor="my-modal-6" className="btn btn-primary text-white" onClick={()=>setservice(s)}>
        open modal
      </label>
          </div>
        </div>
      </div>
    );
};

export default Card;