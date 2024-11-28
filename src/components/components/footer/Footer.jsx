import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { GiTopHat } from 'react-icons/gi';

export default function Footer() {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    <footer className=" text-white flex items-center justify-between text-center p-4 mt-4">
      <p>© 2024 Shivani Shukla. All Rights Reserved.</p>
      <button
        onClick={scrollToTop}
        className="mt-4 px-6 py-2 bg-white text-blue-900 rounded-md
        text-3xl hover:bg-blue-800 transition duration-300"
      ><BiArrowToTop/>
      </button>
    </footer>
  );
}
