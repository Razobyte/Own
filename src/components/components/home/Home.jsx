import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imageData from '../../../config';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import FloatingBackground from './Background';
import About from '../about/About';
import Projects from '../projects/Projects';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const text = [
    "Passionate about creating exceptional UIs",
    "Skilled in React, JavaScript, and CSS",
    "Focused on building intuitive experiences",
    "Always striving for clean, maintainable code",
    "Pragmatic approach to problem-solving",
    "Dedicated to staying up-to-date with industry trends",
    "I am a front-end developer with a passion for React"
  ];

  const sortedText = [...text].sort((a, b) => a.length - b.length);

  const itemVariants = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
    exit: { opacity: 0 },
  };

  const shakeVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -2, 2, -2, 2, 0], // This will create a shake effect
      transition: {
        repeat: Infinity, // This ensures it loops forever
        repeatType: 'loop',
        duration: 2, // Duration of each shake cycle
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedText.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [sortedText.length]);

  return (
    <>
    <FloatingBackground/>
    <motion.div
      className='flex w-full justify-center items-center py-10'
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className='max-w-6xl sm:flex justify-evenly items-center w-full sm:gap-10 gap-0 md:px-0 px-3'>
        <motion.div
          className='md:w-1/2 '
          variants={itemVariants}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <motion.img
            src='/image/shivani.webp'
            alt="main-image"
            className="w-full h-auto 
             transform transition-transform
              duration-300 sm:hover:scale-110 bg-inherit rounded-ss-3xl rounded-br-3xl
               border-l-8 border-l-blue-900" // Apply shake animation here
          />
        </motion.div>
        <motion.div
          className='md:w-full shadow-sm sm:p-16 p-4  rounded-md'  
          variants={itemVariants}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h1 
          className='sm:font-bold font-semibold lg:text-7xl
           md:text-5xl sm:text-4xl xs:text-3xl text-4xl pb-1 mb-5 sm:mt-0 mt-0'>
            <span className='border-b-4 border-[#005BBB] pb-0 sm"pe-3 pe-0'>
              𝗌ɦ𝗂𝗏α𐓣𝗂
            </span>
            𝗌ɦυ𝗄ᥣα
          </h1>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="sm:text-5xl text-3xl sm:h-36 h-auto"
            >
              {sortedText[currentIndex]}
            </motion.h1>
          </AnimatePresence>
          <div className='sm:mt-12  mt-10'>
            <ul className="flex space-x-6">
              {/* LinkedIn */}
              <li>
                <a href="https://www.linkedin.com/in/..." target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-9 h-9 text-white" />
                </a>
              </li>
              {/* GitHub */}
              <li>
                <a href="https://github.com/tanushukla1332" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-9 h-9 text-white" />
                </a>
              </li>
              {/* Phone Number */}
              <li>
                <a href="tel:+918303898470">
                  <FaPhoneAlt className="w-9 h-9 text-white" />
                </a>
              </li>
              {/* Email */}
              <li>
                <a href="mailto:your-email@example.com">
                  <FaEnvelope className="w-10 h-10 text-white" />
                </a>
              </li>
              {/* Resume */}
              <li>
                <a href="/image/Shivani-shukla.pdf" target="_blank" rel="noopener noreferrer">
                  <FaFileAlt className="w-9 h-9 text-white" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>  
    <section id="about">
        <About /> {/* Include the About component here */}
      </section> 
      <section id="projects">
        <Projects /> {/* Include the About component here */}
      </section>
      <section id="services">
        <Services /> {/* Include the About component here */}
      </section>
      <section id="contact">
        <Contact/> {/* Include the About component here */}
      </section>
      <Footer/>
    </>
  );
};
export default Home;
