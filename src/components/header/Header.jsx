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

    <div className="main-header-div w-full flex justify-center items-center  shadow-sm 
    bg-gradient-to-b from-[#2b2929]/10  to-[#3b3a3a]/20 
    z-50 sticky top-0">
      <div className="main-header-diviind flex justify-between w-full items-center px-10">
        {/* Logo Image */}
        <div className="logo-container">
          <img
            src={imageData[0].logoImage}
            alt="Logo"
            className="logo-image transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Menu Button (Mobile Only) */}
        <button 
          onClick={toggleVisible} 
          className="md:hidden rounded-full w-18 h-16 cta-button text-xl">
          <FiList className="text-white w-11 h-11" />
        </button>

        {/* Animated Navigation Links (Mobile Only) */}
        {isVisible && (
          <motion.nav
            className="md:hidden absolute top-0 right-2 bg-[var-primary] text-white h-screen w-64 shadow-lg"
            initial={{ x: "0%" }}
            animate={{ x: isVisible ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button onClick={toggleVisible} className="absolute top-6 right-12 w-18 h-16 cta-button text-white text-3xl rounded-full">
              <IoClose className="text-white w-11 h-11" />
            </button>
            <ul className="space-y-6 text-lg px-6">
              {/* Home Link */}
              <li>
                <a
                  href="#home"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Home
                </a>
              </li>

              {/* About Link */}
              <li>
                <a
                  href="#about"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  About
                </a>
              </li>

              {/* Projects Link */}
              <li>
                <a
                  href="#projects"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Projects
                </a>
              </li>

              {/* Services Link */}
              <li>
                <a
                  href="#services"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Services
                </a>
              </li>

              {/* Contact Link */}
              <li>
                <a
                  href="#contact"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block"
                  onClick={toggleVisible}
                >
                  Contact
                </a>
              </li>

              {/* Resume Link */}
              <li>
                <a
                  href="/image/CV.pdf"
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

        {/* Desktop Navigation Links (Visible on larger screens) */}
        <div className="hidden md:flex">
        <ul className="flex  gap-4  text-xl ">
              {/* Home Link */}
              <li>
                <a
                  href="#home"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block text-white"
                  onClick={toggleVisible}
                >
                  Home
                </a>
              </li>

              {/* About Link */}
              <li>
                <a
                  href="#about"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block text-white"
                  onClick={toggleVisible}
                >
                  About
                </a>
              </li>

              {/* Projects Link */}
              <li>
                <a
                  href="#projects"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block text-white"
                  onClick={toggleVisible}
                >
                  Projects
                </a>
              </li>

              {/* Services Link */}
              <li>
                <a
                  href="#services"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block text-white"
                  onClick={toggleVisible}
                >
                  Services
                </a>
              </li>

              {/* Contact Link */}
              <li>
                <a
                  href="#contact"
                  className="hover:rotate-2 hover:scale-105 transform transition-transform duration-300 inline-block text-white"
                  onClick={toggleVisible}
                >
                  Contact
                </a>
              </li>
            </ul>
        </div>

      </div>
    </div>
  );
}
