import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNode, 
  FaDatabase, 
  FaGithub, 
  FaLink 
} from 'react-icons/fa';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack web application with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://your-ecommerce-site.com",
    image: "/path/to/ecommerce-image.jpg"
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard with data visualization",
    technologies: ["React", "Firebase", "Chart.js"],
    githubLink: "https://github.com/yourusername/dashboard",
    liveLink: "https://your-dashboard.com",
    image: "/path/to/dashboard-image.jpg"
  },
  {
    title: "AI Chatbot",
    description: "Machine learning-powered conversational assistant",
    technologies: ["Python", "TensorFlow", "React"],
    githubLink: "https://github.com/yourusername/chatbot",
    liveLink: "https://your-chatbot.com",
    image: "/path/to/chatbot-image.jpg"
  },
  {
    title: "Travel Booking App",
    description: "Comprehensive travel planning and booking platform",
    technologies: ["React Native", "Node.js", "GraphQL"],
    githubLink: "https://github.com/yourusername/travel-app",
    liveLink: "https://your-travel-app.com",
    image: "/path/to/travel-image.jpg"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing professional work",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://your-portfolio.com",
    image: "/path/to/portfolio-image.jpg"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool",
    technologies: ["React", "Express", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/task-management",
    liveLink: "https://your-task-management.com",
    image: "/path/to/task-management-image.jpg"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex space-x-4">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaGithub size={30} />
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaLink size={30} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div 
      className="py-16"
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
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;