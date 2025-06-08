import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Code, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'LeetCode Knight',
      description: '2000+ rating and top 4.5% rank with 1100+ problems solved',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      stats: ['2000+ Rating', 'Top 4.5%', '1100+ Problems']
    },
    {
      title: 'HackerRank Gold Badge',
      description: 'Gold Badge in Problem Solving (DSA) and Java with strong OOPs understanding',
      icon: Award,
      color: 'from-amber-500 to-yellow-500',
      stats: ['Gold Badge', 'Problem Solving', 'Java Expert']
    },
    {
      title: 'CodeChef 3-Star',
      description: '3-Star Rating on CodeChef with 250+ problems solved',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
      stats: ['3-Star Rating', '250+ Problems', 'Contest Participant']
    },
    {
      title: 'Smart Interviews Rank 74',
      description: 'Global Rank 74 on Smart Interviews platform (out of 40,000+ users)',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      stats: ['Rank 74', '40,000+ Users', 'Top Performer']
    },
    {
      title: 'Academics & prizes',
      description: 'Maintaining 9.4 CGPA in Computer Science Engineering and  2 prizes in inter-college coding competitions',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500',
      stats: ['9.4 CGPA', 'CSE', 'Academic Merit']
    },
    {
      title: 'Mentoring',
      description: 'Mentored 150+ students in Data Structures and Algorithms',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      stats: ['300+ Students', 'DSA Mentor', 'Impact Leader']
    }
  ];

  const certifications = [
    { name: 'C Programming', issuer: 'Cisco', color: 'bg-blue-500' },
    { name: 'Python Programming', issuer: 'Cisco', color: 'bg-green-500' },
    { name: 'MERN Stack', issuer: 'PW Skills', color: 'bg-purple-500' },
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
      {/* Header */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent">
          Achievements & Recognition
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-portfolio-accent to-purple-500 rounded-full mb-6"></div>
        <p className="text-portfolio-text-muted">
          A showcase of my competitive programming achievements, academic excellence, and community contributions.
        </p>
      </motion.div>

      {/* Main Achievements Grid */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="achievement-badge glass-container cursor-pointer"
            whileHover={{ 
              scale: 1.05,

              transition: { duration: 0.2 }
            }}
          >
            {/* Icon */}
            <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mb-4 animate-glow`}>
              <achievement.icon size={32} className="text-white" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
            <p className="text-portfolio-text-muted text-sm mb-4 leading-relaxed">
              {achievement.description}
            </p>

            {/* Stats */}
            {/* <div className="space-y-2">
              {achievement.stats.map((stat, statIndex) => (
                <motion.div 
                  key={statIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * statIndex }}
                  className="text-xs text-portfolio-accent bg-portfolio-dark rounded-md px-2 py-1"
                >
                  {stat}
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        ))}
      </motion.div>






      {/* Certifications Section */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Award className="mr-3 text-portfolio-accent" />
          Professional Certifications
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-container rounded-lg p-4 hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className={`w-8 h-8 ${cert.color} rounded-full mb-3`}></div>
              <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
              <p className="text-portfolio-text-muted text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={itemVariants} className="glass-container rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'LeetCode Rating', value: '2000+', color: 'text-yellow-500' },
            { label: 'Problems Solved', value: '2000+', color: 'text-green-500' },
            { label: 'Students Mentored', value: '150+', color: 'text-blue-500' },
            { label: 'CGPA', value: '9.4', color: 'text-purple-500' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div 
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-portfolio-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
