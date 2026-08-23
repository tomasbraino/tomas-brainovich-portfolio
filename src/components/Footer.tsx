import React from 'react';
import { contactData } from '../data/portfolioData';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="site-footer" id="contact" aria-label="Footer">
      <div className="footer-inner">
        <span className="footer-brand" id="footer-brand-title">
          {contactData.name}
        </span>

        <p className="footer-copyright" id="footer-copyright-text">
          © 2026 Tomás Brainovich. QA Engineering Specialist.
        </p>

        <div className="footer-links" id="footer-social-nav">
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            id="footer-linkedin-link"
          >
            LinkedIn
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            id="footer-github-link"
          >
            GitHub
          </a>
          <button
            type="button"
            className="footer-link"
            id="footer-email-link"
            onClick={onContactClick}
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            Email
          </button>
        </div>
      </div>
    </footer>
  );
};
