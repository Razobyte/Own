import React from 'react';
import { Link } from 'react-router-dom';
import imageData from '../../config';

export default function Header() {
  return (
    <div className="main-header-div flex justify-center items-center bg-[#2D046E] shadow-lg">
      <div className="main-header-diviind flex justify-between w-full px-4 items-center">
        {/* Logo Image */}
        <div className="logo-container lg:ps-56 md:ps-28 sm:ps-10 xs:ps-5">
          <img 
            src={imageData[0].logoImage}  // Accessing the first item in the imageData array
            alt="Logo" 
            className="logo-image" 
          />
        </div>
        {/* Navigation Links */}
        <nav className="w-full">
          <ul className="flex justify-evenly items-center w-full py-5 text-white text-2xl font-bold">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
