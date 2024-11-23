import React, { useState, useEffect } from 'react';
import { BiLink } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { title } from 'framer-motion/client';

const projectsData = [
  {
    title:"Kanban-Board",
    description:"The Kanban Board is a powerful project management application designed to help teams and companies organize tasks in a visually intuitive way. Inspired by tools like Jira, this app allows users to create, manage, and track tasks in different stages using a drag-and-drop interface. Built with  and React JS, and CSS,the app utilizes Redux for state management to handle real-time updates and task statuses across the board. Additionally, Redux Persist is integrated to ensure that the user’s progress is saved and remains persistent even after refreshing the page. The app provides an efficient way for teams to collaborate, prioritize tasks, and manage workflows seamlessly.",
    technologies:["React JS", "CSS", "Redux", "Redux Persist", "React-Beautiful-DnD (for drag-and-drop functionality)"],
    liveLink:"https://kanbanboard2-0.onrender.com/"

  },
  {
    title: "Twitter Clone",
    description: "A Twitter-like app built with React JS, featuring tweet creation, editing, deletion, and follow/unfollow functionality. Recoil manages app state, while MUI provides a responsive UI. User data is stored in localStorage, ensuring that authenticated users remain logged in even after refreshing. Protected routing restricts access to certain features. Hosted on Netlify for fast, reliable deployment.",
    technologies: ["React Js", "Recoil", "MUI", "CSS Modules"],
    liveLink: "https://twitter-clone17.netlify.app/",
  },
  {
    title: "Organic Matki",
    description: "Contributed to the development of key e-commerce functionalities, including product catalog management, user authentication, and payment gateway integration. I implemented a seamless checkout experience, enabling users to securely process transactions through integrated payment systems. Utilized React JS for building dynamic UI components, Tailwind CSS for responsive and modern styling, and Redux for state management to handle the shopping cart and user sessions effectively.",
    technologies: ["React JS", "Tailwind CSS", "Redux", "Payment Gateway Integration"],
    liveLink: "https://www.organicmatki.in/"
  },
  {
    title:"DTS Taxi",
    description:"This project showcases a visually appealing static website built using React JS and Bootstrap, with a focus on responsive design and smooth animations. The website is designed to provide a seamless user experience, featuring dynamic page elements powered by React's component-based architecture and styled using Bootstrap's grid system and components. Additionally, it integrates a POST API to enable users to book rides or appointments, allowing real-time interactions with the backend for booking services. While the site primarily focuses on front-end design and user interface, the integration of API functionality ensures smooth and functional user interactions.",
    technologies:["React Js","Bootstrap","Post Api Integration"],
    liveLink:"https://dtstaxi.com/"
  },
  {
    title:"SanarCare",
    description:"SanarCare is a hospital management web application designed to streamline the booking and management of medical tests. The project leverages POST API for managing and controlling all data, allowing administrators to have full control over patient records, test bookings, and appointments. Users can easily fill out forms to book medical tests, while the backend API handles the submission and organization of these requests. The system ensures a smooth flow of data, making it easy for the administration to manage patient test bookings and appointments in real-time.",
    technologies:["React js","Boostrap","POST API Integration"],
    liveLink:"https://sanarmanually.netlify.app/"
  },
  {
    title:"Haealing-Gloves",
    description:"Healing Gloves is a comprehensive hospital management platform designed to manage patient data and medical test bookings seamlessly. Built with React JS and utilizing POST API Integration, this site allows users to fill out forms to book various medical tests, while administrators manage all patient records and bookings through the backend. The website is also SEO optimized, ensuring it ranks well in search engines for relevant medical and healthcare queries, driving organic traffic. The combination of dynamic front-end features, smooth user experience, and robust backend makes it an ideal solution for healthcare facilities looking to offer easy test bookings and real-time data management.",
    technologies:["React JS", "POST API Integration", "SEO Optimization."],
    liveLink:"https://www.healinggloves.in/"
  }


];

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentProject = projectsData[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[var-primary] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        {/* Header with line */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-2 left-0 h-[1px] w-full bg-gradient-to-r from-[#005BBB] to-transparent" />
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-500">
            View Our Projects
          </h1>
        </motion.div>

        {/* Project content grid */}
        <div className="grid grid-cols-12 gap-5 relative">
          {/* Left column - Project info */}
          <div className="col-span-12 lg:col-span-5 sticky top-20">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
              >
                {/* Project title with border */}
                <div className="relative mb-8">
                  <div className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-orange-500 to-purple-600" />
                  <h2 className="text-4xl font-bold text-white mb-4">{currentProject.title}</h2>
                </div>

                {/* Technology tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentProject.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#005BBB]/50
                       to-white/20 border border-[#005BBB]/40 text-white text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Project description */}
                <motion.p 
                  className="text-gray-100 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentProject.description}
                </motion.p>

                {/* Link with hover effect */}
                <motion.div 
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors group"
                  >
                    <BiLink />
                    <span className="relative">
                      Live Demo
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right column - Project preview */}
          <div className="col-span-12 lg:col-span-7 relative">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Preview container with custom frame */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.y, velocity.y);

                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrevious();
                  }
                }}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl"
              >
                {/* Browser-like top bar */}
                <div className="bg-gray-900 p-3 flex items-center gap-4 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 px-4 py-1 bg-gray-800 rounded-full text-center">
                    <span className="text-gray-400 text-sm">{currentProject.liveLink}</span>
                  </div>
                </div>

                {/* Project iframe */}
                <div className="w-full overflow-hidden" style={{ height: '500px' }}>
                  <iframe
                    src={currentProject.liveLink}
                    title={currentProject.title}
                    className="w-full h-full border-none transform scale-90 origin-top"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projectsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-orange-500 to-purple-600' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;