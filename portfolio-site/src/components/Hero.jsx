import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "Game Developer", 
    "Bot Creator",
    "Problem Solver",
    "CS Student"
  ];

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          🚀 Open to Internship Opportunities
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I'm <span className="gradient-text">Khytron</span>
        </motion.h1>
        
        <motion.div
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="role-prefix">I'm a </span>
          <TypeWriter texts={roles} speed={80} deleteSpeed={40} pauseTime={2000} />
        </motion.div>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A passionate developer crafting innovative solutions with
          <span className="tech-highlight"> Java</span>,
          <span className="tech-highlight"> Python</span>,
          <span className="tech-highlight"> JavaScript</span> &
          <span className="tech-highlight"> Game Development</span>
        </motion.p>
        
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Languages</span>
          </div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Coding</span>
          </div>
        </motion.div>
        
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </motion.div>
        
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://github.com/Khytron" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:your.email@example.com" title="Email">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
      
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
