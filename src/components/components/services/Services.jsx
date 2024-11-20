import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaReact, 
  FaCss3, 
  FaJsSquare 
} from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMui, SiBootstrap } from 'react-icons/si';

const skillsData = [
  {
    icon: <FaHtml5 className="text-orange-500" />,
    title: "HTML5",
    description: "Semantic markup and structure"
  },
  {
    icon: <FaJsSquare className="text-yellow-400" />,
    title: "JavaScript",
    description: "Dynamic web interactions"
  },
  {
    icon: <FaReact className="text-blue-500" />,
    title: "React.js",
    description: "Component-based UI development"
  },
  {
    icon: <SiMui className="text-blue-300" />,
    title: "Material UI",
    description: "Responsive design components"
  },
  {
    icon: <SiTailwindcss className="text-teal-400" />,
    title: "Tailwind CSS",
    description: "Utility-first styling"
  },
  {
    icon: <motion.div 
      animate={{ rotate: 360 }}
      transition={{ 
        repeat: Infinity, 
        duration: 4, 
        ease: "linear" 
      }}
    >
      <SiRedux className="text-purple-600" />
    </motion.div>,
    title: "Redux",
    description: "State management"
  },
  {
    icon: <SiBootstrap className="text-purple-500" />,
    title: "Bootstrap",
    description: "Responsive grid system"
  }
];

const ServiceCard = ({ skill }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg text-center"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(0,0,0,0.3)"
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-6xl mb-4 flex justify-center">
      {skill.icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
    <p className="text-gray-400">{skill.description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <motion.div 
      className="bg-gray-900 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Skills & Services
        </motion.h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {skillsData.map((skill, index) => (
            <ServiceCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;