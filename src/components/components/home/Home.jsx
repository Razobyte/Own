import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imageData from '../../../config';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const CenteredComponent = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedText.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [sortedText.length]);

  return (
    <motion.div
      className='flex w-full justify-center items-center py-10'
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className='max-w-6xl md:flex justify-evenly items-center w-full gap-10'>
        <motion.div
          className='md:w-1/2 '
          variants={itemVariants}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img src={imageData[1].mainImage} alt="main-image" className="w-full h-[450px]" />
        </motion.div>
        <motion.div
          className='w-full'
          variants={itemVariants}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
        <h1 className='font-bold text-7xl pb-1 mb-5'>
  <span className='border-b-4 border-[#005BBB] pb-0 pe-3'>
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
              className="text-5xl"
            >
              {sortedText[currentIndex]}
            </motion.h1>
          </AnimatePresence>
          <div className='mt-12'>
          <ul className="flex space-x-6">
      {/* LinkedIn */}
      <li>
        <a href="https://www.linkedin.com/in/%F0%9D%98%9A%EA%AE%92%EA%AD%B5%D1%B5%F0%9D%91%8E%E0%B8%97i-s%E2%B2%8F%E1%B4%9C%E1%B4%8B%CA%9F%E1%B4%80-38280121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
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
        <a href="/image/CV.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt className="w-9 h-9 text-white" />
        </a>
      </li>
    </ul>
 
</div>




        </motion.div>
      </div>

    </motion.div>
  );
};

export default CenteredComponent;