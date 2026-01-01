import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let's Connect</h2>
        <p>I'm actively looking for internship opportunities!</p>
      </motion.div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="contact-card">
          <div className="contact-intro">
            <h3>🎓 Student Developer</h3>
            <p>
              I'm a passionate student developer eager to learn and contribute to real-world projects.
              Whether you have an internship opportunity, a project idea, or just want to connect,
              I'd love to hear from you!
            </p>
          </div>

          <div className="contact-links">
            <motion.a
              href="https://github.com/Khytron"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link github"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>GitHub</span>
              <small>Check out my repositories</small>
            </motion.a>

            <motion.a
              href="mailto:your.email@example.com"
              className="contact-link email"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              <span>Email</span>
              <small>Let's get in touch</small>
            </motion.a>
          </div>

          <motion.div
            className="cta-message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <FaPaperPlane className="cta-icon" />
            <p>Open for Summer 2026 Internships!</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
