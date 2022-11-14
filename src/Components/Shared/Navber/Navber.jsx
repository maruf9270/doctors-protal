import React from "react";
import { Link, NavLink } from "react-router-dom";
const background = {
    background:"#3A4256",
    color:'white'
}

const Navber = () => {
    const navitems = <>
    <li><NavLink to={'/'}  style={({isActive})=> isActive ? background: {}} className={`btn btn-ghost rounded-md`}>Home</NavLink></li>
    <li><NavLink to={'/about'}  style={({isActive})=> isActive ? background: {}} className={`btn btn-ghost `}>About</NavLink></li>
    <li><NavLink  style={({isActive})=> isActive ? background: {}} to={'/appiointment'} className={`btn btn-ghost rounded-md`}>Appiointment</NavLink></li>
    <li><NavLink  style={({isActive})=> isActive ? background: {}} to={'/reviews'} className={`btn btn-ghost rounded-md`}>Reviews</NavLink></li>
    <li><NavLink  style={({isActive})=> isActive ? background: {}} to={'/contact-us'} className={`btn btn-ghost rounded-md`}>Contact Us</NavLink></li>
    <li><NavLink  style={({isActive})=> isActive ? background: {}} to={'/login'} className={`btn btn-ghost rounded-md`}>Login</NavLink></li>
    
    </>
  return (
    <div>
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                navitems
              }
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 justify-between">
            {navitems}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navber;
