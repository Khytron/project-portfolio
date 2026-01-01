import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          <a href="#skills" onClick={closeMobileMenu}>Skills</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
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
