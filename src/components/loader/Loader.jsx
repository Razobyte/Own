import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false); // Track if audio has started
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const introText = ['HELLO', 'WELCOME', 'TO', 'MY', 'PORTFOLIO'];

  const itemVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };
  

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current && !audioStarted) {
        try {
          await audioRef.current.play();
          setAudioStarted(true); // Set flag to true once audio has started
          console.log("Audio started playing");
          removeUserInteractionListeners();
        } catch (err) {
          console.error("Autoplay failed. Waiting for user interaction.", err);
        }
      }
    };

    // Try autoplay when component mounts
    playAudio();

    // Function to remove the listeners once audio has started
    const removeUserInteractionListeners = () => {
      window.removeEventListener("click", playAudioOnInteraction);
      window.removeEventListener("mousemove", playAudioOnInteraction);
    };

    // Function to start audio on user interaction
    const playAudioOnInteraction = () => {
      playAudio();
    };

    // Add event listeners for both click and mousemove to start audio
    window.addEventListener("click", playAudioOnInteraction);
    window.addEventListener("mousemove", playAudioOnInteraction);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === introText.length - 1) {
          setIsIntroComplete(true);
          clearInterval(interval);

          // Stop the music after intro completes
          if (audioRef.current) {
            audioRef.current.pause();
          }

          // Navigate to home after a delay
          setTimeout(() => {
            navigate('/');
          }, 2000);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      removeUserInteractionListeners(); // Clean up event listeners
    };
  }, [introText, navigate, audioStarted]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <audio
        ref={audioRef}
        src="/image/audio.mpeg"
        loop
      /> {/* Background music */}

      <AnimatePresence mode="wait">
        {!isIntroComplete ? (
          <motion.div
            key={introText[currentIndex]}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="text-5xl font-bold"
          >
            {introText[currentIndex]}
          </motion.div>
        ) : (
          introText.map((text, i) => (
            <motion.div
              key={`complete-${i}`}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-5xl font-bold"
            >
              {text}
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioIntro;