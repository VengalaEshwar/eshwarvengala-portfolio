import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Brain, Users, MonitorCog, LayoutTemplate, Braces, Search } from 'lucide-react';
import "../App.css"
const About = () => {
  const technologies = [
    { name: 'Languages', icon: Code2, skills: 'Java ,Python ,C++ ,JavaScript'},
    { name: 'Frontend', icon: Globe, skills: 'React.js ,Tailwind CSS ,JavaScript ,HTML ,CSS'},
    { name: 'Backend', icon: Database, skills: 'Node.js ,Express.js ,Spring Framework ,Hibernate' },
    { name: 'Databases', icon: Database, skills: 'MongoDB ,MySQL ,PostgresSQL'},
    { name: 'AI/ML', icon: Brain, skills: 'TensorFlow ,Scikit-learn ,Pandas ,NumPy' },
    // { name: 'Mobile', icon: Smartphone, skills: 'React Native ,Flutter' },
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
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-portfolio-accent to-purple-500 rounded-full mb-6"></div>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <p className="text-lg text-portfolio-text-muted leading-relaxed mb-6">
        I am a dedicated Full Stack Developer and competitive programmer currently pursuing a B.Tech in Computer Science at GRIET, maintaining a CGPA of 9.4. My journey in technology is fueled by a genuine curiosity to understand complex problems and develop meaningful solutions.
        </p>
        
        <p className="text-lg text-portfolio-text-muted leading-relaxed mb-6">
          I have experience working with frontend frameworks like React.js as well as backend technologies such as Node.js and the Spring Framework. I enjoy building scalable and user-focused applications while continuously expanding my technical skills.
        </p>

        <p className="text-lg text-portfolio-text-muted leading-relaxed">
          Competitive programming is a significant part of my growth, and I actively participate in challenges that help sharpen my problem-solving and algorithmic thinking.Alongside coding, I have mentored students as part of Smart Interviews and contributed as a member of Xkernal and FSW-GRIET through organizing and participating in coding events. I believe collaboration and continuous learning are essential to driving innovation in technology.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-2xl font-semibold mb-6 flex items-center">
          {/* <Users className="mr-3 text-portfolio-accent" /> */}
          <MonitorCog className="mr-3 text-portfolio-accent"/>
          What I'm Doing
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Competative Programming', desc: 'Regularly participate in coding contests and consistently maintain strong ratings.' ,icon : <Braces/>},
            { title: 'Full stack Development', desc: 'Hands-on experience in MERN stack and Java Spring-based application development.',icon :<LayoutTemplate/> },
            { title: 'Explore', desc: 'Continuously exploring new technologies and quickly adapting to them.',icon : <Search/> }
          ].map((value, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-container rounded-lg p-4 hover:bg-portfolio-gray transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-portfolio-accent mb-2 flex">{value.icon}<pre>{" "+value.title}</pre></h4>
              <p className="text-sm text-portfolio-text-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} >
        <h3 className="text-2xl font-semibold mb-6 flex items-center">
          <Code2 className="mr-3 text-portfolio-accent" />
          Technology Stack
        </h3>
        <div className= "flex max-w-[55rem] gap-6 p-4 overflow-x-scroll custom-scroll">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-container  rounded-xl p-6  hover:scale-105 transition-all duration-300" 
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4 ">
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-accent to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <tech.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold">{tech.name}</h4> 
              </div>
              <div className="space-y-2">
                {tech.skills}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
