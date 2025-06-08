
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Brain, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Hope-Bridge',
      description: 'MERN-stack platform enabling secure adoption workflows, transparent donation tracking, and orphanage connectivity with role-based access.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      year: '2025',
      github: 'https://github.com/VengalaEshwar/project-hopebridge',
      demo: 'https://project-hopebridge.onrender.com/',
      image : "https://res.cloudinary.com/dddkksq5w/image/upload/v1749375037/Screenshot_2025-06-08_150009_wk4cca.png"
    },
    {
      title: 'Finverse',
      description: 'A comprehensive financial literacy platform with real-time information retrieval using multiple APIs and Gemini AI-powered chatbot.',
      technologies: ['ExpressJS', 'NodeJS', 'Gemini AI', 'Unix/Linux'],
      year: '2024',
      github: 'https://github.com/VengalaEshwar/project-finbuddy',
      demo: 'https://github.com/VengalaEshwar/project-finbuddy',
      image : "https://res.cloudinary.com/dddkksq5w/image/upload/v1749374978/Screenshot_2025-06-08_145832_lcubnu.png"
    },
    {
      title: 'NeuroVista',
      description: 'Predictive ML model for Parkinson\'s disorder detection using advanced machine learning algorithms with Flask backend and React frontend.',
      technologies: ['Python', 'ML Model', 'ReactJS', 'Flask'],
      year: '2024',
      github: 'https://github.com/VengalaEshwar/project-k',
      demo: 'https://github.com/VengalaEshwar/project-k',
      image : "https://res.cloudinary.com/dddkksq5w/image/upload/v1749375965/Screenshot_2025-06-08_151504_dzgtvn.png"
    },
    {
      title: 'Word-Wave',
      description: 'Secure full-stack blog application using Spring Boot and Spring Security for authenticated access with complete CRUD operations.',
      technologies: ['Spring Boot', 'ReactJS', 'Spring Security', 'REST API'],
      year: '2025',
      github: 'https://github.com/VengalaEshwar/project-wordwave',
      demo: 'https://github.com/VengalaEshwar/project-wordwave',
      image : "https://res.cloudinary.com/dddkksq5w/image/upload/v1749375955/Screenshot_2025-06-08_151324_vljv0w.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="glass-container rounded-2xl p-8"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-portfolio-accent to-purple-500 rounded-full mb-6"></div>
        <p className="text-portfolio-text-muted">
          Here are some of my  projects that showcase my skills in full-stack development, 
          machine learning, and innovative problem-solving.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="project-card grou overflow-hiddenp"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Project Icon */}
            {/* <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse`}>
              <project.icon size={32} className="text-white" />
            </div> */}

            {/* Project Header */}
           <div className="relative w-full h-48 rounded-t-xl overflow-hidden mb-4">
  <img
    src={project.image}
    alt="dp"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-10 p-4 text-white">
    <div className="flex space-x-2 mt-2">
      <motion.a 
        href={project.github}
        whileHover={{ scale: 1.1, y: -2 }}
        target="_blank"
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 bg-portfolio-gray rounded-lg flex items-center justify-center hover:bg-portfolio-accent transition-colors"
      >
        <Github size={16} />
      </motion.a>
      <motion.a 
        href={project.demo}
        target="_blank"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 bg-portfolio-gray rounded-lg flex items-center justify-center hover:bg-portfolio-accent transition-colors"
      >
        <ExternalLink size={16} />
      </motion.a>
    </div>
  </div>

  {/* Optional: Add a dark overlay for better contrast */}
  <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
</div>
              

            <div className="p-6">
               <h3 className="text-xl font-bold mb-1">{project.title}</h3>
    <span className="text-sm text-portfolio-accent">{project.year}</span>
              {/* Project Description */}
            <p className="text-portfolio-text-muted mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * techIndex }}
                  className="px-3 py-1 bg-portfolio-dark rounded-full text-xs text-portfolio-accent border border-portfolio-accent/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Want to see more?</h3>
        <p className="text-portfolio-text-muted mb-6">
          Check out my GitHub profile for my projects.
        </p>
        <motion.a 
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-portfolio-accent to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
        >
          <Github size={20} className="mr-2" />
          <a href="https://github.com/VengalaEshwar" target="_blank">View GitHub Profile</a>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
