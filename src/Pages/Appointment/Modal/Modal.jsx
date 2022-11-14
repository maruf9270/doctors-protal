import { format } from "date-fns";
import React from "react";

const Modal = ({ service, SelctedDate,setService}) => {
  const handleSubmit = (e) =>{
    e.preventDefault()
    const from = e.target
    console.log(from);
    const selectedService = service.name;
    const timeSlot= from.selected.value;
    const name = from.fullName.value;
    const email = from.email.value;
    const phone = from.phone.value;
 

    const appointmentData = {
      creationDate : Date(),
      selectedService,
      time: timeSlot,
      name,
      email,
      phone,
    }
    console.log(appointmentData);
    setService(null)

  }
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{service.name}</h3>
          <p className="py-4">
            <form action="" onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              value={format(SelctedDate, "PP ")}
              disabled
              className="input input-bordered w-full"
            />

            {/* option section starts here */}
            <select className="select select-bordered w-full " name="selected"> 
              {
                service.slots.map((slots,index)=><option key={index} value={slots}>{slots}</option>)
              }
             
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
              required
              name="fullName"
              />
            <input
              type="number"
              placeholder="Phone Number"
              required
              name="phone"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            
            <div>
              <button type="submit" className="btn btn-primary w-full">Submit</button>
            </div>
            </form>
          </p>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
