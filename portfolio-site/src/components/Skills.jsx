import { motion } from 'framer-motion';
import { FaRobot, FaGamepad, FaDatabase, FaMobile, FaJava, FaPython, FaJs, FaCode, FaReact, FaNodeJs, FaGitAlt, FaMagic, FaTerminal } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", icon: <FaPython />, level: 80, color: "#3776ab" },
      { name: "C#", icon: <FaCode />, level: 75, color: "#68217a" },
      { name: "Java", icon: <FaJava />, level: 85, color: "#f89820" },
      { name: "JavaScript", icon: <FaJs />, level: 70, color: "#f7df1e" },
      { name: "C++", icon: <SiCplusplus />, level: 82, color: "#00599C" },
      { name: "GDScript", icon: <FaGamepad />, level: 79, color: "#478cbf" }
    ]
  },
  {
    title: "Frameworks & Tools",
    icon: "🛠️",
    skills: [
      { name: "React", icon: <FaReact />, level: 65, color: "#61dafb" },
      { name: "Node.js", icon: <FaNodeJs />, level: 70, color: "#339933" },
      { name: "Git", icon: <FaGitAlt />, level: 80, color: "#f05032" },
      { name: "MySQL", icon: <FaDatabase />, level: 70, color: "#4479a1" },
      { name: "Godot Engine", icon: <FaGamepad />, level: 75, color: "#478cbf" },
      { name: "AI-Driven CLI Development", icon: <FaTerminal />, level: 78, color: "#00b894" }
    ]
  },
  {
    title: "Specializations",
    icon: "🎯",
    skills: [
      { name: "Prompt Engineering", icon: <FaMagic />, level: 83, color: "#fab1a0" },
      { name: "Fullstack Development", icon: <FaCode />, level: 72, color: "#a29bfe" },
      { name: "Bot Development", icon: <FaRobot />, level: 80, color: "#00d4aa" },
      { name: "Game Development", icon: <FaGamepad />, level: 75, color: "#ff6b6b" },
      { name: "Database Design", icon: <FaDatabase />, level: 70, color: "#ffd93d" },
      { name: "API Integration", icon: <FaMobile />, level: 75, color: "#6c5ce7" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Skills & Technologies</h2>
        <p>Technologies I've been working with</p>
      </motion.div>

      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.2, duration: 0.5 }}
          >
            <h3>
              <span className="category-icon">{category.icon}</span>
              {category.title}
            </h3>
            
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.1, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
