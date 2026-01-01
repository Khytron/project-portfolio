import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaJava, FaPython, FaJs, FaGamepad, FaCode } from 'react-icons/fa';

const projects = [
  {
    name: "Store Management System",
    description: "A comprehensive Store Operation Management System with database integration, built collaboratively for Fundamental of Programming course.",
    html_url: "https://github.com/Khytron/Store-Management-System-7FOP",
    language: "Java",
    stars: 1,
    forks: 1,
    tags: ["Group Project", "Database", "OOP"],
    featured: true
  },
  {
    name: "WhatsApp Gemini Image Editor Bot",
    description: "A WhatsApp bot powered by Gemini AI that can edit images through commands directly within the WhatsApp app.",
    html_url: "https://github.com/Khytron/whatsapp-gemini-image-editor-bot",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    tags: ["AI", "Bot", "WhatsApp API"],
    featured: true
  },
  {
    name: "Ninja-Line",
    description: "A creative 2D Platformer game where players control a ninja by drawing paths - unique gameplay mechanics built with Godot Engine.",
    html_url: "https://github.com/Khytron/Ninja-Line",
    language: "GDScript",
    stars: 0,
    forks: 0,
    tags: ["Game Dev", "2D", "Creative Mechanics"],
    featured: true
  },
  {
    name: "Flappytron",
    description: "A collaborative twist on the classic Flappy Bird game, featuring unique gameplay elements and custom mechanics.",
    html_url: "https://github.com/Khytron/Flappytron",
    language: "C#",
    stars: 0,
    forks: 1,
    tags: ["Game Dev", "Collaboration", "Unity"],
    featured: true
  },
  {
    name: "Personal Telegram Bots",
    description: "Custom Telegram bots developed for personal automation and utility purposes.",
    html_url: "https://github.com/Khytron/personal-telegram-bots",
    language: "Python",
    stars: 0,
    forks: 0,
    tags: ["Automation", "Bot", "Telegram API"],
    featured: false
  },
  {
    name: "Store Management System (Solo)",
    description: "An experimental solo version of the Store Management System, designed to test and expand Java programming skills.",
    html_url: "https://github.com/Khytron/Store-Management-System-Solo",
    language: "Java",
    stars: 0,
    forks: 0,
    tags: ["Solo Project", "Java", "Learning"],
    featured: false
  },
  {
    name: "Minesweepertron",
    description: "A Minesweeper clone built with Godot Engine - classic puzzle game recreation with modern touches.",
    html_url: "https://github.com/Khytron/Minesweepertron",
    language: "GDScript",
    stars: 0,
    forks: 0,
    tags: ["Game Dev", "Puzzle", "Classic"],
    featured: false
  },
  {
    name: "React To-Do List",
    description: "A clean and functional to-do list application built to learn React fundamentals.",
    html_url: "https://github.com/Khytron/basic-to-do-list-with-react",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    tags: ["React", "Frontend", "Learning"],
    featured: false
  }
];

const languageIcons = {
  "Java": <FaJava />,
  "Python": <FaPython />,
  "JavaScript": <FaJs />,
  "GDScript": <FaGamepad />,
  "C#": <FaCode />
};

const languageColors = {
  "Java": "#f89820",
  "Python": "#3776ab",
  "JavaScript": "#f7df1e",
  "GDScript": "#478cbf",
  "C#": "#68217a"
};

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Projects</h2>
        <p>A showcase of my best work and learning journey</p>
      </motion.div>

      <div className="projects-grid featured">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="project-card featured"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="project-header">
              <div className="language-icon" style={{ color: languageColors[project.language] }}>
                {languageIcons[project.language]}
              </div>
              <div className="project-links">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
            
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            
            <div className="project-footer">
              <span className="language" style={{ color: languageColors[project.language] }}>
                <span className="dot" style={{ backgroundColor: languageColors[project.language] }}></span>
                {project.language}
              </span>
              <div className="stats">
                {project.stars > 0 && (
                  <span><FaStar /> {project.stars}</span>
                )}
                {project.forks > 0 && (
                  <span><FaCodeBranch /> {project.forks}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className="other-projects-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Other Projects
      </motion.h3>

      <div className="projects-grid other">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="project-card small"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="project-header">
              <h4>{project.name}</h4>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <p>{project.description}</p>
            <span className="language" style={{ color: languageColors[project.language] }}>
              <span className="dot" style={{ backgroundColor: languageColors[project.language] }}></span>
              {project.language}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
