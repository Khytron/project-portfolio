import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaJava, FaPython, FaJs, FaGamepad, FaCode, FaFilter } from 'react-icons/fa';

const projects = [
  {
    name: "Store Management System",
    description: "A comprehensive Store Operation Management System with database integration, built collaboratively for Fundamental of Programming course.",
    html_url: "https://github.com/Khytron/Store-Management-System-7FOP",
    language: "Java",
    stars: 1,
    forks: 1,
    tags: ["Group Project", "Database", "OOP"],
    category: "backend",
    featured: true
  },
  {
    name: "Interactive World Map",
    description: "An interactive world map application allowing users to explore countries and data visually.",
    html_url: "https://github.com/Khytron/Multimedia-Interactive-World-Map-Project",
    homepage: "https://khytron.github.io/Multimedia-Interactive-World-Map-Project/",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    tags: ["Frontend", "Visualization", "Interactive"],
    category: "frontend",
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
    category: "bot",
    featured: true
  },
  {
    name: "Flappytron",
    description: "A collaborative twist on the classic Flappy Bird game, featuring unique gameplay elements and custom mechanics.",
    html_url: "https://github.com/Khytron/Flappytron",
    homepage: "https://khytron.itch.io/flappytron",
    language: "C#",
    stars: 0,
    forks: 1,
    tags: ["Game Dev", "Collaboration", "Unity"],
    category: "game",
    featured: true
  },
  {
    name: "Basic To-Do List with React",
    description: "A clean and functional to-do list application built to learn React fundamentals.",
    html_url: "https://github.com/Khytron/basic-to-do-list-with-react",
    homepage: "https://khytron.github.io/basic-to-do-list-with-react/",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    tags: ["React", "Frontend", "Learning"],
    category: "frontend",
    featured: true
  },
  {
    name: "Ninja-Line",
    description: "A creative 2D Platformer game where players control a ninja by drawing paths - unique gameplay mechanics built with Godot Engine.",
    html_url: "https://github.com/Khytron/Ninja-Line",
    homepage: "https://khytron.itch.io/ninja-puzzle",
    language: "GDScript",
    stars: 0,
    forks: 0,
    tags: ["Game Dev", "2D", "Creative Mechanics"],
    category: "game",
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
    category: "bot",
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
    category: "game",
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
    category: "backend",
    featured: false
  },
  {
    name: "Guestbook",
    description: "The place where future contributors are born",
    html_url: "https://github.com/Khytron/guestbook",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    tags: ["Frontend", "Interaction"],
    category: "frontend",
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

const filters = [
  { id: "all", label: "All Projects", icon: "🚀" },
  { id: "game", label: "Games", icon: "🎮" },
  { id: "bot", label: "Bots", icon: "🤖" },
  { id: "frontend", label: "Frontend", icon: "🎨" },
  { id: "backend", label: "Backend", icon: "⚙️" }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

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

      <motion.div 
        className="filter-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeFilter}
          className="projects-grid featured"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card featured"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              layout
            >
              <div className="project-header">
                <div className="language-icon" style={{ color: languageColors[project.language] }}>
                  {languageIcons[project.language]}
                </div>
                <div className="project-links">
                  {project.homepage && (
                    <a href={project.homepage} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
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
        </motion.div>
      </AnimatePresence>

      {otherProjects.length > 0 && (
        <>
          <motion.h3
            className="other-projects-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Other Projects
          </motion.h3>

          <AnimatePresence mode="wait">
            <motion.div 
              key={`other-${activeFilter}`}
              className="projects-grid other"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="project-card small"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  layout
                >
                  <div className="project-header">
                    <h4>{project.name}</h4>
                    <div className="project-links">
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" title="Live Demo">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <span className="language" style={{ color: languageColors[project.language] }}>
                    <span className="dot" style={{ backgroundColor: languageColors[project.language] }}></span>
                    {project.language}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {filteredProjects.length === 0 && (
        <motion.div 
          className="no-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No projects found in this category yet. Check back soon!</p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
