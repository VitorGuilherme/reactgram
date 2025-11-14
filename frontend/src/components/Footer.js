import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <p>© ReactGram. Aplicação criada por <strong>Vitor Guilherme</strong>.</p>

      <div className="social-icons">
        <a
          href="https://github.com/VitorGuilherme"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/vitor-gs-alfredo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:vitor.gsa@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Outlook"
        >
          <PiMicrosoftOutlookLogoFill />
        </a>
      </div>

      <div className="tech-stack">
        <p>Desenvolvido com:</p>
        <div className="tech-icons">
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <SiExpress title="Express" />
        </div>
      </div>
    </footer>
  );
}
