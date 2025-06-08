import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CIcon } from '@coreui/icons-react';
import { cibLeetcode,cilCloudDownload,cibInstagram} from '@coreui/icons';
import { db, doc, getDoc, setDoc, updateDoc } from "../utils/firebase";
import {
  User,
  GraduationCap,
  Code,
  Trophy,
  BookOpen,
  Camera,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  StickyNote
} from 'lucide-react';
import { useIsMobile } from '../hooks/UseMobile';

// Import pages
import About from '../pages/About';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Achievements from '../pages/Achievements';
import Blogs from '../pages/Blogs';
import Gallery from '../pages/Gallery';

const navItems = [
  { id: 'about', label: 'About', icon: User, component: About },
  { id: 'education', label: 'Education & Skills', icon: GraduationCap, component: Education },
  { id: 'projects', label: 'Projects', icon: Code, component: Projects },
  { id: 'achievements', label: 'Achievements', icon: Trophy, component: Achievements },
  { id: 'blogs', label: 'Blogs', icon: BookOpen, component: Blogs },
  { id: 'gallery', label: 'Gallery', icon: Camera, component: Gallery },
];

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = useIsMobile();

  const handleResumeClick = async () => {
  // Trigger resume download first
  setActiveTab('resum');
  const link = document.createElement("a");
  link.href = "/eshwar_vengala_resume.pdf";
  link.target="_blank";
  // link.download = "eshwar_vengala_resume.pdf";
  link.click();

  // Now update Firestore (don’t await before download)
  try {
    const clickRef = doc(db, "analytics", "resumeClicks");
    const snap = await getDoc(clickRef);

    if (snap.exists()) {
      await updateDoc(clickRef, { count: snap.data().count + 1 });
    } else {
      await setDoc(clickRef, { count: 1 });
    }
  } catch (error) {
    console.error("Failed to update resume click count:", error);
  }
};

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const ActiveComponent = navItems.find(item => item.id === activeTab)?.component || About;
  const shouldAnimate = !hasAnimated;

  const sidebarVariants = {
    hidden: { x: -320, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
  };

  const ProfileSection = () => (
    <div>
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-60 max-h-60 rounded-full bg-portfolio-accent p-1">
            <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center overflow-hidden">
              <img src="https://res.cloudinary.com/dddkksq5w/image/upload/v1749393246/profile_bwjsm9.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">Vengala Eshwar</h1>
        <p className="text-portfolio-text-muted w-auto overflow-visible">
          <div className='bg-portfolio-light-gray p-0.5 rounded-md py-2'>
            <div>Full Stack Developer &</div>
            <div>Competitive Programmer</div>
          </div>
        </p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-3 text-sm">
          <Mail size={16} className="text-portfolio-accent" />
          <span>eshwarvengala30@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <Phone size={16} className="text-portfolio-accent" />
          <span>+91 8688496180</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <MapPin size={16} className="text-portfolio-accent" />
          <span>India</span>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <a href="https://github.com/VengalaEshwar" className="w-10 h-10 bg-portfolio-gray rounded-lg flex items-center justify-center hover:bg-portfolio-accent transition-colors" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/eshwarvengala/" className="w-10 h-10 bg-portfolio-gray rounded-lg flex items-center justify-center hover:bg-portfolio-accent transition-colors" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/eshwar_vengala_2004/" className="w-10 h-10 bg-portfolio-gray rounded-lg flex items-center justify-center hover:bg-portfolio-accent transition-colors" target="_blank" rel="noopener noreferrer">
          <CIcon icon={cibInstagram} size="xl" style={{ fill: 'white', height: "20px", width: "20px" }} />
        </a>
        <a href="https://drive.google.com/drive/folders/1iHkr4P-kmnvW0TAJUZ3NdA21cMd-pXJR?usp=sharing" className="w-10 h-10 bg-portfolio-gray rounded-lg flex items-center justify-center hover:bg-portfolio-accent transition-colors" target="_blank" rel="noopener noreferrer">
          <ExternalLink size={20} />
        </a>
      </div>

      <nav className={`space-y-2 ${isMobile ? 'hidden' : 'block'}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`nav-item w-full flex items-center space-x-3 text-left ${
              activeTab === item.id ? 'active' : ''
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}

        <button
          onClick={handleResumeClick}
          className={`nav-item w-full flex items-center space-x-3 text-left ${
            activeTab === 'resume' ? 'active' : ''
          }`}
        >
          <StickyNote size={20} />
          <span>Resume</span>
        </button>
      </nav>
    </div>
  );

  const MobileNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 glass-container rounded-t-2xl p-4 z-50 md:hidden">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`p-3 rounded-lg ${
              activeTab === item.id ? 'bg-portfolio-accent' : 'hover:bg-portfolio-gray'
            }`}
          >
            <item.icon size={20} />
          </button>
        ))}
        <button
          onClick={handleResumeClick}
          className={`p-3 rounded-lg ${
            activeTab === 'resume' ? 'bg-portfolio-accent' : 'hover:bg-portfolio-gray'
          }`}
        >
          <StickyNote size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`${isMobile ? 'flex flex-col' : 'flex gap-6'}`}>
          <motion.div
            variants={sidebarVariants}
            initial={shouldAnimate ? 'hidden' : false}
            animate={shouldAnimate ? 'visible' : false}
            className={`glass-container rounded-2xl p-6 ${isMobile ? 'w-full mb-6' : 'w-80 h-fit sticky top-6'}`}
          >
            <ProfileSection />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial={shouldAnimate ? 'hidden' : false}
            animate={shouldAnimate ? 'visible' : false}
            className={`flex-1 ${isMobile ? 'pb-24' : ''}`}
          >
            <ActiveComponent />
          </motion.div>
        </div>
      </div>

      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default MainLayout;
