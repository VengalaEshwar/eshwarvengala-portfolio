
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Database, Globe, Users, Zap, Brain } from 'lucide-react';

const Education = () => {
  const profiles = [
    ["https://res.cloudinary.com/dddkksq5w/image/upload/v1749395113/icons8-leetcode-96_eymbvl.png","https://leetcode.com/u/eshwarvengala/"],
  ["https://res.cloudinary.com/dddkksq5w/image/upload/v1749394432/icons8-codechef-100_hdxzz2.png","https://www.codechef.com/users/eshwarvengala"],["https://res.cloudinary.com/dddkksq5w/image/upload/v1749394614/icons8-hackerrank-96_pjm5xy.png","https://www.hackerrank.com/profile/22241A05R4"],["https://res.cloudinary.com/dddkksq5w/image/upload/v1749394773/icons8-codeforces-96_ixqrou.png","https://codeforces.com/profile/eshwarvengala"],["https://imagedelivery.net/jP_2Cu8opO0otIERyhqaNQ/6ae91311-9b06-4e0a-1758-19b4df5f0500/public","https://smartinterviews.in/profile/eshwar_1617" ]
   ]
  const skills = [
    { name: 'Programming Languages', skills : [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    ] },
    { name: 'Web Development', skills : [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
    ] },
    { name: 'Frameworks', skills : [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
    ] },
    { name: 'AI/ML', skills : [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
    ] },
    { name: 'Software Tools', skills : [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
    ] }
  ];

  const certifications = [
    { title: 'C Programming', issuer: 'Cisco', year: '2023' ,link : 'https://drive.google.com/file/d/1iQBCPur7W0sFre7ToM-ovfS7JNyWesIR/view?usp=drive_link'},
    { title: 'Python Programming', issuer: 'Cisco', year: '2023' ,link : 'https://drive.google.com/file/d/1iP_jMosbuUodmcSW7wShdWFl-q8RjELN/view?usp=drive_link'},
    { title: 'MERN Stack Development', issuer: 'PW Skills', year: '2024' ,link :'https://drive.google.com/file/d/1_2PftSY2ur175fP-BcEiD4W-iePDU3cj/view?usp=sharing'},
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
      className="space-y-8"
    >
      {/* Education Section */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent flex items-center">
          <GraduationCap className="mr-3 text-portfolio-accent" />
          Education
        </h2>
        
        <motion.div 
          variants={itemVariants}
          className="relative pl-6 border-l-2 border-portfolio-accent"
        >
          <div className="absolute -left-3 top-0 w-6 h-6 bg-portfolio-accent rounded-full"></div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">B.Tech in Computer Science and Engineering</h3>
            <p className="text-portfolio-accent font-medium">Gokaraju Rangaraju Institute of Engineering and Technology</p>
            <p className="text-portfolio-text-muted">2022 - 2026</p>
            <div className="mt-2 flex items-center">
              <span className="text-2xl font-bold text-portfolio-accent">9.4</span>
              <span className="ml-2 text-portfolio-text-muted">CGPA</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="relative pl-6 border-l-2 border-portfolio-accent"
        >
          <div className="absolute -left-3 top-0 w-6 h-6 bg-portfolio-accent rounded-full"></div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Intermediate in MPC</h3>
            <p className="text-portfolio-accent font-medium">Sri Chaitanya Junior College</p>
            <p className="text-portfolio-text-muted">2020 - 2022</p>
            <div className="mt-2 flex items-center">
              <span className="text-2xl font-bold text-portfolio-accent">981</span>
              <span className="ml-2 text-portfolio-text-muted">score</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="relative pl-6 border-l-2 border-portfolio-accent"
        >
          <div className="absolute -left-3 top-0 w-6 h-6 bg-portfolio-accent rounded-full"></div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">10th class (SSC) </h3>
            <p className="text-portfolio-accent font-medium">Nirbhaya High School</p>
            <p className="text-portfolio-text-muted">2019 - 2020</p>
            <div className="mt-2 flex items-center">
              <span className="text-2xl font-bold text-portfolio-accent">10</span>
              <span className="ml-2 text-portfolio-text-muted">CGPA</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent flex items-center">
          <Zap className="mr-3 text-portfolio-accent" />
          My Skills
        </h2>
        
        <div className="flex flex-wrap gap-6 glass-container p-5 rounded-4xl overflow-hidden">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative w-full"
            >
            <span className="font-medium text-xl">{skill.name}</span>
              
            <div className="flex flex-wrap">
              {skill.skills.map((skill, key) => {
                return (
                  <div
                    key={key}
                    className="image w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem] hover:scale-95 p-1 m-2 rounded-xl glass-container overflow-hidden cursor-pointer justify-center items-center"
                  >
                    <img src={skill} className="rounded-xl" />
                  </div>
                );
              })}
            </div>
            
          
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Coding Profiles */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent">
          Coding Profiles
          <div className="flex flex-wrap mt-2">
              {profiles.map((skill, key) => {
                return (
                  <a href={skill[1]} target="_blank">
                    <div
                    key={key}
                    
                    className="image w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem] p-1 m-2 rounded-xl glass-container overflow-hidden cursor-pointer justify-center items-center hover:scale-105"
                  >
                    
                    <img src={skill[0]} className="rounded-xl" />
                  </div>
                  </a>
                 
                );
              })}
            </div>
        </h2>
      </motion.div>
      {/* Experience Timeline */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-6">
          {[
            {
              title: 'Full-Stack Developer Intern, Akiyam Solutions',
              period: '2025-present',
              description: 'Currently interning as a Full Stack Developer at Akhiyam Solutions, contributing to end-to-end web application development.'
            },
            {
              title: 'Student Mentor, Smart Interviews',
              period: '2024-2025',
              description: 'Mentored 150+ students in mastering Data Structures and Algorithms, improving their problem-solving skills and contest performance.'
            },
            {
              title: 'Tech Member, FSW-GRIET',
              period: '2023-2025',
              description: 'Managing club\'s technical infrastructure, developing official web pages, and organizing FOSS events and hackathons.'
            },
            {
              title: 'Training Team, XKernal-GRIET',
              period: '2023-2025',
              description: 'Contributing by preparing coding questions and assisting in organizing annual coding contests and events.'
            }
          ].map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative pl-6 border-l-2 border-portfolio-gray hover:border-portfolio-accent transition-colors"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-portfolio-gray rounded-full hover:bg-portfolio-accent transition-colors"></div>
              <div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-portfolio-accent text-sm mb-2">{exp.period}</p>
                <p className="text-portfolio-text-muted">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
        {/* Certifications Section */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent flex items-center">
          <Award className="mr-3 text-portfolio-accent" />
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a href={cert.link} target="_blank">
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-container rounded-xl p-6 hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
              >
              <div className="w-12 h-12 bg-gradient-to-br from-portfolio-accent to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              <p className="text-portfolio-text-muted text-sm mb-1">{cert.issuer}</p>
              <p className="text-portfolio-accent text-sm">{cert.year}</p>
            </motion.div>
          </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
