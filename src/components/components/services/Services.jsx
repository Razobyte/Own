import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaHtml5, 
  FaReact, 
  FaCss3, 
  FaJsSquare,
  FaWordpress,
} from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMui, SiBootstrap } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const skillsData = [
  {
    icon: <FaHtml5 className="text-orange-500" />,
    title: "HTML5",
    description: "Semantic markup and structure",
    gradient: "from-orange-400 to-orange-600"
  },
  {
    icon: <FaCss3 className="text-blue-500" />,
    title: "CSS3",
    description: "Advanced styling & animations",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: <FaJsSquare className="text-yellow-400" />,
    title: "JavaScript",
    description: "Dynamic web interactions",
    gradient: "from-yellow-300 to-yellow-500"
  },
  {
    icon: <FaReact className="text-blue-500" />,
    title: "React.js",
    description: "Component-based UI development",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: <FaWordpress className="text-blue-400" />,
    title: "WordPress",
    description: "CMS & custom theme development",
    gradient: "from-blue-300 to-blue-500"
  },
  {
    icon: <SiMui className="text-blue-300" />,
    title: "Material UI",
    description: "Responsive design components",
    gradient: "from-blue-200 to-blue-400"
  },
  {
    icon: <SiTailwindcss className="text-teal-400" />,
    title: "Tailwind CSS",
    description: "Utility-first styling",
    gradient: "from-teal-300 to-teal-500"
  },
  {
    icon: <SiRedux className="text-purple-600" />,
    title: "Redux",
    description: "State management",
    gradient: "from-purple-500 to-purple-700"
  },
  {
    icon: <SiBootstrap className="text-purple-500" />,
    title: "Bootstrap",
    description: "Responsive grid system",
    gradient: "from-purple-400 to-purple-600"
  },
  {
    icon: <TbBrandFramerMotion className="text-yellow-500" />,
    title: "Framer Motion",
    description: "Animation library for React",
    gradient: "from-yellow-400 to-yellow-600"
  }
];

const ServiceCard = ({ skill, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.5
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative group min-w-[300px] mx-2"
    >
      <motion.div
        className={`bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 absolute inset-0 rounded-lg transition-opacity duration-300`}
      />
      <motion.div
        className="bg-gray-900/90 p-6 rounded-lg text-center relative backdrop-blur-sm border
         border-gray-700 h-full"
        whileHover={{ 
          scale: 1.05,
          rotate: [0, 2, 0],
          transition: { duration: 0.6 }
        }}
      >
        <motion.div 
          className="text-6xl mb-4 flex justify-center"
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {skill.icon}
          </motion.div>
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-2 relative">
          <span className="relative z-10">
            {skill.title}
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </span>
        </h3>
        <p className="text-gray-400 relative z-10">{skill.description}</p>
      </motion.div>
    </motion.div>
  );
};

const SkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef);

  const visibleCards = 5;
  const duplicatedSkills = [...skillsData, ...skillsData]; // Duplicate for infinite scroll

  useEffect(() => {
    let interval;
    
    if (isInView) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % skillsData.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isInView]);

  useEffect(() => {
    controls.start({
      x: -currentIndex * 320,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    });
  }, [currentIndex, controls]);

  return (
    <div className="bg-gradient-to-b from-[#2b2929] via-gray-900 to-[#3b3a3a] py-20
     relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My Skills & Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From modern frameworks to traditional platforms, I bring your digital vision to life
          </p>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={controls}
            initial={{ x: 0 }}
            style={{ cursor: "grab" }}
            drag="x"
            dragConstraints={{ left: -1600, right: 0 }}
            onDragEnd={(e, info) => {
              const change = Math.round(info.offset.x / 320);
              setCurrentIndex((prev) => {
                const newIndex = prev - change;
                return ((newIndex % skillsData.length) + skillsData.length) % skillsData.length;
              });
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <ServiceCard key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
          {skillsData.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;