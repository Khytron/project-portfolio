import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <a href="#" className="logo">
          <span className="logo-bracket">&lt;</span>
          Khytron
          <span className="logo-bracket">/&gt;</span>
        </a>
        
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a 
            href="https://github.com/Khytron" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-github"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
