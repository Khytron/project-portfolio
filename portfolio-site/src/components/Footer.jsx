import { FaHeart, FaReact, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo footer-logo">
          <span className="logo-bracket">&lt;/</span>
          Khytron
          <span className="logo-bracket">&gt;</span>
        </div>
        <p>
          Built with <FaHeart className="heart" /> using <FaReact className="react-icon" /> React
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} Khytron. All rights reserved.
        </p>
        <a 
          href="https://github.com/Khytron/project-portfolio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="source-link"
        >
          <FaGithub /> View Source
        </a>
      </div>
    </footer>
  );
};

export default Footer;
