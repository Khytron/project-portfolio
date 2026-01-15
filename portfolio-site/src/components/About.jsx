import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      icon: <FaGraduationCap />,
      title: "Computer Science Student",
      description: "Currently pursuing my degree with a focus on software engineering and game development.",
      color: "#6366f1"
    },
    {
      icon: <FaLaptopCode />,
      title: "Self-Taught Developer",
      description: "Passionate about learning new technologies through hands-on projects and collaboration.",
      color: "#8b5cf6"
    },
    {
      icon: <FaRocket />,
      title: "Project Builder",
      description: "Love turning ideas into reality - from games to bots to full-stack applications.",
      color: "#06b6d4"
    },
    {
      icon: <FaHeart />,
      title: "Open Source Enthusiast",
      description: "Believe in sharing knowledge and contributing to the developer community.",
      color: "#f472b6"
    }
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Hi there! 👋</h3>
          <p>
            I'm a passionate <strong>Computer Science student</strong> with a love for creating 
            innovative software solutions. My journey in programming started with curiosity 
            and has evolved into a dedicated pursuit of excellence in software development.
          </p>
          <p>
            I specialize in <strong>Java, C++, Python, JavaScript</strong>, and <strong>Game Development</strong> 
            with Godot Engine. I enjoy building everything from automation bots to interactive games 
            to full-stack web applications.
          </p>
          <p>
            Currently, I'm <strong>actively seeking internship opportunities</strong> where I can 
            contribute my skills, learn from experienced developers, and grow as a software engineer.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-number">10+</span>
              <span className="highlight-text">Projects Completed</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">6+</span>
              <span className="highlight-text">Programming Languages</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">5+</span>
              <span className="highlight-text">Years of Coding</span>
            </div>
          </div>
        </motion.div>

        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="exp-icon" style={{ color: exp.color }}>
                {exp.icon}
              </div>
              <h4>{exp.title}</h4>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
