import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageData from '../../config';
import { FiList } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5"; // Close icon

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="main-header-div w-full flex justify-center items-center z-50 shadow-sm sticky top-0
     bg-[var-primary]">
      <div className="main-header-diviind flex justify-between w-full items-center px-20">
        
        {/* Logo Image */}
        <div className="logo-container">
          <img
            src={imageData[0].logoImage}
            alt="Logo"
            className="logo-image transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Menu Button */}
        <button onClick={toggleVisible} className='rounded-full w-18 h-16 cta-button'>
          <FiList className="text-white w-11 h-11" />
        </button>

        {/* Animated Navigation Links */}
        {isVisible && (
          <motion.nav
            className="absolute top-0 right-2 bg-[var-primary] text-white h-screen w-64 shadow-lg"
            initial={{ x: "0%" }}
            animate={{ x: isVisible ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button onClick={toggleVisible} className="absolute top-6 right-12 w-18 h-16 cta-button text-white text-3xl rounded-full">
              <IoClose className="text-white w-11 h-11" />
            </button>

            <ul className="pt-32 space-y-6 text-5xl px-6">
{/* Home Link */}
            <li>
                <a
                  href="#"  // Hash link to scroll to the About section
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Home
                </a>
              </li>

              {/* About Link */}
              <li>
                <a
                  href="#about"  // Hash link to scroll to the About section
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  About
                </a>
              </li>

              {/* Projects Link */}
              <li>
                <a
                  href="#projects"  // This will navigate to the Projects page
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Projects
                </a>
              </li>

              {/* Services Link */}
              <li>
                <a
                  href="#services"  // This will navigate to the Services page
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Services
                </a>
              </li>

              {/* Contact Link */}
              <li>
                <a
                  href="#contact"  // This will navigate to the Contact page
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Contact
                </a>
              </li>

              {/* Resume Link */}
              <li>
                <a
                  href="/image/CV.pdf"  // Resume link that opens the PDF
                  target="_blank" rel="noopener noreferrer"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </div>
  );
}
