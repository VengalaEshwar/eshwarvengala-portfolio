
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ExternalLink, Code, Database, Brain ,Smile} from 'lucide-react';

//  {
//       title: 'Mastering Data Structures: A Complete Guide to Competitive Programming',
//       excerpt: 'Dive deep into the world of data structures and algorithms. Learn how to approach complex problems systematically...',
//       category: 'Programming',
//       readTime: '8 min read',
//       date: 'Dec 15, 2024',
//       icon: Code,
//       color: 'from-blue-500 to-cyan-500',
//       tags: ['DSA', 'Competitive Programming', 'Java']
//     }
const Blogs = () => {
  const blogs = [
   {
    title : 'The aplha-beta',
    excerpt : "Some random variables which  seems to be not close but they are not........!",
    category : 'Fun',
    date : "Jun 08, 2025",
    icon : Smile,
    color :'from-blue-500 to-cyan-500',
    tags: ['fun']
   }
  ];

  const categories = ['All', 'Fun'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

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
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-portfolio-accent to-purple-500 bg-clip-text text-transparent flex items-center">
          <BookOpen className="mr-3 text-portfolio-accent" />
          My Blogs
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-portfolio-accent to-purple-500 rounded-full mb-6"></div>
        <p className="text-portfolio-text-muted">
         Sharing bits of tech and bytes of fun
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={itemVariants} className="glass-container rounded-xl p-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-portfolio-accent text-white'
                  : 'bg-portfolio-gray hover:bg-portfolio-light-gray text-portfolio-text-muted'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Blog Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-6"
      >
        {filteredBlogs.map((blog, index) => (
          <motion.article 
            key={index}
            layout
            variants={itemVariants}
            className="glass-container rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            whileHover={{ y: -5 }}
          >
            {/* Blog Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${blog.color} rounded-lg flex items-center justify-center`}>
                <blog.icon size={24} className="text-white" />
              </div>
            </div>

            {/* Category & Meta */}
            <div className="flex items-center justify-between text-xs text-portfolio-text-muted mb-3">
              <span className="px-2 py-1 bg-portfolio-dark rounded-md text-portfolio-accent">
                {blog.category}
              </span>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {blog.date}
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <h3 className="text-lg font-bold mb-3 group-hover:text-portfolio-accent transition-colors">
              {blog.title}
            </h3>
            <p className="text-portfolio-text-muted text-sm leading-relaxed mb-4">
              {blog.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 bg-portfolio-dark rounded-md text-xs text-portfolio-text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blogs;
